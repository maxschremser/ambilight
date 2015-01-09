"use strict";

//
// The Documented Phillips Ambilight API at jointSPACE http://jointspace.sourceforge.net/ 
// and on your TV at http://ip-address:1925/1/examples/ambilight/ambilight.html
// and the Traits are defined in ambilight.js
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
    tBodyArguments = require("./traits/tBodyArguments"),
    tLightStateBody = require("./traits/tLightStateBody"),
    tPostProcessing = require("./traits/tPostProcessing"),
    ApiError = require("node-hue-api/hue-api/errors").ApiError,
    utils = require("node-hue-api/hue-api/utils"),
    apiTraits = {};

apiTraits.getTopology = Trait.compose(
    tApiMethod("/1/ambilight/topology",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets a list of all lights that have been found on the TV.")
);

apiTraits.getCached = Trait.compose(
    tApiMethod("/1/ambilight/cached",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets a list of all lights with associated colors that have been found on the TV.")
);

apiTraits.postCached = Trait.compose(
    tApiMethod("/1/ambilight/cached",
        "POST",
        "1.0",
        "Whitelist"
    ),
    tDescription("Sets the value of the colors on the TV."),
    tPostProcessing(utils.wasSuccessful)
);

apiTraits.getMode = Trait.compose(
    tApiMethod("/1/ambilight/mode",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets a list of all modes for ambilight that have been found on the TV.")
);

// POST, BODY: {"current": "manual" or "internal" or "expert"
apiTraits.postMode= Trait.compose(
    tApiMethod("/1/ambilight/mode",
        "POST",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets a list of all lights with associated colors that have been found on the TV."),
    tPostProcessing(utils.wasSuccessful)
);

apiTraits.getProcessed = Trait.compose(
    tApiMethod("/1/ambilight/processed",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets a list of all lights with associated colors that have been found on the TV.")
);

apiTraits.getMeasured = Trait.compose(
    tApiMethod("/1/ambilight/measures",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets a list of all lights with associated colors that have been found on the TV.")
);


module.exports = {
      "getTopology"     : Trait.create(Object.prototype, apiTraits.getTopology)
    , "getCached"       : Trait.create(Object.prototype, apiTraits.getCached)
    , "postCached"      : Trait.create(Object.prototype, apiTraits.postCached)
    , "getMode"         : Trait.create(Object.prototype, apiTraits.getMode)
    , "postMode"        : Trait.create(Object.prototype, apiTraits.postMode)
    , "getProcessed"    : Trait.create(Object.prototype, apiTraits.getProcessed)
    , "getMeasured"     : Trait.create(Object.prototype, apiTraits.getMeasured)
};