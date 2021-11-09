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

### prisma作成
```shell
$ cd api
$ npx prisma init
```

### prisma書く
./api/prisma/schema.prisma

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

### model書く
./api/models/todo.js

### controller書く
./api/controllers/todoControllers.js

### routes書く
./api/routes/index.js

## app作るうう

### react作成
```shell
$ npx create-react-app app --template typescript
```

### ディレクトリ作成
```
./app/src/components
./app/src/interfaces
./app/src/libs
```

### interfaces書く
./app/src/interfaces/index.ts

### libs書く
./app/src/libs/client.ts
./app/src/libs/todo.ts

### components書く
./app/src/components/TodoForm.tsx
./app/src/components/TodoItem.tsx
./app/src/components/TodoList.tsx

完成。。
