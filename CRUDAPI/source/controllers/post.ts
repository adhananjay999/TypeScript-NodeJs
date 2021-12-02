import { Request, Response, NextFunction } from "express";
import Logger from "../config/logger/logger-config";
import Post from "../models/post";
import { JSONResponse } from "../lib/json-response";
// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
  // get the data from req.body
  let { title, body } = req.body;
  // add the post and return response
  const post = new Post({
    // _id: new mongoose.Types.ObjectId(),
    title,
    body,
  });
  try {
    let result = await post.save();
    JSONResponse.success(res, result, 201);
  } catch (error) {
    if (error instanceof Error) {
      JSONResponse.serverError(res, error?.message);
    }
  }
};

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let result = await Post.find().exec();
    JSONResponse.success(res, result, 200);
  } catch (error) {
    if (error instanceof Error) {
      JSONResponse.serverError(res, error?.message);
    }
  }
};

// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
  // get the post id from the req
  let { postId } = req.params;
  Logger.info(`id : ${postId}`);
  // get the post and return response
  try {
    let result = await Post.findById(postId);
    if (!result) {
      let errMessage = `Post not found`;
      JSONResponse.serverError(res, errMessage, 404);
    } else {
      JSONResponse.success(res, result, 200);
    }
  } catch (error) {
    if (error instanceof Error) {
      JSONResponse.serverError(res, error?.message);
    }
  }
};

// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  // update the post and return response
  try {
    let { title, body } = req.body;
    // get the post id from the req.params
    const id: string = req.params.id;
    let options = { new: true };
    let result = await Post.findByIdAndUpdate(id, req.body, options);
    if (!result) {
      let errMessage = `Can not update post with ${id}. Maybe post not found`;
      JSONResponse.serverError(res, errMessage, 404);
    } else {
      JSONResponse.success(res, result, 200);
    }
  } catch (error) {
    if (error instanceof Error) {
      JSONResponse.serverError(res, error?.message);
    }
  }
};

// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  // delete the post and return response
  try {
    // get the post id from req.params
    const id: string = req.params.id;
    let result = await Post.findByIdAndDelete(id);
    if (!result) {
      let errMessage = `Can not delete post with ${id}. Maybe postId is wrong`;
      JSONResponse.serverError(res, errMessage, 404);
    } else {
      JSONResponse.success(res, result, 200, "post deleted successfully");
    }
  } catch (error) {
    if (error instanceof Error) {
      JSONResponse.serverError(res, error?.message);
    }
  }
};

export default { addPost, getPosts, getPost, updatePost, deletePost };
