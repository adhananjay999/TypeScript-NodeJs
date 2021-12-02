import { Request, Response, NextFunction } from "express";
import Logger from "../config/logger/logger-config";
import { JSONResponse } from "../lib/json-response";
import { PostsService } from "../services/posts";
import IPost from "../interfaces/post";
// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
  // get the data from req.body
  let post: IPost = req.body;

  try {
    let result = await PostsService.createPost(post);
    JSONResponse.success(res, 201, result);
  } catch (error) {
    if (error instanceof Error) {
      JSONResponse.serverError(res, error?.message);
    }
  }
};

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let result = await PostsService.getAllPosts();
    JSONResponse.success(res, 200, result);
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
    let result = await PostsService.getSpecificPost(postId);

    if (!result) {
      let errMessage = `Post not found`;
      JSONResponse.serverError(res, errMessage, 404);
    } else {
      JSONResponse.success(res, 200, result);
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
    let content: { title: String; body: String } = req.body;
    // get the post id from the req.params
    const id: string = req.params.postId;
    let result = await PostsService.updateSpecificPost(id, content);

    if (!result) {
      let errMessage = `Can not update post with ${id}. Maybe post not found`;
      JSONResponse.serverError(res, errMessage, 404);
    } else {
      JSONResponse.success(res, 200, result);
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
    const id: string = req.params.postId;
    let result = await PostsService.deleteSpecificPost(id);
    if (!result) {
      let errMessage = `Can not delete post with ${id}. Maybe postId is wrong`;
      JSONResponse.serverError(res, errMessage, 404);
    } else {
      let noResult;
      JSONResponse.success(res, 200, noResult, "post deleted successfully");
    }
  } catch (error) {
    if (error instanceof Error) {
      JSONResponse.serverError(res, error?.message);
    }
  }
};

export default { addPost, getPosts, getPost, updatePost, deletePost };
