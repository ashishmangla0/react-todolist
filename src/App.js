import React, { useState,useEffect } from 'react';
import { FormControl, Input, FormHelperText, InputLabel, Button, List } from '@material-ui/core';
import './App.css';
import Todo from './components/Todo';
import db from './firebase';
const initialTodoList = ['Take dogs for walk', 'asdfsd fsdaf sdaf', 'mama miya']
function App() {
  const [input, setinput] = useState('');
//const [todoList, setTodoList] = useState(initialTodoList)
  const [todoList, setTodoList] = useState([])

//when the app loads, we need to listen to the databse and fetch new todos as they get added/removed
// useEffect(function,dependencies)
useEffect(()=>{
  db.collection('todos').onSnapshot(snapshot =>{
    console.log(snapshot.docs.map(doc=>doc.data().todo));
     setTodoList(snapshot.docs.map(doc=>doc.data().todo))
  })
},[])


  const handleInputChange = (e) => {
    setinput(e.target.value);
  }
  const handleSubmit = (e) => {
    //fires on click button
    e.preventDefault();
    console.log('teri maa ka saki naka');
    setTodoList([...todoList, input]);
    setinput('');
  }
  // const handleremove = (todoindex) =>{
  //   const newList = todoList.filter((_,index) => index !== todoindex);
  //   setTodoList(newList);
  // }
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
          {todoList.map((item, index) => (
           
            <Todo todoText={item} key={index} />
          ))}
        </List>
      </div>
    </>
  );
}

export default App;
