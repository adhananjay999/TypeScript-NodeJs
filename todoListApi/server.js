var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  const DB_CONNECTION_URL="mongodb+srv://dhananjay:dbuser123@cluster0.fhchv.mongodb.net/nodeJsDemo?retryWrites=true&w=majority";

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb'); 
const { MongoClient } = require('mongodb');
const client = new MongoClient(DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(() => {
  const collection = client.db("test").collection("devices");
  console.log('todo list RESTful API server started on: ' + port);
  // perform actions on the collection object
  client.close();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use((req, res) =>{
  res.status(404).send({url: req.originalUrl + ' not found'})
});
var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


// console.log('todo list RESTful API server started on: ' + port);