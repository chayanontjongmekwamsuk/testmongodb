/*
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_dbvccwc3:dmf1uks1spnerlpqhcikdvlgv5@ds247944.mlab.com:47944/heroku_dbvccwc3";

app.get('/', (req, res) => {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("heroku_dbvccwc3");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

});

app.listen(port, () => {
    console.log("application is listening on:", port);
 });
 */

const express = require('express')
const app = express()
const port = process.env.PORT || 4000

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_dbvccwc3:dmf1uks1spnerlpqhcikdvlgv5@ds247944.mlab.com:47944/heroku_dbvccwc3";

app.get('/', (req, res) => {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("heroku_dbvccwc3");
  var myobj = [
    { _id: 5884 , name: 'John', address: 'Highway 71'},
    { _id: 5885 , name: 'Peter', address: 'Lowstreet 4'},
    { _id: 5886 , name: 'Amy', address: 'Apple st 652'},
    { _id: 5887 , name: 'Hannah', address: 'Mountain 21'},
    { _id: 5888 , name: 'Michael', address: 'Valley 345'},
    { _id: 5889 , name: 'Sandy', address: 'Ocean blvd 2'},
    { _id: 5890 , name: 'Betty', address: 'Green Grass 1'},
    { _id: 5891 , name: 'Richard', address: 'Sky st 331'},
    { _id: 5892 , name: 'Susan', address: 'One way 98'},
    { _id: 5893 , name: 'Vicky', address: 'Yellow Garden 2'},
    { _id: 5894 , name: 'Ben', address: 'Park Lane 38'},
    { _id: 5895 , name: 'William', address: 'Central st 954'},
    { _id: 5896 , name: 'Chuck', address: 'Main Road 989'},
    { _id: 5897 , name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("Data").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Insert data completed");
    db.close();
  });
});

});

app.listen(port, () => {
    console.log("application is listening on:", port);
 });


