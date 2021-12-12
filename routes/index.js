var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
console.log(req.cookies)
const {name = 'no name yet'} = req.cookies
  res.cookie('name', 'Jivesh')
  res.cookie('location', 'Vancouver')

res.send(`Go to /campgrounds, ${name}`)
});

module.exports = router;
