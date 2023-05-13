var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next)  { 
  let email = req.body.email;
  let name = req.body.name;
  let coment = req.body.coment;
  
  console.log({name, email, coment}) 

  res.redirect('/')
});

module.exports = router;
