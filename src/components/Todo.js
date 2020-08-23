import React from 'react';
import { ListItem, ListItemText, Button, IconButton, TextField } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import db from '../firebase';
const Todo = (props) => {
  const [tagetTime, setTargetTime] = useState('');
  const handleremove = (todoindex) => {
    console.log(`id is ${props.id}`)
    db.collection('todos').doc(props.id).delete();
  }

  const handleTime = (e) =>{
    console.log(e.target.value)
    setTargetTime(e.target.value)
  }

  return (
    <>
      <ListItem>
        <ListItemText primary={props.todoText} />
        {/* <Button onClick={() => handleremove()}> Delete Me</Button> */}
        <TextField label="Target Date" type="date" defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}

              onChange={handleTime}
            />
        <IconButton aria-label="delete" onClick={() => handleremove()}>
          <Delete fontSize="large" />
        </IconButton>
      </ListItem>
    </>
  )
}
export default Todo