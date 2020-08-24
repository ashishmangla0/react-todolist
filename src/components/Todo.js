import React,{useState} from 'react';
import { ListItem, ListItemText, IconButton} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import db from '../firebase';
import SetTarget from './SetTarget';
const Todo = (props) => {
  const handleremove = (todoindex) => {
    console.log(`id is ${props.id}`)
    db.collection('todos').doc(props.id).delete();
  }

  const handleTime = (e) =>{
    console.log(e.target.value)
  }
 
  return (
    <>
      <ListItem>
      
        <ListItemText primary={props.todoText} />
        
        {/* <Button onClick={() => handleremove()}> Delete Me</Button> */}
        <SetTarget id={props.id} onChange={handleTime}/>
        <IconButton aria-label="delete" onClick={() => handleremove()}>
          <Delete fontSize="large" />
        </IconButton>
      </ListItem>
    </>
  )
}
export default Todo