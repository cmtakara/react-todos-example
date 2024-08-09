import { useState } from 'react';

function Todo ({todo, editTodoText, completeTodo, deleteTodo}) {
    // this is because I was troubleshooting why 
    // editTodoText was not a function
    // console.log(editTodoText)
    const [showInput, setShowInput] = useState(false);
    return (
        <li>
            <div>
                <h2 onClick={(e) => {
                    setShowInput(!showInput);
                }}>
                    {todo.text}
                </h2>
                <input 
                    style={{ display: showInput ? 'block' : 'none'}}
                    type='text'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            editTodoText(todo.id, e);
                            setShowInput(false);
                        }
                    }}
                />
                <label>
                    Complete
                    <input 
                        type='checkbox'
                        checked={todo.completed}
                        onChange={(e) => {
                            completeTodo(todo.id, e)
                        }}
                    />
                </label>
                <button
                    onClick={(e) => {
                        deleteTodo(todo.id)
                    }}
                >
                    Delete Todo
                </button>
            </div>
        </li>
    )
}

export default Todo;