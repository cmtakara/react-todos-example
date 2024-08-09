import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    console.log(e.target.value);
    const newTodo = { text: e.target.value, id: Date.now(), completed: false};
    setTodos([newTodo, ...todos]);
    e.target.value = '';
    // be careful about the timing when you are checking a value
    // using console.log
    // this will output before the todos is updated
    // console.log(todos);
  }

  return (
    <>
    <h1>To Do List App</h1>
    <TodoList 
      todos = {todos}
      addTodo = {addTodo}
    />
    </>
  )
}

export default App
