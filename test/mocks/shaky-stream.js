var stream = require('stream');
var util = require('util');

var Readable = stream.Readable;

var timeoutFn = typeof setTimeoutOrig === 'function' ? setTimeoutOrig : setTimeout;

/**
 * ShakyStream will send data in 2 parts, pausing between parts.
 */
function ShakyStream(options) {
    if (!(this instanceof ShakyStream)) {
        return new ShakyStream(options);
    }
    if (!options.highWaterMark) {
        options.highWaterMark = 1024 * 16;
    }
    this._shakyTime = options.pauseFor;
    this._didStart = false;
    this._isPaused = false;

    Readable.call(this, options);

}

util.inherits(ShakyStream, Readable);

ShakyStream.prototype._read = function _read(size) {
    if (!this._didStart) {
        this._didStart = true;
        this.push(Buffer.from('<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<root><Count>1</Count><Items><element><dat'));
    }
    if (this._didStart && this._isPaused) {
        return;
    } else if (this._didStart) {
        this._isPaused = true;
        var self = this;
        timeoutFn(function() {
            self.push(Buffer.from('eUTC><N>1481494545591</N></dateUTC><id><S>2016-12-11</S></id><ja' +
                'vascript><M><baz><S>buz</S></baz><foo><S>bar</S></foo></M></javascript></element><' +
                '/Items><ScannedCount>1</ScannedCount></root>'));
            self.push(null);
        }, this._shakyTime);
    }
};

module.exports = ShakyStream;
