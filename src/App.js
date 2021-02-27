import React from "react"
import './App.css';
//imported components:
import TodoItem from './components/TodoItem.js'

const App = () => {
  return(
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
    
  )
}

export default App;
