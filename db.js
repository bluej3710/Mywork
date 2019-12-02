var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword",
  database: "fast_food"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

/*Create a database named "fast_food":*/
con.query("CREATE DATABASE fast_food", function (err, result) {
    if (err) throw err;
    console.log("Database created");

/*Create a table named "inventory":*/
var sql = "CREATE TABLE inventory (item_name VARCHAR(255), item_count VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM inventory LIMIT 5";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });

  function get_all_inventory
  /*return all items from inventory*/
  function set_new_item

  /*set to module.exports obj*/
  /*return 2functions to be json format*/