import React from "react"


const TodoItem = (props) => { 
    return (
        <div className="todo-item">
            {/* the below code + property of checked will ensure that once the box is checked, it will be marked as completed and cannot be unchecked */}
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            /> 
            <p className="input-style">{props.item.text}</p>
        </div>

    )
}

export default TodoItem