import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "blog",
});

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected db!");
// });
