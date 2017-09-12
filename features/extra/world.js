var world = require('./helpers');
var path = require('path');

world.AWS = require('../../lib/aws');
try {
  world.AWS.config.loadFromPath(path.resolve('./configuration'));
} catch (e) {} finally {
  process.env['CONFIGURED_REGION'] = world.AWS.config.region || new world.AWS.Config().region;
}

if (process.env['S3_ENDPOINT']) {
    var S3_constructor = world.AWS.S3;
    world.AWS.S3 = function () {
        var s3 = new S3_constructor(arguments);
        s3.endpoint = new world.AWS.Endpoint(process.env['S3_ENDPOINT']);
        return s3;
    }
}

var WorldConstructor = function WorldConstructor(callback) {
  callback(world);
};

exports.World = WorldConstructor;
exports.WorldInstance = world;
