const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const todo  = {
    async show(){
        const result = await prisma.todo.findMany();
        return result;
    },
    async create(form){
        const title = form.title;

        const result = await prisma.todo.create({
            data: {
                title,
            },
        });
        return result;
    },
    async delete(id){
        const result = await prisma.user.delete({
            where: { id },
        });
        return result;
    }
}

module.exports = todo;