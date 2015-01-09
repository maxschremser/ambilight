"use strict";

var expect = require("chai").expect,
    AmbilightApi = require("../ambilight-api"),
    testValues = require("./support/testValues.js");


describe("Ambilight API", function () {

  // test: getTopology
  describe("#topology", function () {

    describe("#promise", function() {

      it("should find some", function (done) {
        function checkResults(results) {
          _validateAmbilightsResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
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

  // test: getCached
  describe("#mode", function () {

    describe("#promise", function() {

      it("should find the modes available", function (done) {
        function checkMode(results) {
          _validateModeResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getMode().then(checkMode).done();
      });
    });

    describe("#callback", function () {

      it("should find the available modes", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getMode(function (err, results) {
          if (err) {
            throw err;
          }
          _validateModeResult(results, done);
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

function _validateModeResult(results, cb) {
  expect(results).to.exist;
  expect(results.current).to.exist;
  cb();
}

function _validateCachedResult(results, cb) {
  expect(results).to.exist;
  console.log("left:" + JSON.stringify(results.left));
  expect(results.left).to.be.an('object');
  expect(results.top).to.be.an('object');
  expect(results.right).to.be.an('object');
  expect(results.bottom).to.be.an('object');
  expect(results.layers).to.be.an('object');

  //TODO do this for all the lights
  _validateAmbilight(results);

  cb();
}
