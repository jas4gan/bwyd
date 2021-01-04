var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());


/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('Welcome to Bwyd database');
// });

router.get("/", (req, res) => {
  db("SELECT * FROM users ORDER BY userid ASC;")
    .then(results => res.send(results.data))
    .catch(res => res.status(500).send(err));

});

router.post("/bwyd", (req, res) => {
  db(
    `INSERT INTO bwyd (name, ) VALUES (${JSON.stringify(
      req.body.name
    )},${req.body.complete}) `
  ).then(results => {
    const data = {
      id: results.insertId,
      text: req.body.text,
      complete: req.body.complete
    };
    return res.send(data);
  });
});

module.exports = router;
