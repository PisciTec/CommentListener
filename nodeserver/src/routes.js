const express = require('express');

const CommentController = require('./controllers/CommentsController');
const ListenController = require('./controllers/ListenController');

const routes = express.Router();

routes.get('/', CommentController.ListComments);
routes.get('/listen', ListenController.synthe);
//routes.get('/token', ListenController.acessIBM);
routes.post('/',CommentController.CreateComment);

module.exports = routes;