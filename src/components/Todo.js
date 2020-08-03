import React from 'react';
import { ListItem, ListItemText,Button } from '@material-ui/core';

const Todo = (props) =>{
    return(
        <>
        <ListItem key={props.keyprop}>
          <ListItemText primary={props.todoText} />
          <Button onClick={props.parameter}> Delete Me</Button>
        </ListItem>
        </>
    )
}
export default Todo