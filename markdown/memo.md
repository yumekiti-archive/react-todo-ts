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
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
```

### .env.example編集
```
DATABASE_URL="mysql://root:root@db:3306/database"
```

### env生成
```
$ cp .env.example .env
```

### PrismaClientを生成
```shell
$ npx prisma generate
```

### マイグレーション
```shell
$ prisma migrate dev
```