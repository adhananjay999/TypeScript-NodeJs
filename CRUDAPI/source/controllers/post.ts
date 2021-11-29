import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Post from "../models/post";

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
  // get the data from req.body
  let { title, body } = req.body;

  // add the post
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    title,
    body,
  });
  // return response
  return post
    .save()
    .then((result) => {
      return res.status(201).json({
        data: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  // get some posts
  Post.find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        posts: results,
        count: results.length,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
  // get the post id from the req
  let id: string = req.params.id;
  // get the post
  Post.findById(id)
    .then((result) => {
      return res.status(200).json({
        post: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  let { title, body } = req.body;
  // get the post id from the req.params
  let id: string = req.params.id;
  let options = { new: true };
  // update the post and return response
  Post.findByIdAndUpdate(id, req.body, options)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: `Can not update post with ${id}. Maybe post not found`,
        });
      } else {
        return res.status(200).json({
          post: result,
        });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  // get the post id from req.params
  let id: string = req.params.id;
  // delete the post and return response
  Post.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: `Can not delete post with ${id}. Maybe postId is wrong`,
        });
      } else {
        return res.status(200).json({
          message: "post deleted successfully",
        });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

export default { addPost, getPosts, getPost, updatePost, deletePost };
