"use strict";

var expect = require("chai").expect,
    AmbilightApi = require("../ambilight-api"),
    testValues = require("./support/testValues.js");

function _validateChannelsResult(results, cb) {
  expect(results).to.exist;
  expect(results).to.equal('<html><head><title>Ok</title></head><body>Ok</body></html>');

  cb();
}

// test channels-api
describe("Channels API", function () {

  // test: postMode
  describe("#post channels current", function () {

    describe("#promise", function () {

      var ambi = new AmbilightApi(testValues.host);

      it("should post channels current", function (done) {
        function checkResults(results) {
          console.log(results);
          _validateChannelsResult(results, done);
        }

        ambi.postChannelsCurrent("5079").then(checkResults).done();
      });

    });

    describe("#callback", function () {

      var ambi = new AmbilightApi(testValues.host);
      it("should post current channels", function (done) {

        ambi.postChannelsCurrent("5088", function (err, results) {
          if (err) {
            throw err;
          }
          _validateChannelsResult(results, done);
        });
      });

    });
  });
});