import React, { VFC } from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Todo } from "../interfaces/index";
import { deleteTodo } from "../libs/todo";
import { useSpring, animated } from 'react-spring';

interface TodoItemProps {
    todo: Todo
    setTodos: Function
}

export const TodoItem: VFC<TodoItemProps> = ({ todo, setTodos }) => {
    const [spring, api] = useSpring(() => {
        return {
            to: [{ opacity: 1 }],
            from: { opacity: 0 }
        }
    });

    const todoDelete = (id: number) => {
        api.start({
            to: [{ opacity: 0 }],
            from: { opacity: 1 },
            onRest: async () => {
                try {
                    const res = await deleteTodo(id)
                    console.log(res)

                    if (res?.status === 200) {
                        setTodos((prev: Todo[]) => prev.filter((todo: Todo) => todo.id !== id))
                    } else {
                        console.log(res.data.message)
                    }

                    api.start({
                        to: [{ opacity: 1 }],
                        from: { opacity: 0 },
                    })
                } catch (err) {
                    console.log(err)
                }
            }
        });
    }

    return (
        <Grid item xs={10} margin={1}>
            <animated.div style={spring}>
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
            </animated.div>
        </Grid>
    )
}