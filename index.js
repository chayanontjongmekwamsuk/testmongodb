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