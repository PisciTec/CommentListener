const express = require('express');

const CommentController = require('./controllers/CommentsController');

const routes = express.Router();

routes.get('/', CommentController.ListComments);
routes.post('/',CommentController.CreateComment);

module.exports = routes;