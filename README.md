# ambilight
An API library for Node.js that interacts with a Philips Ambilight TV.

This API provides all documented features and a set of useful functions to control the tv remotely. This API abstracts away the Philips Ambilight REST API. 
This project is based on the node-hue-api@0.2.6 project by Peter Murray. As in the HUE API, the Ambilight API supports for each function a callback and if omitted a promise will be returned for use in chaining.

## Change Log
For a list of changes, please refer to the changelog. <a href="https://github.com/maxschremser/ambilight/commits/master">ChangeLog</a>

## Installation
```sh
$ npm install ambilight
```

## Philips Ambilight Resources
There are plenty of resources about ambilight on the internet, but the best technical description is probably your own tv (<a href="http://&lt;ip-address&gt;:1925/1/doc/API.html">http://&lt;ip-address&gt;:1925/1/doc/API.html</a>). You may need to enable jointSPACE by entering the following digit sequence while wathcing TV. 
```
5646877223
```

<ul>
    <li><a href="http://jointspace.sourceforge.net/">jointSPACE</a></li>
</ul>

## Work in Progress
Currently I am writing new tests to test the REST endpoints. Especially the POST requests have not been tested truely.

## API
```js
var ambilight = require('ambilight')
```
## Examples
##### Getting the Topology
The Topology of the ambilights is an object with the amount of lightstrips mounted to the TV. My TV (Philips 46PFL8007K/12) has 5 lights mounted to the left and right and 10 on the top, bottom is zero.
To query the Topology use the following snippet:
```js
var ambilight = require('ambilight');

var showResult = function (result) {
    console.log(JSON.stringify(result));
}

var host = "192.168.0.11", 
    api = new ambilight.AmbilightApi(host);
    
// Using a Promise    
api.getTopology().then(showResult).done();

// Using a Callback
api.getTopology(function (err, result) {
    if (err) throw err;
    showResult(result);
});

```