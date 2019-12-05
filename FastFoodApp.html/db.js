 /*FastFood Ex1 Mon*/
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


/*return all items from inventory*/
function get_all_inventory() {
    return all_items;
        }
  
function set_new_item() {
    return item_name,item_count;
console.log("Added to DataBase");
          }

  /*set to module.exports obj*/
  /*return 2functions to be json format*/



   /*FastFood Ex2 Tues*/
   var db = require(db.js)
   // routes/index.js
const noteRoutes = require('./note_routes');
module.exports = function(app, db) {  noteRoutes(app, db); 
  "you are requesting the index page"
  
  // note_routes.js
module.exports = function(app, db) {  app.post('you are requesting the index page', (req, res) => {  // You'll create your note here. res.send('


  //Server
var createServer

var http = require('http');

// An example of a web server written with Node which responds with 'If you see this my server is working! lol ;)'.

// To run the server, put the code into a file called example.js or NodejsServer4FastFoodApp.js and execute it with the node program.

http.createServer(function (request, response) {

  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('If you see this my server is working! lol ;)\n');

   // http header 
   
   var url = req.url; 
     
   if(url ==='/index') { 
       res.write('you are requesting the index page');  
       res.end();  
   } 
   else if(url ==='/contact') { 
       res.write(' Welcome to contact us page');  
       res.end();  
   } 
   else { 
       res.write('Hello World!');  
       res.end();  
   } 

}).listen(8080);


//console.log('Server running at http://127.0.0.1:8124/');
console.log('Server running at http://swapi.co/documentation#root');
