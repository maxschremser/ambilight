"use strict";

//
// The Documented Phillips Ambilight API at jointSPACE http://developers.meethue.com/1_lightsapi.html
//
// This module wraps up all the functionality for the definition and basic processing of the parameters for the API
// so that it can be called from the httpPromise module.
//
// The benefits of keeping all this code here is that it is much simpler to update the keep in step with the Phillips
// Hue API documentation, than having it scatter piece meal through various other classes and functions.
//

var Trait = require("traits").Trait,
    tApiMethod = require("./traits/tApiMethod"),
    tDescription = require("./traits/tDescription"),
    apiTraits = {};

apiTraits.getTopology = Trait.compose(
    tApiMethod("/1/ambilight/topology",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets a list of all lights that have been found on the TV.")
);

module.exports = {
    "getTopology"       : Trait.create(Object.prototype, apiTraits.getTopology)
};