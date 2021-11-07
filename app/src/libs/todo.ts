import client from "./client"
import { Todo } from "../interfaces/index"

// 取得
export const getTodos = () => {
    return client.get("/todos")
}

// 作成
export const createTodo = (data: Todo) => {
    return client.post("/todos", data)
}

// 削除
export const deleteTodo = (id: number) => {
    return client.delete("/todos")
}