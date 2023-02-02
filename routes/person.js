const { response } = require("express");
const express = require("express");
const conn = require("../conn");
const utils = require("../utils");
const router = express.Router();
const cryptoJs = require("crypto-js");
router.get("/", (req, res) => {
  const query = `select id, firstName, lastName, email, password from person`;
  conn.pool.execute(query, (error, persons) => {
    //console.log(persons);
    res.send(utils.createResult(error, persons));
  });
});

router.post("/", (req, res) => {
  const { firstName, lastName, email, passowrd } = req.body;
  const encryptPwd = String(cryptoJs.MD5(passowrd));
  const query = `insert into person(firstName, lastName, email, password) values(?,?,?,?)`;
  conn.pool.execute(
    query,
    [firstName, lastName, email, encryptPwd],
    (error, persons) => {
      //console.log(persons);
      res.send(utils.createResult(error, persons));
    }
  );
});

module.exports = router;
