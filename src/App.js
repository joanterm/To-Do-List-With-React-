import React from "react"
import './App.css';
//imported components:
import TodoItem from './components/TodoItem.js'
import todoData from './components/TodoData.js'

const App = () => {

  console.log(todoData)
  const todoComponents = todoData.map(item => <TodoItem key={item.id} completed={item.completed} dataText={item.text}/>)

  return(
    <div className="todo-list">
      {todoComponents}
    </div>
  )
}

export default App;
