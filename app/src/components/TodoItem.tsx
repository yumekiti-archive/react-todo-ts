import React, { VFC } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Todo } from "../interfaces/index";

interface TodoItemProps {
    todo: Todo
    setTodos: Function
}

export const TodoItem: VFC<TodoItemProps> = ({ todo, setTodos }) => {
    return (
        <Grid item xs={10} margin={1}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {todo.id} : {todo.body}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}