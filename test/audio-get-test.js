"use strict";

var expect = require("chai").expect,
    AmbilightApi = require("../ambilight-api"),
    testValues = require("./support/testValues.js");

// test ambilight-api
describe("Ambilight Audio API", function () {

  // test: get Audio
  describe("#audio", function () {

    describe("#promise", function() {

      it("should find some audio", function (done) {
        function checkResults(results) {
          _validateAudioResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getAudioVolume().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("should find some audio", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getAudioVolume(function (err, results) {
          if (err) {
            throw err;
          }
          _validateAudioResult(results, done);
        });
      });
    });

    function _validateAudioResult(results, cb) {
      expect(results).to.exist;
      expect(results.muted).to.be.a('boolean');
      //expect(results.current).to.be.gt(0);
      expect(results.min).to.equal(0);
      expect(results.max).to.equal(60);

      cb();
    }

  }); // #audio

}); // # ambilight audio api