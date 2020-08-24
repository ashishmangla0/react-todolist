import React, { useState, useEffect } from 'react';
import { FormControl, Input, FormHelperText, InputLabel, Button, List, TextField } from '@material-ui/core';
import './App.css';
import Todo from './components/Todo';
import db, { firebaseTimestamp } from './firebase';
import firebase from 'firebase';
function App() {
  const [input, setinput] = useState('');
  const [tagetTime, setTargetTime] = useState('');
  const [todoList, setTodoList] = useState([]);

  //when the app loads, we need to listen to the databse and fetch new todos as they get added/removed
  // useEffect(function,dependencies)
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc=>doc.data().todo));
      setTodoList(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, [])


  const handleInputChange = (e) => {
    setinput(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setinput('');
  }
  return (
    <>
      <div className="App">

        <h1>TODO List</h1>
        <form onSubmit={handleSubmit}>
          <FormControl >
            <InputLabel >Write a todo</InputLabel>
            <Input value={input} onChange={handleInputChange} />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary" disabled={!input} type="submit">
            Primary
</Button>
        </form>
        <List>
          {todoList.map((item, index) => (<>
            <Todo todoText={item.todo} key={index+1} id={item.id} />
          </>
          ))}
        </List>
      </div>
    </>
  );
}

export default App;
