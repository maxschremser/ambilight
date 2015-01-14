var ambilight = require('../');

var showResult = function (result) {
  console.log(JSON.stringify(result));
};

var host = "192.168.0.11",
    api = new ambilight.AmbilightApi(host);

// Using a Promise
api.getTopology().then(showResult).done();

// Using a Callback
api.getTopology(function (err, result) {
  if (err) throw err;
  showResult(result);
});
