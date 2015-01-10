"use strict";

var expect = require("chai").expect,
    AmbilightApi = require("../ambilight-api"),
    testValues = require("./support/testValues.js");

function _validateAudioResult(results, cb) {
  expect(results).to.exist;
  expect(results).to.equal('<html><head><title>Ok</title></head><body>Ok</body></html>');

  cb();
}

// test audio-api
describe("Audio API", function () {

  // test: postMode
  describe("#post-audio/volume", function () {

    describe("#promise", function () {

      var ambi = new AmbilightApi(testValues.host);

      it("should post muted audio/volume", function (done) {
        function checkResults(results) {
          _validateAudioResult(results, done);
        }

        ambi.postAudioVolume(10, true).then(checkResults).done();
      });

      it("should post audio/volume muted", function (done) {
        function checkResults(results) {
          _validateAudioResult(results, done);
        }

        ambi.postAudioVolume(10, false).then(checkResults).done();
      });

    });

    describe("#callback", function () {

      var ambi = new AmbilightApi(testValues.host);
      it("should post muted volume/audio", function (done) {

        ambi.postAudioVolume(11, true, function (err, results) {
          if (err) {
            throw err;
          }
          _validateAudioResult(results, done);
        });
      });

      it("should post volume/audio muted", function (done) {

        ambi.postAudioVolume(11, false, function (err, results) {
          if (err) {
            throw err;
          }
          _validateAudioResult(results, done);
        });
      });

    });
  });
});