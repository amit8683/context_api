import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Home from "./components/Home";
import ShowUser from "./components/ShowUser";
import TodoContextProvider from "./todoContext/TodoContextProvider";
import TodoInput from "./todosData/TodoInput";
import TodoList from "./todosData/TodoList";
function App() {

  return (
    // <UserContextProvider>
    //   <Home/>
    //   <ShowUser/>
    // </UserContextProvider>
    <TodoContextProvider>
      <TodoInput/>
      <TodoList/>
    </TodoContextProvider>
  );
}

export default App;
