"use strict";

var expect = require("chai").expect,
    AmbilightApi = require("../ambilight-api"),
    testValues = require("./support/testValues.js");

// test sources-api
describe("Sources API", function () {

  // test: getSources
  describe("#sources", function () {

    var _validateResult = function (results, cb) {
      expect(results).to.exist;
      expect(results).to.be.an('object');

      cb();
    };

    describe("#promise", function () {
      it("find sources", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getSources().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find sources", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getSources(function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });
    });
  });

  // test: getSourcesCurrent
  describe("#sourcesCurrent", function () {

    var _validateResult = function (results, cb) {
      expect(results).to.exist;
      expect(results).to.be.an('object');

      cb();
    };
    
    describe("#promise", function () {

      it("find sources current", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getSourcesCurrent().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find current sources", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getSourcesCurrent(function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });
    });
  });
});