import { useState, useContext } from 'react';
import TodoContext from '../todoContext/TodoContext';

const TodoInput = () => {
    const [text, setText] = useState("");
    const { addTodo } = useContext(TodoContext);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (text.trim()) {
        addTodo(text);
        setText("");
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4 bg-white shadow-lg rounded-xl p-4 border border-gray-200">
        <input 
          type="text" 
          className="border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none p-3 rounded-xl w-full text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out focus:border-blue-500" 
          placeholder="Add a task..." 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition duration-200 shadow-md">Add</button>
      </form>
    );
  };

export default TodoInput;