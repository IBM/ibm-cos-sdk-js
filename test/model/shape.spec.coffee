helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.Model.Shape', ->

  describe 'Traits', ->
    it 'inherits streaming trait', ->
      api = new AWS.Model.Api shapes: S1: { 'type': 'blob', 'streaming': true }
      shape = AWS.Model.Shape.create { members: { body: { shape: 'S1' } } }, { api: api }
      expect(shape.members.body.isStreaming).to.eql(true)

  describe 'TimestampShape', ->
    it 'can be inherited', ->
      api = new AWS.Model.Api
        metadata:
          timestampFormat: 'rfc822'
        shapes:
          S1:
            type: 'timestamp'
            timestampFormat: 'iso8601'
      shape = AWS.Model.Shape.create
        members:
          Date:
            shape: 'S1'
      , api: api
      expect(shape.members.Date.timestampFormat).to.eql 'iso8601'

    it 'prefers rfc822 if header', ->
      api = new AWS.Model.Api
        metadata:
          timestampFormat: 'iso8601'
        shapes:
          S1:
            type: 'timestamp'
      shape = AWS.Model.Shape.create
        members:
          Date:
            shape: 'S1'
            location: 'header'
      , api: api
      expect(shape.members.Date.timestampFormat).to.eql 'rfc822'

    it 'prefers own timestampFormat if not header', ->
      api = new AWS.Model.Api
        metadata:
          timestampFormat: 'iso8601'
        shapes:
          S1:
            type: 'timestamp'
            timestampFormat: 'rfc822'
      shape = AWS.Model.Shape.create
        members:
          Date:
            shape: 'S1'
            timestampFormat: 'iso8601'
      , api: api
      expect(shape.members.Date.timestampFormat).to.eql 'iso8601'

    it 'will use api metadata timestampFormat if not found elsewhere', ->
      api = new AWS.Model.Api
        metadata:
          timestampFormat: 'unixTimestamp'
        shapes:
          S1:
            type: 'timestamp'
      shape = AWS.Model.Shape.create
        members:
          Date:
            shape: 'S1'
      , api: api
      expect(shape.members.Date.timestampFormat).to.eql 'unixTimestamp'

    it 'will default to unixTimestamp when if not specified and protocol is json', ->
      api = new AWS.Model.Api
        metadata:
          protocol: 'json'
        shapes:
          S1:
            type: 'timestamp'
      shape = AWS.Model.Shape.create
        members:
          Date:
            shape: 'S1'
      , api: api
      expect(shape.members.Date.timestampFormat).to.eql 'unixTimestamp'

    it 'will default to unixTimestamp when if not specified and protocol is rest-json', ->
      api = new AWS.Model.Api
        metadata:
          protocol: 'rest-json'
        shapes:
          S1:
            type: 'timestamp'
      shape = AWS.Model.Shape.create
        members:
          Date:
            shape: 'S1'
      , api: api
      expect(shape.members.Date.timestampFormat).to.eql 'unixTimestamp'

    it 'will default to iso8601 when if not specified and protocol is rest-xml', ->
      api = new AWS.Model.Api
        metadata:
          protocol: 'rest-xml'
        shapes:
          S1:
            type: 'timestamp'
      shape = AWS.Model.Shape.create
        members:
          Date:
            shape: 'S1'
      , api: api
      expect(shape.members.Date.timestampFormat).to.eql 'iso8601'

    it 'will default to iso8601 when if not specified and protocol is query', ->
      api = new AWS.Model.Api
        metadata:
          protocol: 'query'
        shapes:
          S1:
            type: 'timestamp'
      shape = AWS.Model.Shape.create
        members:
          Date:
            shape: 'S1'
      , api: api
      expect(shape.members.Date.timestampFormat).to.eql 'iso8601'

    describe 'toType()', ->
      it 'converts unix timestamps', ->
        api = new AWS.Model.Api metadata: timestampFormat: 'unixTimestamp'
        shape = AWS.Model.Shape.create { type: 'timestamp' }, { api: api }
        date = shape.toType(12300)
        expect(date).to.eql(new Date(12300000))

      it 'converts iso8601 timestamps', ->
        api = new AWS.Model.Api metadata: timestampFormat: 'iso8601'
        shape = AWS.Model.Shape.create { type: 'timestamp' }, { api: api }
        date = shape.toType('1970-01-01T00:00:00Z')
        expect(date).to.eql(new Date(0))

      it 'converts rfc822 timestamps', ->
        api = new AWS.Model.Api metadata: timestampFormat: 'rfc822'
        shape = AWS.Model.Shape.create { type: 'timestamp' }, { api: api }
        date = shape.toType('Thu, 01 Jan 1970 00:00:00 GMT')
        expect(date).to.eql(new Date(0))

    describe 'toWireFormat()', ->
      it 'converts all header shapes to rfc822', ->
        api = new AWS.Model.Api metadata: timestampFormat: 'unixTimestamp'
        shape = AWS.Model.Shape.create { type: 'timestamp', location: 'header' }, { api: api }
        date = shape.toWireFormat(new Date(0))
        expect(date).to.match(/Thu, 0?1 Jan 1970 00:00:00 (GMT|UTC)/)

      it 'converts all timestamps in JSON protocol to unixTimestamp', ->
        # json rpc
        api = new AWS.Model.Api metadata: protocol: 'json'
        shape = AWS.Model.Shape.create { type: 'timestamp' }, { api: api }
        date = shape.toWireFormat(new Date(12300000))
        expect(date).to.equal(12300)

        # rest-json
        api = new AWS.Model.Api metadata: protocol: 'rest-json'
        shape = AWS.Model.Shape.create { type: 'timestamp' }, { api: api }
        date = shape.toWireFormat(new Date(12300000))
        expect(date).to.equal(12300)

      it 'converts all timestamps in XML/query protocol to iso8601', ->
        # rest-xml
        api = new AWS.Model.Api metadata: protocol: 'rest-xml'
        shape = AWS.Model.Shape.create { type: 'timestamp' }, { api: api }
        date = shape.toWireFormat(new Date(12300000))
        expect(date).to.equal('1970-01-01T03:25:00Z')

        # query
        api = new AWS.Model.Api metadata: protocol: 'query'
        shape = AWS.Model.Shape.create { type: 'timestamp' }, { api: api }
        date = shape.toWireFormat(new Date(12300000))
        expect(date).to.equal('1970-01-01T03:25:00Z')

    describe 'BooleanShape', ->
      describe 'toType()', ->
        shape = AWS.Model.Shape.create { type: 'boolean' }

        it 'converts true / false booleans', ->
          expect(shape.toType(true)).to.eql(true)
          expect(shape.toType(false)).to.eql(false)

        it 'converts string "true" and "false" to boolean', ->
          expect(shape.toType('true')).to.eql(true)
          expect(shape.toType('false')).to.eql(false)

        it 'converts other strings to false', ->
          expect(shape.toType('nottrue')).to.eql(false)

        it 'converts null/undefined to null', ->
          expect(shape.toType(null)).to.eql(null)
          expect(shape.toType(undefined)).to.eql(null)
