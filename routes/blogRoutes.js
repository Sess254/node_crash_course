const express = require('express');
const router = express.Router();
const blogContoller = require('../controllers/blogController');

router.get('/', blogContoller.blog_index);

router.post('/', blogContoller.blog_create_post);



router.get('/create', blogContoller.blog_create_get);

router.get('/:id', blogContoller.blog_details);

router.delete('/:id', blogContoller.blog_delete);


module.exports = router;