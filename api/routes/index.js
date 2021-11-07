var express = require('express');
const todoController = require('../controllers/todoController');

var router = express.Router();

router.get('/', todoController.index);
router.post('/', todoController.create);
router.delete('/:id', todoController.delete);
router.get('/test', todoController.test);

module.exports = router;
