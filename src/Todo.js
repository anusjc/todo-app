import React from 'react'
import { List, ListItem, ListItemText,  ListItemAvatar}  from '@material-ui/core';
import './Todo.css'
function Todo(props) {
    return (
        <List clasName="todo_list">
            <ListItem>
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Deadline" />
            </ListItem>
        </List>
    )
}

export default Todo
