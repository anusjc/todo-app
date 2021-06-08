
import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk',' Take the rubbish out','Anusjc is working']);
const [input,setInput] = useState('');

  return (
    <div className="app">
      <input value={input} onChange={event => setInput(event.target.value)}/> 
      <button>Add todo</button>

    <ul>
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
      </ul>  

    </div>
  );
}

export default App;
