var express = require('express');
var router = express.Router();
const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/ingles', function(req, res) {
  res.render('ingles');
});
module.exports = router;
