
import { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
function App() {
  const [todos, setTodos] = useState([]);
const [input,setInput] = useState('');

// when the app loads, we need to listen to the database and fetch new todos as they get added/removed

useEffect (() => {
// this code here... fires when the app.js loads
db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
  setTodos(snapshot.docs.map(doc => ({id: doc.id,todo : doc.data().todo})))
})
}, []);
const addTodo = (event) => {
  // This will fire off when we click the button
  event.preventDefault();  //this will stop the Refresh

  db.collection('todos').add({
    todo:input,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })

  setInput(''); // clear up the input after clicking add todo button
}

  return (
    <div className="App">
      <header className="App-header">
      <h1>Here are your Todo's For the Day</h1><br></br>
      <form>

      <FormControl className="form-control">
        <InputLabel >Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>

      <Button disabled = {!input} type = "submit" onClick={addTodo} variant="contained" color="primary">
      Add todo
      </Button>
      {/* <button type = "submit" onClick={addTodo}>Add todo</button> */}

      </form>
      <br></br>
    <ul className="ul-style">
      {todos.map(todo => (
        <Todo todo = {todo} />
      ))}
      </ul>  
</header>
    </div>
  );
}

export default App;
