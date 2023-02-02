const mysql = require("mysql2");

const pool = mysql.createPool({
  //host: "127.0.0.1",
  host: "localhost",
  user: "root",
  password: "root",
  //password: "123456",
  waitForConnections: true,
  connectionLimit: 10,
  database: "quotes",
});

module.exports = {
  pool,
};
