"use strict";

var expect = require("chai").expect,
    AmbilightApi = require("../"),
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
  expect(results).to.have.property("layers");
  expect(results.left).to.have(testValues.leftCount);
  expect(results.right).to.have(testValues.rightCount);
  expect(results.top).to.have(testValues.topCount);
  expect(results.bottom).to.have(testValues.bottomCount);
  expect(results.layers).to.have(testValues.layersCount);

  //TODO do this for all the lights
  _validateLight(results.lights[0]);

  cb();
}

function _validateLight(light) {
  expect(light).to.have.keys("id", "name");
}