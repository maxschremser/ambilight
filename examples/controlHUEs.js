var ambilight = require('../'),
    expect = require("chai").expect,
    hue_api = require("node-hue-api"),
    HueApi = hue_api.HueApi,
    testValues = {"host": "192.168.0.13", "username": "285f8c2185732b733d90dde40fe2c3"},
    c = require('colors'),
    pJ = require('prettyjson'),
    bLightsOn = false,
    _TIMEOUT = 500,
    getMeasuredLight = function (obj, light) {
      for (var o in obj) {
        if (o == light) {
          return obj[o];
        }
      }
    },
    controlHUE = function (measured) {
      if (measured && expect(measured.layer1).to.be.an('object')) {
        // I have two HUE Lights (1 and 2)
        var state1, state2;
        var states = hue_api.lightState;
    
        if (!bLightsOn) {
          console.log("");
          console.log("Ambilight Server is up and runnging ...".green);
          bLightsOn = !bLightsOn;
          state1 = states.create().on();
          state2 = states.create().on();
    
          hue.setLightState(1, state1);
          hue.setLightState(2, state2);
        }
        
        // set the left HUE to the value of the lower left ambilight values  (4)
        // and the right HUE to the values of the middle ambilight values (2)
        var color1 = getMeasuredLight(measured.layer1.left, 4);
        var color2 = getMeasuredLight(measured.layer1.right, 2);
        // console.log("1:" + JSON.stringify(color1) + ", :" + JSON.stringify(color2) + "\n--");
        state1 = states.create().transition(_TIMEOUT/1000).rgb(color1.r, color1.g, color1.b);
        state2 = states.create().transition(_TIMEOUT/1000).rgb(color2.r, color2.g, color2.b);
    
        hue.setLightState(1, state1);
        hue.setLightState(2, state2);
      }
    },
    host = "192.168.0.11",
    ambi = new ambilight.AmbilightApi(host),
    hue = new HueApi(testValues.host, testValues.username);

hue.getVersion().then(function(result) { console.log("HUE Connection: \r\n".yellow + pJ.render(result)); }).done();

ambi.getSystemName().then(function(result) { console.log("Ambilight TV Connection: ".yellow + pJ.render(result)); }).
    then(ambi.getSystemSoftwareversion().then(function(result) { console.log("Ambilight TV Connection: ".yellow + pJ.render(result)); })).
    then(ambi.getSystemModel().then(function(result) { console.log("Ambilight TV Connection: ".yellow + pJ.render(result)); })).
    then(ambi.getSystemSerialnumber().then(function(result) { console.log("Ambilight TV Connection: ".yellow + pJ.render(result)); })).
    done();

// Using a Promise
var interval = setInterval(function() {
  ambi.getProcessed().then(controlHUE).done();
}, _TIMEOUT);
