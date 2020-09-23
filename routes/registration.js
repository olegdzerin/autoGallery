var express = require('express');
var router = express.Router();

// app.engine('handlebars', handlebars.engine);
// app.set('view engine', 'handlebars');


/* GET home page. */
router.get('/', function(req, res, next) {
  //  console.log(req.route);
  res.render('registration', { title: 'Express' });
});

// router.post('/', function(req, res, next) {
//     res.render('login', { title: 'Express' });

//     console.log(req.body);
//   });

module.exports = router;