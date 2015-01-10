"use strict";

var expect = require("chai").expect,
    AmbilightApi = require("../ambilight-api"),
    testValues = require("./support/testValues.js");

// test channels-api
describe("Channels API", function () {

  // test: getChannels
  describe("#channels", function () {

    var _validateResult = function (results, cb) {
      expect(results).to.exist;
      expect(results).to.be.an('object');

      cb();
    };

    describe("#promise", function () {
      it("find tv channels", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getChannels().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find channels tv", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getChannels(function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });
    });
  });

  // test: getChannelsCurrent
  describe("#channelsCurrent", function () {

    var _validateResult = function (results, cb) {
      expect(results).to.exist;
      expect(results.id).to.exist;
      expect(results).to.be.an('object');

      cb();
    };
    
    describe("#promise", function () {

      it("find tv channel current", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getChannelsCurrent().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find current tv channel", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getChannelsCurrent(function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });
    });
  });
    
  // test: getChannelsId
  describe("#channelsId", function () {

    var _validateResult = function (results, cb) {
      expect(results).to.exist;
      expect(results.preset).to.exist;
      expect(results.name).to.exist;
      expect(results.frequency).to.exist;
      expect(results).to.be.an('object');

      cb();
    };
    
    describe("#promise", function () {

      it("find tv channel by Id", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getChannelsId(5078).then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find tv channel Id by", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getChannelsId(5078, function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });
    });
  });
});