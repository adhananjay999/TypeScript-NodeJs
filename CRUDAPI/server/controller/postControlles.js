const Posts = require("../models/postModel");

//create and add new post
exports.create = (req, res) => {
  console.log(req.body);
  //object destructure
  const { title, description } = req.body;
  //validate request
  if ((title == "") | undefined || (description == "") | undefined) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  //new post
  const post = new Posts({
    title: title,
    description: description,
    date: Date.now(),
  });
  //add post in the db
  post
    .save(post)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something went wrong while adding new post",
      });
    });
};

//retrive and return all postr / retrive and return single post
exports.find = (req, res) => {
    Posts.find()
    .then((post) => {
      res.send(post);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something went wrong while adding new post",
      });
    });
};
//update a new identified post by post id
exports.update = (req, res) => {};
//delete a post with specific post is in the request
exports.delete = (req, res) => {};
