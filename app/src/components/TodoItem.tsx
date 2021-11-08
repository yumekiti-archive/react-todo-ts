import React, { VFC } from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Todo } from "../interfaces/index";
import { deleteTodo } from "../libs/todo";

interface TodoItemProps {
    todo: Todo
    setTodos: Function
}

export const TodoItem: VFC<TodoItemProps> = ({ todo, setTodos }) => {

    const todoDelete = async (id: number) => {
        try {
            const res = await deleteTodo(id)
            console.log(res)

            if (res?.status === 200) {
                setTodos((prev: Todo[]) => prev.filter((todo: Todo) => todo.id !== id))
            } else {
                console.log(res.data.message)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Grid item xs={10} margin={1}>
            <Card>
                <CardContent style={{ display: "flex" }}>
                    <Typography variant="h5" component="div" style={{ marginRight: "auto" }}>
                        {todo.id} : {todo.body}
                    </Typography>
                    <Button
                        color="error"
                        variant="contained"
                        style={{ marginLeft: "auto" }}
                        onClick={() => todoDelete(todo.id || 0)}
                    >
                        Delete
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}