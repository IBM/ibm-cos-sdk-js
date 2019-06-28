var helpers = require('../helpers');
var AWS = helpers.AWS;

describe('AWS.S3.Parameters', function () {
    describe('extended listing', function () {
        var extendedListingMockResponseBasic = {
            IsTruncated: false,
            Buckets: [
                {
                    Name: 'bucketnamefoo',
                    CreationDate: new Date(2015, 1, 1).toUTCString(),
                    LocationConstraint: 'bar-standard'
                }
            ],
            Owner: {
                DisplayName: 'ownerfoo',
                ID: 'idfoo'
            }
        };

        it('should add ?extended to path', function (done) {
            var service = new AWS.S3({
                accessKeyId: 'aki',
                secretAccessKey: 'sac',
                serviceInstanceId: 'sid'
            });
            helpers.mockResponse(extendedListingMockResponseBasic);

            var request = service.listBucketsExtended();
            request.send(function (err) {
                if (err) {
                    done(err);
                } else {
                    var response = this;
                    expect(request.httpRequest.method).to.eq('GET');
                    expect(request.httpRequest.path).to.eq('/?extended');
                    expect(response.Buckets).to.have.length(1);
                    done();
                }
            });
        });
    });
});
