"use strict";

var Trait = require("traits").Trait,
    ApiError = require("node-hue-api/hue-api/errors").ApiError;

module.exports = function (description) {
    return Trait(
        {
            "commandDescription" : description
        }
    );
};
