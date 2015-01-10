"use strict";

var expect = require("chai").expect,
    AmbilightApi = require("../ambilight-api"),
    testValues = require("./support/testValues.js");

// test system-api
describe("System API", function () {

  // test: getSystem
  describe("#system", function () {

    var _validateResult = function (results, cb) {
      expect(results).to.exist;
      expect(results).to.be.an('object');

      cb();
    };

    describe("#promise", function () {
      it("find system", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystem().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find system", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystem(function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });
    });
  });

  // test: getSystemCountry
  describe("#systemCountry", function () {

    var _validateResult = function (results, cb) {
      expect(results).to.exist;
      expect(results).to.be.an('object');

      cb();
    };

    describe("#promise", function () {
      it("find system country", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystemCountry().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find country system", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystemCountry(function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });
    });
  });

  // test: getSystemName
  describe("#systemName", function () {

    var _validateResult = function (results, cb) {
      expect(results).to.exist;
      expect(results).to.be.an('object');

      cb();
    };

    describe("#promise", function () {
      it("find system name", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystemName().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find name system", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystemName(function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });
    });
  });

  // test: getSystemMenulanguage
  describe("#systemMenulanguage", function () {

    var _validateResult = function (results, cb) {
      expect(results).to.exist;
      expect(results).to.be.an('object');

      cb();
    };

    describe("#promise", function () {
      it("find system menulanguage", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystemMenulanguage().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find menulanguage system", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystemMenulanguage(function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });
    });
  });

  // test: getSystemModel
  describe("#systemModel", function () {

    var _validateResult = function (results, cb) {
      expect(results).to.exist;
      expect(results).to.be.an('object');

      cb();
    };

    describe("#promise", function () {
      it("find system model", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystemModel().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find model system", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystemModel(function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });
    });
  });

  // test: getSystemSerialnumber
  describe("#systemSerialnumber", function () {

    var _validateResult = function (results, cb) {
      expect(results).to.exist;
      expect(results).to.be.an('object');

      cb();
    };

    describe("#promise", function () {
      it("find system serialnumber", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystemSerialnumber().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find model system", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystemSerialnumber(function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });
    });
  });

  // test: getSystemSoftwareversion
  describe("#systemSoftwareversion", function () {

    var _validateResult = function (results, cb) {
      expect(results).to.exist;
      expect(results).to.be.an('object');

      cb();
    };

    describe("#promise", function () {
      it("find system softwareversion", function (done) {
        function checkResults(results) {
          _validateResult(results, done);
        }

        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystemSoftwareversion().then(checkResults).done();
      });
    });

    describe("#callback", function () {

      it("find softwareversion system", function (done) {
        var ambi = new AmbilightApi(testValues.host);
        ambi.getSystemSoftwareversion(function (err, results) {
          if (err) {
            throw err;
          }
          _validateResult(results, done);
        });
      });
    });
  });

});