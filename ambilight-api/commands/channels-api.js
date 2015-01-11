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

apiTraits.getChannels = Trait.compose(
    tApiMethod("/1/channels",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the available channels from the TV with name and preset.")
);

apiTraits.getChannelsCurrent = Trait.compose(
    tApiMethod("/1/channels/current",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the currently selected channel from the TV with name and preset.")
);

apiTraits.postChannelsCurrent = Trait.compose(
    tApiMethod("/1/channels/current",
        "POST",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the currently selected channel from the TV with name and preset."),
    tBodyArguments(
        "application/json",
        [
            {"name": "id", "type": "int", "optional": false}
        ]
    )
);

apiTraits.getChannelsId = Trait.compose(
    tApiMethod("/1/channels/<id>",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the details for a specified channel.")
);

module.exports = {
      "getChannels"     : Trait.create(Object.prototype, apiTraits.getChannels)
    , "getChannelsCurrent"    : Trait.create(Object.prototype, apiTraits.getChannelsCurrent)
    , "postChannelsCurrent"    : Trait.create(Object.prototype, apiTraits.postChannelsCurrent)
    , "getChannelsId"    : Trait.create(Object.prototype, apiTraits.getChannelsId)
};