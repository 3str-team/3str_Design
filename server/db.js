const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "3strdesign",
});

connection.connect((e) => {
  e ? console.log(e) : console.log("DB connected");
});

function Query(sql, data = []) {
  return new Promise((resolve) => {
    connection.query(sql, data, (err, res) => {
      if (err) {
        console.log(err);
        resolve([]);
      } else {
        console.log("Response Query func:", res);
        resolve(res);
      }
    });
  });
}

module.exports = {
  Query,
};
