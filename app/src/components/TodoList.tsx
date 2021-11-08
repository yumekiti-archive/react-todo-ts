import React from "react"
import { TodoItem } from "./TodoItem"
import { Grid } from '@mui/material';
import { Todo } from "../interfaces/index"

interface TodoListProps {
    todos: Todo[]
    setTodos: Function
}

export const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
    return (
        <Grid container justifyContent="center" alignItems="center">
        {
            (todos || []).map((todo: Todo, index:  number) => {
                return (
                    <TodoItem
                        key={index}
                        todo={todo}
                        setTodos={setTodos}
                    />
                )
            })
        }
        </Grid>
    )
}