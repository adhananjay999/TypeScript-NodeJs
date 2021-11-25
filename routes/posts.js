const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
// const mongoose = require("mongoose");


// GET request
router.get("/", (req, res) => {
  res.status(200).send("Server is up and running.");
});
router.get("/data", (req, res) => {
  const post = Post.find();
});
router.get("/specific", (req, res) => {
  res.status(200).send("Specific Post");
});

// POST request
router.post("/",async (req, res) => {
  try{
    // console.log(req.body);
  const {title,description}=req.body;
  console.log(title + ' ' + description);
  
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    date: Date.now(),
  });
  
  await post.save();
  // books.push(post);
  res.send(200).send("post is added to the database");
  // res.status(200).send("This is a POST request");
  }catch(err){
      console.error('Error connecting to mongo', err);
  };
});

// PUT Request
router.put("/", (req, res) => {
  res.status(200).send("This is a PUT request");
});
// PATCH Request
router.patch("/", (req, res) => {
  res.status(200).send("This is a PATCH request");
});
// DELETE Request
router.delete("/", (req, res) => {
  res.status(200).send("This is a DELETE request");
});
module.exports = router;
