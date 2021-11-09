import React, { VFC, ChangeEvent, useState } from 'react';
import { TextField, Grid, Button } from '@mui/material';
import { Todo } from '../interfaces/index';
import { createTodo } from "../libs/todo";

interface TodoFormProps {
    todos: Todo[]
    setTodos: Function
}

export const TodoForm: VFC<TodoFormProps> = ({ todos, setTodos }) => {
    const [body, setBody] = useState<string>("");

    const bodyChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBody(e.target.value);
    };

    const setTodo = async () => {

        const data: Todo = {
            body: body
        }

        try {
            const res = await createTodo(data);
            console.log(res);
            
            if (res.status === 200) {
                setTodos([...todos, res.data])
            } else {
                console.log(res.data.message)
            }
        } catch (err) {
            console.log(err);
        }

        setBody('');
    }

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={10} margin={3} style={{ display: "flex" }}>
                <TextField
                    label="Todo"
                    style={{ width: "90%" }}
                    value={body}
                    onChange={bodyChange}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') { setTodo() } 
                    }}
                />
                <Button
                    variant="contained"
                    style={{ width: "10%" }}
                    onClick={() => setTodo() }
                >
                    ADD
                </Button>
            </Grid>
        </Grid>
    )
}