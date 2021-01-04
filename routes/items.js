var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

router.use(bodyParser.json());

router.get("/", (req, res) => {
    db("SELECT * FROM items ORDER BY itemid ASC;")
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));

});

router.get("/bwyd/:id", (req, res) => {
    db(`SELECT * FROM items WHERE itemid= ${req.params["id"]};`)
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));

});

router.post("/bwyd", (req, res) => {
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

router.delete("/bwyd/:id", (req, res) => {
    db(`DELETE FROM items WHERE id = ${req.params["id"]};`)
        .then(results => res.send(results.data))
        .catch(err => res.status(500).send(err));
});

module.exports = router;