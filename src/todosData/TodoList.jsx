import { useContext } from "react";
import TodoContext from "../todoContext/TodoContext";

const TodoList = () => {
    const { todos, removeTodo, toggleComplete } = useContext(TodoContext);
  
    return (
      <ul className="space-y-2">
        {todos.map(todo => (
          <li 
            key={todo.id} 
            className={`flex justify-between items-center p-3 border border-gray-300 rounded-lg bg-white shadow-md transition duration-200 ease-in-out ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
          >
            <span onClick={() => toggleComplete(todo.id)} className="cursor-pointer hover:text-blue-500 transition duration-150">
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)} className="text-red-500 hover:text-red-700 transition duration-150 font-semibold">
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
export default TodoList;