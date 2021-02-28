import React from "react"


const TodoItem = (props) => { 
    return (
        <div className="todo-item">
            {/* the below code will ensure that once the box is checked, it will be marked as completed and cannot be unchecked */}
            <input type="checkbox"checked={props.completed}/> 
            <p className="input-style">{props.dataText}</p>
        </div>

    )
}

export default TodoItem