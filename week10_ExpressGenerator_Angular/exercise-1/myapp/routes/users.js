var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// set up body-parser middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST - read form data and log to console */
router.post('/', urlencodedParser, function(req, res, next) {
  console.log(req.body);
  res.send('POST received!');
});

module.exports = router;