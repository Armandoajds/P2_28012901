var express = require('express');
const db = require('../database')
var router = express.Router();

router.post('/', function(req, res, next)  { 
  console.log(req.body)
  let name = req.body.name;
  let email = req.body.email;
  let coment = req.body.coment;
  let date = new Date();
  let ip = req.ip;
  
  db.insert(name, email, coment, date, ip);

  res.redirect('/')
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
