import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export const TodoList = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <List>
                {generate(
                    <ListItem>
                    <ListItemText
                        primary="Single-line item"
                    />
                    </ListItem>,
                )}
                </List>
            </Grid>
        </Grid>
    )
}