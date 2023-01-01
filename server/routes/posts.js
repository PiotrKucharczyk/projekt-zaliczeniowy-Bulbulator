import express from 'express';

import {getPosts, createPost} from '../controllers/posts.js'

const router = express.Router();

// https://localhost:5000/posts

router.get('/', getPosts);
router.get('/', createPost);

export default router;