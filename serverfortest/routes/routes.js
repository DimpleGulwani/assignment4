const express = require('express');

import { getPosts,getPostsById } from '../controller/posts.js';



const router = express.Router();


router.get('/posts', getPosts);
router.get('/posts/:id', getPostsById);

export default router;