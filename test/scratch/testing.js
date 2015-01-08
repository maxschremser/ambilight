"use strict";

console.log("testing");
var ambilight = require("../../index.js");
console.log(JSON.stringify(ambilight));

var displayTv = function(tv) {
    console.log("TV Found: " + JSON.stringify(tv));
};

// Using a promise
ambilight.().then(displayTv).done();

// Using a callback
ambilight.ambilights(function(err, result) {
    if (err) throw err;
    displayTv(result);
});
