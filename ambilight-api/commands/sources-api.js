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

apiTraits.getSources = Trait.compose(
    tApiMethod("/1/sources",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the available sources from the TV.")
);

apiTraits.getSourcesCurrent = Trait.compose(
    tApiMethod("/1/sources/current",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the current source from the TV.")
);


apiTraits.postSourcesCurrent = Trait.compose(
    tApiMethod("/1/sources/current",
        "POST",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the current source from the TV."),
    tBodyArguments(
        "application/json",
        [
            {"name": "id", "type": "string", "optional": false}
        ]
    )

);



module.exports = {
       "getSources"     : Trait.create(Object.prototype, apiTraits.getSources)
      ,"getSourcesCurrent"     : Trait.create(Object.prototype, apiTraits.getSourcesCurrent)
      ,"postSourcesCurrent"     : Trait.create(Object.prototype, apiTraits.postSourcesCurrent)
};