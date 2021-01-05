var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

router.get('/', function (req, res, next) {
    res.send('Welcome to Bwyd database');
});

/* GET users listing. */
router.get("/users", (req, res) => {
    db("SELECT * FROM users ORDER BY userid ASC;")
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));

});

router.get("/users/:id", (req, res) => {
    db(`SELECT * FROM users WHERE userid= ${req.params["id"]};`)
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));

});

router.post("/users", (req, res) => {
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

router.delete("/users/:id", (req, res) => {
    db(`DELETE FROM users WHERE id = ${req.params["id"]};`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send(err));
});

/* GET items listing. */
router.get("/items", (req, res) => {
    db("SELECT * FROM items ORDER BY itemid ASC;")
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));

});

router.get("/items/:id", (req, res) => {
    db(`SELECT * FROM items WHERE itemid= ${req.params["id"]};`)
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));

});

router.post("/items", (req, res) => {
    db(`INSERT INTO items (itemname, price, available, userid, free_items) VALUES (${JSON.stringify(req.body.itemname)}, ${req.body.price}, ${req.body.available}, ${req.body.userid},${req.body.free_items});`)
        .then(results => {
            const data = {
                itemname: req.body.itemname,
                price: req.body.price,
                available: req.body.available,
                userid: req.body.userid,
                free_items: req.body.free_items
            };
            return res.send(data);
        })
        .catch(res => res.status(500).send(err));
});

router.delete("/items/:id", (req, res) => {
    db(`DELETE FROM items WHERE id = ${req.params["id"]};`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send(err));
});

/* GET orders listing. */
router.get("/orders", (req, res) => {
    db("SELECT * FROM orders ORDER BY orderid ASC;")
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));

});

router.get("/orders/:id", (req, res) => {
    db(`SELECT * FROM orders WHERE orderid= ${req.params["id"]};`)
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));

});
//db(`INSERT INTO items (itemname, price, available, userid, free_items) VALUES (${JSON.stringify(req.body.itemname)}, ${req.body.price}, ${req.body.available}, ${req.body.userid},${req.body.free_items});`)
// insert into orders (userid,trade,delivery,itemid,qty) values ('1','1','0','3','5');
router.post("/orders", (req, res) => {
    db(`INSERT INTO orders (userid, trade, delivery, itemid, qty) VALUES (${req.body.userid}, ${req.body.trade}, ${req.body.delivery},${req.body.itemid},${req.body.qty});`)
        .then(results => {
            const data = {
                userid: req.body.userid,
                trade: req.body.trade,
                delivery: req.body.delivery,
                itemid: req.body.itemid,
                qty: req.body.qty
            };
            return res.send(data);
        })
        .catch(res => res.status(500).send(err));
});

router.delete("/orders/:id", (req, res) => {
    db(`DELETE FROM orders WHERE id = ${req.params["id"]};`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send(err));
});

module.exports = router;
