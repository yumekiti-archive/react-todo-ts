import React, { VFC } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Todo } from "../interfaces/index"

export const TodoItem: VFC<Todo> = ({ id, body }) => {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={10} margin={1}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {id} : {body}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}