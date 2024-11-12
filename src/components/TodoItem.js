import React from "react";
const TodoItem = ({todo, index, removeTodo})=>(
    <li>
        {todo} <button onClick={()=> removeTodo(index)}>Remove</button>
    </li>
);

export default TodoItem;