var mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "dudwn112",
  database: "movie",
});

module.exports = db;
