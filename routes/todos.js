var express = require('express');
var router = express.Router();

var todosCtrl = require('../controllers/todos');
// All actual paths start with "/todos"

//GET /todo
router.get('/', todosCtrl.index);

//GET /todo/:id
router.get('/:id', todosCtrl.show)

module.exports = router;