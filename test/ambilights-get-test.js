"use strict";

var expect = require("chai").expect,
    AmbilightApi = require("../ambilight-api"),
    testValues = require("./support/testValues.js");

// test ambilight-api
describe("Ambilight API", function () {

  // test: getTopology
  describe("#topology", function () {

    describe("#promise", function() {

      it("should find some", function (done) {
        function checkResults(results) {
          _validateTopologyResult(results, done);
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
          _validateTopologyResult(results, done);
        });
      });
    });

    function _validateTopologyResult(results, cb) {
      expect(results).to.exist;
      expect(results.left).to.equal(testValues.leftCount);
      expect(results.right).to.equal(testValues.rightCount);
      expect(results.top).to.equal(testValues.topCount);
      expect(results.bottom).to.equal(testValues.bottomCount);
      expect(results.layers).to.equal(testValues.layersCount);

      //TODO do this for all the lights
      _validateTopology(results);

      cb();
    }

    function _validateTopology(obj) {
      expect(obj).to.have.keys("layers", "left", "top", "right", "bottom");
    }
  });

  // test: getCached
  describe("#mode", function () {

    describe("#promise", function() {

      it("should find the cached values", function (done) {
        function checkMode(results) {
          _validateLayeredResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getCached().then(checkMode).done();
      });
    });

    describe("#callback", function () {

      it("should find the values cached", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getCached(function (err, results) {
          if (err) {
            throw err;
          }
          _validateLayeredResult(results, done);
        });
      });
    });

  });

  // test: getMode
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

    function _validateModeResult(results, cb) {
      expect(results).to.exist;
      expect(results).to.have.property('current');
      expect(results.current).to.be.a('string');

      cb();
    }
  });

  // test: getProcessed
  describe("#processed", function () {

    describe("#promise", function() {

      it("should find the processed values", function (done) {
        function checkProcessed(results) {
          _validateLayeredResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getProcessed().then(checkProcessed).done();
      });
    });

    describe("#callback", function () {

      it("should find the values processed", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getProcessed(function (err, results) {
          if (err) {
            throw err;
          }
          _validateLayeredResult(results, done);
        });
      });
    });
  });
  
  // test: getMeasured
  describe("#measured", function () {

    describe("#promise", function() {

      it("should find the measured lights", function (done) {
        function checkMeasured(results) {
          _validateLayeredResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getMeasured().then(checkMeasured).done();
      });
    });

    describe("#callback", function () {

      it("should find the lights measured", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getMeasured(function (err, results) {
          if (err) {
            throw err;
          }
          _validateLayeredResult(results, done);
        });
      });
    });
  });
});

function _validateLayeredResult(results, cb) {
  expect(results).to.exist;
  expect(results.layer1).to.be.an('object');
  expect(results.layer1.left).to.be.an('object');
  expect(results.layer1.top).to.be.an('object');
  expect(results.layer1.right).to.be.an('object');
  expect(results.layer1.bottom).to.be.an('object');

  cb();
}
