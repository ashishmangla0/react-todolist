import React from 'react';
import { ListItem, ListItemText,Button } from '@material-ui/core';
import db from '../firebase';

const Todo = (props) =>{
  const handleremove = (todoindex) => {
    console.log(`id is ${props.id}`)
    db.collection('todos').doc(props.id).delete();
   }
    return(
        <>
        <ListItem>
          <ListItemText primary={props.todoText} />
          <Button onClick={() => handleremove()}> Delete Me</Button>
        </ListItem>
        </>
    )
}
export default Todo