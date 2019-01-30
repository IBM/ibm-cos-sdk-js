helpers = require('./helpers')
ShakyStream = require('./mocks/shaky-stream')
AWS = helpers.AWS

EventEmitter = require('events').EventEmitter;

httpModule = require('http');

if AWS.util.isNode()
  describe 'AWS.NodeHttpClient', ->
    http = new AWS.NodeHttpClient()

    describe 'maxSockets delegation', ->
      it 'delegates maxSockets from agent to globalAgent', ->
        https = require('https')
        agent = http.sslAgent()
        https.globalAgent.maxSockets = 5
        expect(https.globalAgent.maxSockets).to.equal(agent.maxSockets)
        https.globalAgent.maxSockets += 1
        expect(https.globalAgent.maxSockets).to.equal(agent.maxSockets)

      it 'overrides globalAgent value if global is set to Infinity', ->
        https = require('https')
        agent = http.sslAgent()
        https.globalAgent.maxSockets = Infinity
        expect(agent.maxSockets).to.equal(50)

      it 'overrides globalAgent value if global is set to false', ->
        https = require('https')
        oldGlobal = https.globalAgent
        https.globalAgent = false
        agent = http.sslAgent()
        expect(agent.maxSockets).to.equal(50)
        https.globalAgent = oldGlobal

    describe 'handleRequest', ->
      it 'emits error event', (done) ->
        req = new AWS.HttpRequest 'http://invalid'
        http.handleRequest req, {}, null, (err) ->
          expect(err.code).to.equal('ENOTFOUND')
          done()

      it 'supports timeout in httpOptions', ->
        numCalls = 0
        req = new AWS.HttpRequest 'http://1.1.1.1'
        http.handleRequest req, {timeout: 1}, null, (err) ->
          numCalls += 1
          expect(err.code).to.equal('TimeoutError')
          expect(err.message).to.equal('Connection timed out after 1ms')
          expect(numCalls).to.equal(1)

      it 'supports connectTimeout in httpOptions', ->
        numCalls = 0
        req = new AWS.HttpRequest 'http://10.255.255.255'
        http.handleRequest req, connectTimeout: 1, null, (err) ->
          numCalls += 1
          expect(err.code).to.equal 'TimeoutError'
          expect(err.message).to.equal 'Socket timed out without establishing a connection'
          expect(numCalls).to.equal 1

      describe 'timeout', ->
        it 'is obeyed even after response headers are received', (done) ->
          # a mock server with 'ShakyStream' allows us to simulate a period of socket inactivity
          server = httpModule.createServer (req, res) ->
            res.setHeader 'Content-Type', 'application/xml'
            ss = new ShakyStream
              pauseFor: 1000 # simulate 1 second pause while receiving data
            ss.pipe res
          server.listen 3334
          s3 = new AWS.S3
            endpoint: 'http://127.0.0.1:3334'
            httpOptions:
              timeout: 100
          s3.createBucket bucket: 'foo', (err, data) ->
            server.close()
            expect(err.name).to.equal 'TimeoutError'
            done()

        it 'does not trigger unnecessarily', (done) ->
          # a mock server with 'ShakyStream' allows us to simulate a period of socket inactivity
          server = httpModule.createServer (req, res) ->
            res.setHeader 'Content-Type', 'application/xml'
            ss = new ShakyStream
              pauseFor: 100 # simulate 100 ms pause while receiving data
            ss.pipe res
          server.listen 3334
          s3 = new AWS.S3
            endpoint: 'http://127.0.0.1:3334'
            httpOptions:
              timeout: 1000
          s3.createBucket bucket: 'foo', (err, data) ->
            server.close()
            expect(err).to.equal null
            done()


