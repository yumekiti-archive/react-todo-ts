const todo = require("../models/todo")

const todoController = {
    async index(req, res, next){
        const result = await todo.show();

        res.json(result);
    }
}

module.exports = todoController;