var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

router.get("/", (req, res) => {
    db("SELECT * FROM orders ORDER BY orderid ASC;")
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));

});

router.get("/bwyd/:id", (req, res) => {
    db(`SELECT * FROM orders WHERE orderid= ${req.params["id"]};`)
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));

});

router.post("/bwyd", (req, res) => {
    db(`INSERT INTO orders (userid, trade, delivery, ddate, itemid, qty) VALUES (${req.body.userid}, ${req.body.trade}, ${req.body.delivery}, ${req.body.ddate},${req.body.itemid}),${req.body.qty};`)
        .then(results => {
            const data = {
                userid: req.body.userid,
                trade: req.body.trade,
                delivery: req.body.delivery,
                ddate: req.body.ddate,
                itemid: req.body.itemid,
                qty: req.body.qty
            };
            return res.send(data);
        })
        .catch(res => res.status(500).send(err));
});

router.delete("/bwyd/:id", (req, res) => {
    db(`DELETE FROM orders WHERE id = ${req.params["id"]};`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send(err));
});

module.exports = router;