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

app.post("/api/AccountID", (req, res) => {
  let sql =
    "SELECT DISTINCT A.AccountID FROM Account as A,Customer as C WHERE C.Email=? AND C.CustomerID=A.CustomerID";
  let Email = req.body.Email;
  db.query(sql, Email, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/enque", (req, res) => {
  let sql = "INSERT INTO MovieQueue VALUES(?,?)";
  let AccountID = req.body.AccountID;
  let MovieID = req.body.MovieID;
  let params = [AccountID, MovieID];
  db.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/ordered", (req, res) => {
  let sql =
    "SELECT Movie.Name, Movie.img, Movie.rating, Movie.MovieID FROM Orders, Movie WHERE Orders.ReturnDate IS NULL AND Orders.AccountID = ? AND Orders.MovieID = Movie.MovieID";
  let ID = req.body.AccountID;
  db.query(sql, ID, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/queue", (req, res) => {
  let sql =
    "SELECT Movie.Name, Movie.img, Movie.rating FROM Movie, MovieQueue WHERE MovieQueue.AccountID = ? AND MovieQueue.MovieID = Movie.MovieID";
  let ID = req.body.AccountID;
  db.query(sql, ID, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/setting", (req, res) => {
  let sql =
    "INSERT INTO ACCOUNT (CustomerID, AccountID, Type, MovieID) VALUES (?,?,?,?), (?,?,?,?), ON DUPLICATE KEY UPDATE ? = ?";
  let CustomerID = req.body.CustomerID;
  let AccountID = req.body.AccountID;
  let Type = req.body.Type;
  let MovieID1 = req.body.MovieID1;
  let MovieID2 = req.body.MovieID2;
  let params = [
    CustomerID,
    AccountID,
    Type,
    MovieID1,
    CustomerID,
    AccountID,
    Type,
    MovieID2,
    "Type",
    Type,
  ];
  db.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/searchType", (req, res) => {
  let sql =
    "SELECT Movie.Name, Movie.img, Movie.rating FROM Movie WHERE Type=?";
  let Keyword = req.body.Keyword;
  db.query(sql, Keyword, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/searchName", (req, res) => {
  let sql =
    "SELECT Movie.Name, Movie.img, Movie.rating FROM Movie WHERE Name Like ?";
  let Keyword = "%" + req.body.Keyword + "%";
  db.query(sql, Keyword, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/searchActor", (req, res) => {
  let sql =
    "SELECT Movie.Name, Movie.img, Movie.rating FROM Movie, Actor AS A WHERE A.Name = ? AND Movie.MovieID = A.MovieID";
  let Keyword = req.body.Keyword;
  db.query(sql, Keyword, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/searchRating", (req, res) => {
  let sql =
    "SELECT Movie.Name, Movie.img, Movie.rating FROM Movie ORDER BY Rating DESC";
  db.query(sql, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/searchHot", (req, res) => {
  let sql = "SELECT Name,img,rating FROM Movie ORDER BY numcopies desc";
  db.query(sql, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/searchPersonal", (req, res) => {
  let sql =
    "SELECT DISTINCT B.Name, B.img, B.rating FROM Movie as A, Movie as B, Orders WHERE Orders.AccountID = ? AND Orders.MovieID=A.MovieID AND A.MovieID <> B.MovieID AND A.Type = B.Type";
  let ID = req.body.AccountID;
  db.query(sql, ID, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/rating", (req, res) => {
  let sql =
    "UPDATE Movie SET rating = ((? +((NumCopies)*Rating))/(NumCopies+1)) WHERE MovieID = ?";
  let ID = req.body.MovieID;
  let rating = req.body.rating;
  let params = [rating, ID];
  db.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
