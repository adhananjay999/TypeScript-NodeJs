import express from 'express';
import controller from '../controllers/post';
const router = express.Router();

router.get('/api/posts', controller.getPosts);
router.post('/api/posts', controller.addPost);
router.get('/api/posts/:id', controller.getPost);
router.put('/api/posts/:id', controller.updatePost);
router.delete('/api/posts/:id', controller.deletePost);

export = router;