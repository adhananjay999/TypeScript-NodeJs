// import express from 'express';
// const router = express.Router();
// router.get('/api/posts', controller.getPosts);
// router.post('/api/posts', controller.addPost);
// router.get('/api/posts/:id', controller.getPost);
// router.put('/api/posts/:id', controller.updatePost);
// router.delete('/api/posts/:id', controller.deletePost);
// export = router;

import { CommonRoutesConfig } from "./common/common-routes-config";
import { Application } from "express";
import controller from "../controllers/post";

export class PostsRoutes extends CommonRoutesConfig {
  configureRoutes(): Application {
    // throw new Error('Method not implemented.');
    this.app
      .route(`/posts`)
      .get(controller.getPosts)
      .post(controller.addPost);

    this.app
      .route(`/posts/:postId`)
      .get(controller.getPost)
      .put(controller.updatePost)
      .delete(controller.deletePost);

    return this.app;
  }
  constructor(app: Application) {
    super(app, "PostsRoutes");
  }
}
