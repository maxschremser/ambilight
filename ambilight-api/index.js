"use strict";

var Q = require("q")
    , http = require("node-hue-api/hue-api/httpPromise")
    , utils = require('node-hue-api/hue-api/utils')
    , lightsApi = require('../commands/lights-api');
;

function AmbilightApi(host, timeout) {
  if (host.indexOf(':') < 0)
    host += ":1925";
  this.host = host;
  this.timeout = timeout || 10000;
}

module.export = AmbilightApi;

/**
 * Obtains the details of the individual lights that are attached to the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.ambilights = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(lightsApi.getTopology, options);

  return utils.promiseOrCallback(promise, cb);
};

/**
 * Creates a default options object for connecting with a TV.
 *
 * @param api The api that contains the host for the TV.
 * @returns {{host: *, timeout: *}}
 * @private
 */
function _defaultOptions(api) {
  return {
    "host"    : api.host,
    "timeout": api.timeout
  };
}