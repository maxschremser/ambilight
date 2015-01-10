"use strict";

var expect = require("chai").expect,
    AmbilightApi = require("../ambilight-api"),
    testValues = require("./support/testValues.js");

function _validateModeResult(results, cb) {
  expect(results).to.exist;
  expect(results).to.equal('<html><head><title>Ok</title></head><body>Ok</body></html>');

  cb();
}

// test ambilight-api
describe("Ambilight API", function () {

  // test: postMode
  describe("#post-mode", function () {

    describe("#promise", function () {

      var ambi = new AmbilightApi(testValues.host);

      it("should post mode-expert", function (done) {
        function checkResults(results) {
          _validateModeResult(results, done);
        }

        ambi.postMode("expert").then(checkResults).done();
      });

      it("should post mode-manual", function (done) {
        function checkResults(results) {
          _validateModeResult(results, done);
        }

        ambi.postMode("manual").then(checkResults).done();
      });

      it("should post mode-internal", function (done) {
        function checkResults(results) {
          _validateModeResult(results, done);
        }

        ambi.postMode("internal").then(checkResults).done();
      });
    });

    describe("#callback", function () {

      var ambi = new AmbilightApi(testValues.host);
      it("should mode post-manual", function (done) {

        ambi.postMode("manual", function (err, results) {
          if (err) {
            throw err;
          }
          _validateModeResult(results, done);
        });
      });

      it("should mode post-expert", function (done) {

        ambi.postMode("expert", function (err, results) {
          if (err) {
            throw err;
          }
          _validateModeResult(results, done);
        });
      });

      it("should mode post-internal", function (done) {

        ambi.postMode("internal", function (err, results) {
          if (err) {
            throw err;
          }
          _validateModeResult(results, done);
        });
      });
    });
  });

  // test: postCached
  describe("#post-cached", function () {

    function _validateCacheResult(results, cb) {
      expect(results).to.exist;
      expect(results).to.equal('<html><head><title>Ok</title></head><body>Ok</body></html>');

      cb();
    }

    describe("#promise", function () {

      it("should set values to the cache", function (done) {
        function checkResults(results) {
          _validateCacheResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.postCached({"r": 100, "g": 210, "b":30}).then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("should set the values cached", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.postCached({"r": 101, "g": 210, "b":30}, function (err, results) {
          if (err) {
            throw err;
          }
          _validateCacheResult(results, done);
        });
      });
    });
  });
});