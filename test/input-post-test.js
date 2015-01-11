"use strict";

var expect = require("chai").expect,
    AmbilightApi = require("../ambilight-api"),
    testValues = require("./support/testValues.js");

function _validateResult(results, cb) {
  expect(results).to.exist;
  expect(results).to.equal('<html><head><title>Ok</title></head><body>Ok</body></html>');

  cb();
}

// test input-api
describe("Input API", function () {

  // test: postInputKey
  describe("#post-input", function () {

    describe("#promise", function () {

      var ambi = new AmbilightApi(testValues.host);

      it("should post VolumeUp", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        ambi.postInputKey("VolumeUp").then(checkResults).done();
      });

      it("should post volumeDown", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        ambi.postInputKey("VolumeDown").then(checkResults).done();
      });

    });

    describe("#callback", function () {

      var ambi = new AmbilightApi(testValues.host);
      it("should post key VolumeUp", function (done) {

        ambi.postInputKey("VolumeUp", function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });

      it("should post key VolumeDown", function (done) {

        ambi.postInputKey("VolumeDown", function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });

    });
  });
});