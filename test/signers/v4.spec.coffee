helpers = require('../helpers')
AWS = helpers.AWS

buildRequest = ->
  s3 = new AWS.S3({region: 'region', endpoint: 'localhost'})
  req = s3.makeRequest('listTables', {ExclusiveStartTableName: 'bår'})
  req.build()
  req.httpRequest.headers['X-Amz-User-Agent'] = 'aws-sdk-js/0.1'
  req.httpRequest

buildSigner = (request, signatureCache) ->
  if typeof signatureCache != 'boolean'
    signatureCache = true
  return new AWS.Signers.V4(request || buildRequest(), 'dynamodb', signatureCache)

buildSignerFromService = (signatureCache) ->
  if typeof signatureCache != 'boolean'
    signatureCache = true
  ddb = new AWS.DynamoDB({region: 'region', endpoint: 'localhost', apiVersion: '2011-12-05'})
  signer = buildSigner(null, signatureCache)
  signer.setServiceClientId(ddb._clientId)
  return signer

describe 'AWS.Signers.V4', ->
  date = new Date(1935346573456)
  datetime = AWS.util.date.iso8601(date).replace(/[:\-]|\.\d{3}/g, '')
  creds = null
  signature = '3587c9e946339f802660e828c37f4352750ebb19651220e165f8e09abe89e95d'
  signer = null

  beforeEach ->
    helpers.spyOn(AWS.util, 'userAgent').andReturn('aws-sdk-js/0.1')
    creds = accessKeyId: 'akid', secretAccessKey: 'secret', sessionToken: 'session'
    signer = buildSigner()
    signer.addAuthorization(creds, date)

  describe 'signature', ->
    it 'should generate proper signature', ->
      expect(signer.signature(creds, datetime)).to.equal(signature)

    xit 'should not compute SHA 256 checksum more than once', ->
      # TODO(bkeller) Why is this failing?
      spy = helpers.spyOn(AWS.util.crypto, 'sha256').andCallThrough()
      signer.signature(creds, datetime)
      expect(spy.calls.length).to.eql(1)

  describe 'stringToSign', ->
    it 'should sign correctly generated input string', ->
      expect(signer.stringToSign(datetime)).to.equal 'AWS4-HMAC-SHA256\n' +
        datetime + '\n' +
        '20310430/region/dynamodb/aws4_request\n' +
        signer.hexEncodedHash(signer.canonicalString())

  describe 'canonicalString', ->
    it 'does not double encode path for S3', ->
      req = new AWS.S3().getObject(Bucket: 'bucket', Key: 'a:b:c').build()
      signer = new AWS.Signers.V4(req.httpRequest, 's3')
      expect(signer.canonicalString().split('\n')[1]).to.equal('/a%3Ab%3Ac')

  describe 'canonicalHeaders', ->
    it 'should return headers', ->
      # Modified to use S3 headers instead of DynamoDB headers
      expect(signer.canonicalHeaders()).to.eql [
        'x-amz-date:' + datetime,
        'x-amz-security-token:session',
        'x-amz-user-agent:aws-sdk-js/0.1'
      ].join('\n')

    it 'should ignore Authorization header', ->
      signer.request.headers = {'Authorization': 'foo'}
      expect(signer.canonicalHeaders()).to.equal('')

    it 'should ignore X-Amzn-Trace-Id header', ->
      signer.request.headers = {'X-Amzn-Trace-Id': 'foo'}
      expect(signer.canonicalHeaders()).to.equal('')

    it 'should lowercase all header names (not values)', ->
      signer.request.headers = {'FOO': 'BAR'}
      expect(signer.canonicalHeaders()).to.equal('foo:BAR')

    it 'should sort headers by key', ->
      signer.request.headers = {abc: 'a', bca: 'b', Qux: 'c', bar: 'd'}
      expect(signer.canonicalHeaders()).to.equal('abc:a\nbar:d\nbca:b\nqux:c')

    it 'should compact multiple spaces in keys/values to a single space', ->
      signer.request.headers = {'Header': 'Value     with  Multiple   \t spaces'}
      expect(signer.canonicalHeaders()).to.equal('header:Value with Multiple spaces')

    it 'should strip starting and end of line spaces', ->
      signer.request.headers = {'Header': ' \t   Value  \t  '}
      expect(signer.canonicalHeaders()).to.equal('header:Value')

  describe 'presigned urls', ->

    it 'hoists content-type to the query string', ->
      req = new AWS.S3().putObject(Bucket: 'bucket', Key: 'key', ContentType: 'text/plain').build()
      signer = new AWS.Signers.V4(req.httpRequest, 's3')
      signer.updateForPresigned({}, '')
      expect(signer.canonicalString().split('\n')[2]).to.contain('Content-Type=text%2Fplain')

    it 'hoists content-md5 to the query string', ->
      req = new AWS.S3().putObject(Bucket: 'bucket', Key: 'key', ContentMD5: 'foobar==').build()
      signer = new AWS.Signers.V4(req.httpRequest, 's3')
      signer.updateForPresigned({}, '')
      expect(signer.canonicalString().split('\n')[2]).to.contain('Content-MD5=foobar%3D%3D')
