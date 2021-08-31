const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://react-admin-dashboard-89b9d.web.app/",
    ],
  })
);
app.use(express.json());

const db = mysql.createConnection({
  user: "sql11433740",
  host: "sql11.freemysqlhosting.net",
  password: "EiGdVPDdAS",
  database: "sql11433740",
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
        if (result.length !== 0) {
          if (result.role !== "admin") {
            res.send({ message: "not an admin" });
          } else {
            res.send(result);
          }
        } else {
          res.send({ message: "Email ou mot de passe incorrect" });
        }
      }
    }
  );
});
app.listen(3001, () => {
  console.log("server running");
});
