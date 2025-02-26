import  { useState } from "react";
import TodoContext from "./TodoContext";
const TodoContextProvider =  ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text }]);
    };
    
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
