const express = require("express"); // importing Express
const app = express(); // instance of express
const port = 3000; // Defining port 3000
const mongoose = require("mongoose"); //instance of mongo db
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');
// console.log(process.env.DB_CONNECTION);

//Imports Routes
const postsRoutes = require("./routes/posts");

app.use(express.json());
//Midleware
app.use("/posts", postsRoutes, );
// app.use(cors());
// // Configuring body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // app.use('/posts',()=>{
// //     console.log("this is a midleware running");
// // });

app.get('/',(req,res)=>{
res.send('We are on home');
});
//Connect to db
// mongoose.connect(process.env.DB_CONNECTION, () => {

//   console.log("Connected to DB");
// });

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to DB");
});

// App is listening to user-defined port or 300 and printing the information to the console.
app.listen(port, (req, res) => {
  console.log(`Server is listening on port ${port}!`);
});
