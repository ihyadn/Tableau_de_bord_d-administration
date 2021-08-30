const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "SIP",
});

app.post("/login", (req, res) => {
  console.log("here");
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE Email = ? AND password = ? ",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length!==0) {
          res.send(result);
          console.log(result);
        } else {
          res.send({ message: "Email ou mot de passe incorrect" });
        }
      }
    }
  );
});
app.listen(3001, () => {
  console.log("hi");
});
