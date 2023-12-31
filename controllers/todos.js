// controllers/todos.js
const Todo = require('../models/todo');
module.exports = {
    index,
    show
  };

function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll()
    });
  }

  function show(req, res) {
    res.render('todos/show', {
      task: Todo.getOne(req.params.id),
    });
  }
