var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gallery', { title: 'Express index1' });
});

module.exports = router;