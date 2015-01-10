"use strict";

var expect = require("chai").expect,
    AmbilightApi = require("../ambilight-api"),
    testValues = require("./support/testValues.js");

var _validateChannellistsResult = function (results, cb) {
  expect(results).to.exist;
  expect(results.tv_all).to.be.an('object');
  expect(results.tv_favourite).to.be.an('object');
  expect(results.tv_radio).to.be.an('object');
  expect(results.tv_tv).to.be.an('object');
  expect(results.sat_all).to.be.an('object');
  expect(results.sat_favourite).to.be.an('object');
  expect(results.sat_radio).to.be.an('object');
  expect(results.sat_tv).to.be.an('object');

  cb();
};

var _validateChannellistsIdResult = function (results, cb) {
  expect(results).to.exist;
  expect(results).to.be.an('array');

  cb();
};

// test channellists-api
describe("Channellists API", function () {

  // test: getChannellists
  describe("#channellists", function () {

    describe("#promise", function () {
      it("find tv channellists", function (done) {
        function checkResults(results) {
          _validateChannellistsResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getChannellists().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find channellists tv", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getChannellists(function (err, results) {
          if (err) {
            throw err;
          }
          _validateChannellistsResult(results, done);
        });
      });
    });
  });

  // test: getChannellistsId: tv_tv, tv_all, tv_favourite, ...
  describe("#channellistsId", function () {

    describe("#promise", function () {

      it("find tv channellistsId", function (done) {
        function checkResults(results) {
          _validateChannellistsIdResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getChannellistsId('tv_all').then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find channellistsId tv", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getChannellistsId('tv_all', function (err, results) {
          if (err) {
            throw err;
          }
          _validateChannellistsIdResult(results, done);
        });
      });
    });
  });
});