import Todo from "./Todo";

function TodoList ({
    todos,
    addTodo
}) {
    return (
        <>
        <h1>This is Todo List </h1>

        <h1>Create Todo</h1>
        <input 
            type='text'
            onKeyDown={(e) => {
                e.key === 'Enter' && addTodo(e);
            }}
        />

        {todos.length 
            ? 
            <Todo /> 
            : (
            <h1>No Todos added yet</h1>
            )
        }
        </>
    )
}

export default TodoList;