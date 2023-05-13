var express = require('express');
const db = require('../database')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next)  { 
  let name = req.body.name;
  let email = req.body.email;
  let coment = req.body.coment;
  let date = new Date();
  let ip = req.ip;
  
  db.insert(name, email, coment, date, ip);

  res.redirect('/')
});

router.get('/contactos', function(req, res, next) {
  db.select(function (rows) {
    console.log(rows);
  });
  res.send('En consola');
});

module.exports = router;
