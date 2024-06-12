const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 3001;

const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "asd",
  database: "database",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database: ", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.use(bodyParser.json());

app.get("/api/cars", (req, res) => {
  connection.query("SELECT * FROM cars", (err, results) => {
    if (err) {
      console.error("Error querying cars: ", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.post("/api/cars", (req, res) => {
  const car = req.body;
  connection.query("INSERT INTO cars SET ?", car, (err, result) => {
    if (err) {
      console.error("Error inserting car: ", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res
      .status(201)
      .json({ message: "car inserted successfully", id: result.insertId });
  });
});

app.get("/api/cars/:id", (req, res) => {
  const { id } = req.params;
  connection.query("SELECT * FROM cars WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Error querying cars: ", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.put("/api/cars/:id", (req, res) => {
  const { id } = req.params;
  const car = req.body;
  connection.query(
    "UPDATE cars SET ? WHERE id = ?",
    [car, id],
    (err, result) => {
      if (err) {
        console.error("Error updating car: ", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: "car not found" });
        return;
      }
      res.json({ message: "car updated successfully" });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
