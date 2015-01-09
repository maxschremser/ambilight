"use strict";

var expect = require("chai").expect,
    AmbilightApi = require("../ambilight-api"),
    testValues = require("./support/testValues.js");


describe("Ambilight API", function () {

  describe("#lights", function () {

    describe("#promise", function() {

      it("should find some", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        function checkResults(results) {
          _validateAmbilightsResult(results, done);
        }
        ambi.getTopology().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("should find some lights", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getTopology(function (err, results) {
          if (err) {
            throw err;
          }
          _validateAmbilightsResult(results, done);
        });
      });
    });
  });
});

function _validateAmbilightsResult(results, cb) {
  expect(results).to.exist;
  expect(results.left).to.equal(testValues.leftCount);
  expect(results.right).to.equal(testValues.rightCount);
  expect(results.top).to.equal(testValues.topCount);
  expect(results.bottom).to.equal(testValues.bottomCount);
  expect(results.layers).to.equal(testValues.layersCount);

  //TODO do this for all the lights
  _validateAmbilight(results);

  cb();
}

function _validateAmbilight(obj) {
  expect(obj).to.have.keys("layers", "left", "top", "right", "bottom");
}