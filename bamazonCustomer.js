const inquirer = require("inquirer");
const mysql = require("mysql");


const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  runApp();
});

function runApp(){
connection.query("SELECT * FROM bamazon_db.products" + "\n", function(err, res) {
  
    console.log(res);
  
  // runSearch();
});
}