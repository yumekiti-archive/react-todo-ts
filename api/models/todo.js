const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const todo = {
    async show(){
        const result = await prisma.todo.findMany();

        return result;
    },

    async create(form){
        const body = form.body;

        const result = await prisma.todo.create({
            data: {
                body,
            },
        });

        return result;
    },

    async delete(id){
        const result = await prisma.todo.delete({
            where: { id },
        });

        return result;
    }
}

module.exports = todo;