var express = require('express');
var router = express.Router();

// app.engine('handlebars', handlebars.engine);
// app.set('view engine', 'handlebars');


/* GET home page. */
router.get('/', function(req, res, next) {
  //  console.log(req.route);
  res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log('header');
 
//  res.set({'Content-Type': 'application/json'})
   res.json({success: true})
  
    

   // console.log(req.body)
   
  });

module.exports = router;