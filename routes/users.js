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

router.get("/bwyd/:id", (req, res) => {
  db(`SELECT * FROM users WHERE userid= ${req.params["id"]};`)
    .then(results => res.send(results.data))
    .catch(res => res.status(500).send(err));

});

router.post("/bwyd", (req, res) => {
  db(`INSERT INTO users (username, email, useradd, chef) VALUES (${JSON.stringify(req.body.username)},${JSON.stringify(req.body.email)},${JSON.stringify(req.body.useradd)},${req.body.chef});`)
    .then(results => {
      const data = {
        username: req.body.username,
        email: req.body.email,
        useradd: req.body.useradd,
        chef: req.body.chef
      };
      return res.send(data);
    })
    .catch(res => res.status(500).send(err));
});

router.delete("/bwyd/:id", (req, res) => {
  db(`DELETE FROM users WHERE id = ${req.params["id"]};`)
    .then(results => res.send(results.data))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
