var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos')

// all actual paths start with "/todos"

// get /todos
router.get('/', todosCtrl.index)

module.exports = router;
