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
//   switch (user.action) {
//     case "1":
//       console.log("==============================================");

      console.log("==============================================");
      console.log("You picked ITEM ID- " + user.item_id + " QUANTITY- " + user.quantity)
      console.log("==============================================");
    //   break;

    // case "2":
    //   multiSearch();
    //   break;

    // case "3":
    //   rangeSearch();
    //   break;

    // case "4":
    //   songSearch();
    //   break;

    // case "5":
    //   songAndAlbumSearch();
    //   break;

    //   case "6":
    //     artistSearch();
    //     break;

    //   case "7":
    //     multiSearch();
    //     break;

    //   case "8":
    //     rangeSearch();
    //     break;

    //   case "9":
    //     songSearch();
    //     break;

    //   case "10":
    //     songAndAlbumSearch();
    //     break;
    // }


})
}