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
    tPostProcessing = require("./traits/tPostProcessing"),
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

/**
 * set all colours on all layers to the same colour: { "r": 100, "g": 210, "b": 30 }
 * set all colours on layer 2 to the same colour: { "layer2": { "r": 100, "g": 210, "b": 30 } }
 * set all pixels on the left and right on layer 1 to the same colour, other pixels keep their colour : { "layer1": { "left" : { "r": 100, "g": 210, "b": 30 }, "right" : { "r": 100, "g": 210, "b": 30 } } }
 */
apiTraits.postCached = Trait.compose(
    tApiMethod("/1/ambilight/cached",
        "POST",
        "1.0",
        "Whitelist"
    ),
    tDescription("Sets the value of the colors on the TV."),
    tBodyArguments(
        "application/json",
        [
            {"name": "layer1", "type": "object", "optional": true},
            {"name": "left", "type": "object", "optional": true},
            {"name": "top", "type": "object", "optional": true},
            {"name": "right", "type": "object", "optional": true},
            {"name": "bottom", "type": "object", "optional": true},
            {"name": "r", "type": "object", "optional": true},
            {"name": "g", "type": "object", "optional": true},
            {"name": "b", "type": "object", "optional": true}
        ]
    )
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
    tBodyArguments(
        "application/json",
        [
            {"name": "current", "type": "string", "optional": false}
        ]
    ),
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
    tApiMethod("/1/ambilight/measured",
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