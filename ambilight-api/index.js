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

///////////////////////////////////////////////////////////////////////////////////////////
// Ambilight Methods
///////////////////////////////////////////////////////////////////////////////////////////

/**
 * Obtains the topology of the individual lights that are attached to the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getTopology = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(ambilightsApi.getTopology, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains the cached lights that are attached to the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getCached = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(ambilightsApi.getCached, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Sets the cache on the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.postCached = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(ambilightsApi.postCached, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains the mode of the Philips Ambilight TV.
 * internal, manual or expert
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getMode = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(ambilightsApi.getMode, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Sets the mode on the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.postMode = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(ambilightsApi.postMode, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains the processed values of the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getProcessed = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(ambilightsApi.getProcessed, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Sets the mode on the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getMeasured = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(ambilightsApi.getMeasured, options);
  return utils.promiseOrCallback(promise, cb);
};

///////////////////////////////////////////////////////////////////////////////////////////
// Audio Methods
///////////////////////////////////////////////////////////////////////////////////////////
/**
 * Obtains the audio volume from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getAudioVolume = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(audioApi.getAudioVolume, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Sets the audio volume on the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.postAudioVolume = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(audioApi.postAudioVolume, options);
  return utils.promiseOrCallback(promise, cb);
};

///////////////////////////////////////////////////////////////////////////////////////////
// Channellist Methods
///////////////////////////////////////////////////////////////////////////////////////////
/**
 * Obtains the channellist from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getChannellists = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(channellistsApi.getChannellists, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains a specific channel from a channellist from the Philips Ambilight TV.
 *
 * @param id The Id of the Channel as an integer, this value will be parsed into an integer value so can be a {String} or
 * {Number} value.
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getChannellistsId = function (id, cb) {
  var options = _defaultOptions(this),
      promise;

  // TODO Validate the ChannellistsId
  options.id = id;
  promise = http.invoke(channellistsApi.getChannellistsId, options);
  return utils.promiseOrCallback(promise, cb);
};


///////////////////////////////////////////////////////////////////////////////////////////
// Channel Methods
///////////////////////////////////////////////////////////////////////////////////////////
/**
 * Obtains a list of channels from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getChannels = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(channelsApi.getChannels, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains detailed information of the current channel from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getChannelsCurrent = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(channelsApi.getChannelsCurrent, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Sets the current channel on the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.postChannelsCurrent = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(channelsApi.postChannelsCurrent, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains detailed information of the given channel from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getChannelsId = function (id, cb) {
  var options = _defaultOptions(this),
      promise;

  options.id = id;
  promise = http.invoke(channelsApi.getChannelsId, options);
  return utils.promiseOrCallback(promise, cb);
};

///////////////////////////////////////////////////////////////////////////////////////////
// Input Methods
///////////////////////////////////////////////////////////////////////////////////////////
/**
 * Sets the character on the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.postInputKey = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(inputApi.postInputKey, options);
  return utils.promiseOrCallback(promise, cb);
};

///////////////////////////////////////////////////////////////////////////////////////////
// Source Methods
///////////////////////////////////////////////////////////////////////////////////////////
/**
 * Obtains the available Sources from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getSources = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(sourcesApi.getSources, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains the currently selected Source from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getSourcesCurrent = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(sourcesApi.getSources, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains the currently selected Source from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.postSourcesCurrent = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(sourcesApi.getSources, options);
  return utils.promiseOrCallback(promise, cb);
};

///////////////////////////////////////////////////////////////////////////////////////////
// System Methods
///////////////////////////////////////////////////////////////////////////////////////////
/**
 * Obtains the System information from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getSystem = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(systemApi.getSystem, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains the currently selected Country from the System from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getSystemCountry = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(systemApi.getSystemCountry, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains the currently selected Name from the System from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getSystemName = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(systemApi.getSystemName, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains the currently selected Menulanguage from the System from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getSystemMenulanguage = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(systemApi.getSystemMenulanguage, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains the Model from the System from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getSystemModel = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(systemApi.getSystemModel, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains the Serialnumber from the System from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getSystemSerialnumber = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(systemApi.getSystemSerialnumber, options);
  return utils.promiseOrCallback(promise, cb);
};

/**
 * Obtains the Softwareversion from the System from the Philips Ambilight TV.
 *
 * @param cb An optional callback function to use if you do not want a promise returned.
 * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
AmbilightApi.prototype.getSystemSoftwareversion = function (cb) {
  var options = _defaultOptions(this),
      promise;

  promise = http.invoke(systemApi.getSystemSoftwareversion, options);
  return utils.promiseOrCallback(promise, cb);
};

///////////////////////////////////////////////////////////////////////////////////////////
// Default Methods
///////////////////////////////////////////////////////////////////////////////////////////
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