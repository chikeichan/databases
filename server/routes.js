var controllers = require('./controllers/index.js');
var router = require('express').Router();

for (var route in controllers) {
  // console.log(controllers[route].get
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;

