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
    apiTraits = {};

apiTraits.getAudioVolume = Trait.compose(
    tApiMethod("/1/audio/volume",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the current audio volume from the TV.")
);

apiTraits.postAudioVolume = Trait.compose(
    tApiMethod("/1/audio/volume",
        "POST",
        "1.0",
        "Whitelist"
    ),
    tDescription("Sets the new volume on the TV."),
    tBodyArguments(
        "application/json",
        [
            {"name": "muted", "type": "boolean", "optional": true},
            {"name": "current", "type": "int", "optional": true}
        ]
    )
);

module.exports = {
      "getAudioVolume"     : Trait.create(Object.prototype, apiTraits.getAudioVolume)
    , "postAudioVolume"    : Trait.create(Object.prototype, apiTraits.postAudioVolume)
};