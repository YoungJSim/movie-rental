const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const db = require("./config/db");
const { createConnection } = require("mysql");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/login", (req, res) => {
  let sql =
    "SELECT CustomerID FROM Customer WHERE Customer.Email=? AND Customer.Password=?";
  let Email = req.body.Email;
  let Password = req.body.Password;
  let params = [Email, Password];
  db.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/signup", (req, res) => {
  let sql = "INSERT INTO Customer VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
  let ID = req.body.PhoneNumber;
  let Email = req.body.Email;
  let Password = req.body.Password;
  let FirstName = req.body.FirstName;
  let LastName = req.body.LastName;
  let LocCity = req.body.LocCity;
  let LocState = req.body.LocState;
  let Address = req.body.Address;
  let Zipcode = req.body.Zipcode;
  let PhoneNumber = req.body.PhoneNumber;
  let CreditCard = req.body.CreditCard;
  let Rating = 0;
  let params = [
    ID,
    FirstName,
    LastName,
    LocCity,
    LocState,
    Zipcode,
    PhoneNumber,
    Email,
    CreditCard,
    Rating,
    Address,
    Password,
  ];
  db.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/movies", (req, res) => {
  db.query("SELECT * FROM Movie", (err, rows, fields) => {
    res.send(rows);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
