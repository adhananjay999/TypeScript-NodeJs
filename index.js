const express = require("express"); // importing Express
const app = express(); // instance of express
const port = 3000; // Defining port 3000

//Midleware

// app.use('/posts',()=>{
//     console.log("this is a midleware running");
// });

// Routes
// GET request
app.get("/", (req,res)=>{
  res.status(200).send("Server is up and running.");
});
// POST request
app.post("/", (req,res)=>{
  res.status(200).send("This is a POST request");
});
// PUT Request
app.put("/", (req,res)=>{
  res.status(200).send("This is a PUT request");
});
// PATCH Request
app.patch("/", (req,res)=>{
  res.status(200).send("This is a PATCH request");
});
// DELETE Request
app.delete("/", (req,res)=>{
  res.status(200).send("This is a DELETE request");
});

// App is listening to user-defined port or 300 and printing the information to the console.
app.listen(port, (req,res)=>{
  console.log(`Server is listening on port ${port}!`);
});
