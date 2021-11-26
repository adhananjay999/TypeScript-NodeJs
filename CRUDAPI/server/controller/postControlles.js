const { rawListeners } = require("../models/postModel");
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
exports.update = (req, res) => {
  console.log(req.params.id);
  if (!req.body) {
    res.status(400).send({
      message: "Data to update cannot be empty",
    });
  }
  const id = req.params.id;
  const options={new:true};
  Posts.findByIdAndUpdate(id, req.body,options)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Can not update post with ${id}. Maybe post not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while update post",
      });
    });
};
//delete a post with specific post is in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Posts.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Can not delete post with ${id}. Maybe postId is wrong`,
        });
      } else {
      //   res.status(204).json({
      //     status: "success",
      //     message: 'Contact deleted'
      // });
        res.status(204).send({
          message: `Post deleted`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete post with id= ${id}`,
      });
    });
};
