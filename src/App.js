import React from "react"
import './App.css';
//Imported components:
import TodoItem from './components/TodoItem'
import todoData from './components/TodoData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, 
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })    
  }

  render() {
    const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return(
      <div className="todo-list">
        <h1 className="name">Joanna's To Do List:</h1>
        {todoComponents}
      </div>
    )
  }
}

export default App;
