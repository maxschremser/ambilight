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
describe("Sources API", function () {

  // test: postSourcesCurrent
  describe("#post-sources-current", function () {

    describe("#promise", function () {

      var ambi = new AmbilightApi(testValues.host);

      it("should post sources current", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        ambi.postSourcesCurrent("11").then(checkResults).done();
      });

    });

    describe("#callback", function () {

      var ambi = new AmbilightApi(testValues.host);
      it("should post current sources", function (done) {

        ambi.postSourcesCurrent("11", function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });

    });
  });
});