const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "westenexpresscalculator",
});

app.post("/create", (req, res) => {
  const lhs = req.body.lhs;
  const operator = req.body.operator;
  const rhs = req.body.rhs;

  db.query(
    "INSERT INTO calculations (lhs, operator, rhs) VALUES (?, ?, ?);",
    [lhs, operator, rhs],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values");
      }
    }
  );
});
app.listen(5174, () => {
  console.log("worked");
});
