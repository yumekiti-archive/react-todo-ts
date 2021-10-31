reactでtodo作ろうの回
===

## api作る

### プロジェクトの作成
```shell
$ npm install express-generator -g

$ express api --view=ejs
```

### api/app.js
```diff
- var usersRouter = require('./routes/users');
- app.use('/users', usersRouter);
- app.use('/', indexRouter);
+ app.use('/api', indexRouter);
```

### prisma生成
```shell
$ cd api
$ npx prisma init
```

### api/prisma/schema.prisma
一番下に以下追記

```typescript
model Todo {
  id    Int     @id @default(autoincrement())
  body  String?
}
```

### .env編集
```
DATABASE_URL="mysql://root:root@db:3306/database"
```

### PrismaClientを生成
```shell
$ npx prisma generate
```

### マイグレーション!!
```shell
$ prisma migrate dev
```

## model書く
```typescript
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const todo  = {
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
        const result = await prisma.user.delete({
            where: { id },
        });

        return result;
    }
}

module.exports = todo;
```

## controller書く
```script
const todo = require("../models/todo");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const todoController = {
    async index(req, res, next){
        const result = await todo.show();

        res.json(result);
    },

    async create(req, res, next){
        const formData = req.body;
        const result = await todo.create(formData);

        res.json(result);
    },

    async delete(req, res, next){
        const formData = req.body;
        const result = await todo.delete(formData.id);

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
```