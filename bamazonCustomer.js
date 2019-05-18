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
connection.query("SELECT * FROM bamazon_db.products", function(err, res) {
    console.log(res);
    console.log("==============================================");
    
  firstQuestion();
});
}


function firstQuestion() {
inquirer
  .prompt([
{
  type: "input",
  name: "item_id",
  message: "Please input the ID of the product you would like to buy."
},
{
  type: "input",
  name: "quantity",
  message: "How many units of this product you would like to buy."
}

  ])
    .then(function(user){
      switch (user.item_id) {
        case "1":
            connection.query(`SELECT * FROM products WHERE item_id = 1`, function (err, res) {
              if (err) throw err;
                console.log("==============================================");
                console.log("You picked ITEM ID- " + user.item_id + " QUANTITY- " + user.quantity)
                console.log("==============================================");
                console.log(res);
              });
          break;

        case "2":
          connection.query(`SELECT * FROM products WHERE item_id = 2`, function (err, res) {
              if (err) throw err;
                console.log("==============================================");
                console.log("You picked ITEM ID- " + user.item_id + " QUANTITY- " + user.quantity)
                console.log("==============================================");
                console.log(res);
              });
          break;

        case "3":
          connection.query(`SELECT * FROM products WHERE item_id = 3`, function (err, res) {
              if (err) throw err;
                console.log("==============================================");
                console.log("You picked ITEM ID- " + user.item_id + " QUANTITY- " + user.quantity)
                console.log("==============================================");
                console.log(res);
              });
          break;

        case "4":
          connection.query(`SELECT * FROM products WHERE item_id = 4`, function (err, res) {
              if (err) throw err;
                console.log("==============================================");
                console.log("You picked ITEM ID- " + user.item_id + " QUANTITY- " + user.quantity)
                console.log("==============================================");
                console.log(res);
              });
          break;

        case "5":
          connection.query(`SELECT * FROM products WHERE item_id = 5`, function (err, res) {
              if (err) throw err;
                console.log("==============================================");
                console.log("You picked ITEM ID- " + user.item_id + " QUANTITY- " + user.quantity)
                console.log("==============================================");
                console.log(res);
              });
          break;

        case "6":
            connection.query(`SELECT * FROM products WHERE item_id = 6`, function (err, res) {
              if (err) throw err;
                console.log("==============================================");
                console.log("You picked ITEM ID- " + user.item_id + " QUANTITY- " + user.quantity)
                console.log("==============================================");
                console.log(res);
              });
            break;

        case "7":
            connection.query(`SELECT * FROM products WHERE item_id = 7`, function (err, res) {
              if (err) throw err;
                console.log("==============================================");
                console.log("You picked ITEM ID- " + user.item_id + " QUANTITY- " + user.quantity)
                console.log("==============================================");
                console.log(res);
              });
            break;

        case "8":
            connection.query(`SELECT * FROM products WHERE item_id = 8`, function (err, res) {
              if (err) throw err;
                console.log("==============================================");
                console.log("You picked ITEM ID- " + user.item_id + " QUANTITY- " + user.quantity)
                console.log("==============================================");
                console.log(res);
              });
            break;

        case "9":
            connection.query(`SELECT * FROM products WHERE item_id = 9`, function (err, res) {
              if (err) throw err;
                console.log("==============================================");
                console.log("You picked ITEM ID- " + user.item_id + " QUANTITY- " + user.quantity)
                console.log("==============================================");
                console.log(res);
              });
            break;

        case "10":
            connection.query(`SELECT * FROM products WHERE item_id = 10`, function (err, res) {
              if (err) throw err;
                console.log("==============================================");
                console.log("You picked ITEM ID- " + user.item_id + " QUANTITY- " + user.quantity)
                console.log("==============================================");
                console.log(res);
              });
            break;
      }
    });
}