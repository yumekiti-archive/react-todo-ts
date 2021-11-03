import client from "./client"
import { Todo } from "../interfaces/index"

// 取得
export const getTodos = () => {
    return client.get("/api/todos")
}

// 作成
export const createTodo = (data: Todo) => {
    return client.post("/api/todos", data)
}

// 削除
export const deleteTodo = (id: number) => {
    return client.delete(`/api/todos`)
}