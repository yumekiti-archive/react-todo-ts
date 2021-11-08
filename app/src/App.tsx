import React, { useState, useEffect, VFC } from "react";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { getTodos } from "./libs/todo";
import { Todo } from "./interfaces/index";

const App: VFC = () => {

    const [todos, setTodos] = useState<Todo[]>([])

    const get = async () => {
        try {
            const res = await getTodos()
            console.log(res)

            if (res?.status === 200) {
                setTodos(res.data)
            } else {
                console.log(res.data.message)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        get()
    }, []);

    return (
        <>
            <TodoForm todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </>
    );
}

export default App;
