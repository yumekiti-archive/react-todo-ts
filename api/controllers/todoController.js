const todo = require("../models/todo");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const todoController = {
    async index(req, res, next){
        const result = await todo.show();

        res.json(result);
    },

    async store(req, res, next){
        const formData = req.body;
        const result = await todo.create(formData);

        res.json(result);
    },

    async test(req, res, next){

        const result  = await prisma.todo.create({
            data: {
                body: 'test body',
            },
        })
    
        res.json(result);
    }
}

module.exports = todoController;