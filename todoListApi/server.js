const express = require('express');
const app = express();
  const port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dhananjay:dbuser123@cluster0.fhchv.mongodb.net/nodeJsDemo?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(() => {
  const collection = client.db("nodeJsDemo").collection("tasks");
  // perform actions on the collection object
  client.close();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);