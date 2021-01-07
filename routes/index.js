var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/items', function (req, res, next) {
  console.log('index');
  res.render('index', { title: 'Express' });
});

module.exports = router;
