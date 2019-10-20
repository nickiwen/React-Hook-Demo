import React, { useState } from 'react';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    function setValue(text){
        // 这里是一个数组合并
        setTodos([{ text }, ...todos])
    }

    return (
        <div>
            <TodoForm onSubmit={ setValue } />
            <div>
                {
                    todos.map(({ text }) => (
                        <div key={text}>{text}</div>
                    ))
                }
            </div>
            <button onClick={ () => setTodos([]) }>reset</button>
        </div>
    )
}

export default TodoList