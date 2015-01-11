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
    apiTraits = {};

apiTraits.getSystem = Trait.compose(
    tApiMethod("/1/system",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the details for a specified channel.")
);

apiTraits.getSystemCountry = Trait.compose(
    tApiMethod("/1/system/country",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the details for a specified channel.")
);

apiTraits.getSystemName = Trait.compose(
    tApiMethod("/1/system/name",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the details for a specified channel.")
);

apiTraits.getSystemMenulanguage = Trait.compose(
    tApiMethod("/1/system/menulanguage",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the details for a specified channel.")
);

apiTraits.getSystemModel = Trait.compose(
    tApiMethod("/1/system/model",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the details for a specified channel.")
);

apiTraits.getSystemSerialnumber = Trait.compose(
    tApiMethod("/1/system/serialnumber",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the details for a specified channel.")
);

apiTraits.getSystemSoftwareversion = Trait.compose(
    tApiMethod("/1/system/softwareversion",
        "GET",
        "1.0",
        "Whitelist"
    ),
    tDescription("Gets the details for a specified channel.")
);


module.exports = {
      "getSystem"     : Trait.create(Object.prototype, apiTraits.getSystem)
    , "getSystemCountry"     : Trait.create(Object.prototype, apiTraits.getSystemCountry)
    , "getSystemName"     : Trait.create(Object.prototype, apiTraits.getSystemName)
    , "getSystemMenulanguage"     : Trait.create(Object.prototype, apiTraits.getSystemMenulanguage)
    , "getSystemModel"     : Trait.create(Object.prototype, apiTraits.getSystemModel)
    , "getSystemSerialnumber"     : Trait.create(Object.prototype, apiTraits.getSystemSerialnumber)
    , "getSystemSoftwareversion"     : Trait.create(Object.prototype, apiTraits.getSystemSoftwareversion)

};