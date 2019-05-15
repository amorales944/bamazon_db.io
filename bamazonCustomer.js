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
// if(user.name === ){
  console.log("==============================================");
  console.log("You picked ITEM ID- " + user.item_id + " QUANTITY- " + user.quantity)
  console.log("==============================================");

// }


})
}


// function mainSearch(){
// inquirer.prompt({
//     type: "input",
//     item_id: "id",
//     message: "Please input the ID of the product they would like to buy."
//   }),
//   .then(function(answer)){
//     // const query = "SELECT";
//     connection.query("SELECT item_id from bamazon_db.products;", function(err, res) {
//       console.log(res);
    
//     // runSearch();
//   });

//   }
// }