"use strict";

var Q = require("q")
    , http = require("./httpPromise")
    , utils = require('node-hue-api/hue-api/utils')
    , ambilightsApi = require('./commands/ambilights-api')
    , audioApi = require('./commands/audio-api')
    , channellistsApi = require('./commands/channellists-api')
    , channelsApi = require('./commands/channels-api')
    , inputApi = require('./commands/input-api')
    , sourcesApi = require('./commands/sources-api')
    , systemApi = require('./commands/system-api')
;

function AmbilightApi(host, timeout) {
  this.host = host;
  this.port = 1925;
  this.timeout = timeout || 10000;
}

module.exports = AmbilightApi;

/**
 * Obtains the topology of the individual lights that are attached to the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.ambilights = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(ambilightsApi.getTopology, options);
  return utils.promiseOrCallback(promise, cb);
};



/**
 * Creates a default options object for connecting with a TV.
 *
 * @param api The api that contains the host for the TV.
 * @returns {{host: *, port: *, timeout: *}}
 * @private
 */
function _defaultOptions(api) {
  return {
    "host"    : api.host,
    "port"    : 1925,
    "timeout" : api.timeout
  };
}