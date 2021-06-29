const express = require('express');
const router = express.Router();
const AddNewPost = require('../controllers/AddPost');
const comment = require('../controllers/comment');

router.put('/comment', comment.comment);




module.exports = router ;