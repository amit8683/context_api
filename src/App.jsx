import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Home from "./components/Home";
import ShowUser from "./components/ShowUser";
function App() {

  return (
    <UserContextProvider>
      <Home/>
      <ShowUser/>
    </UserContextProvider>
  );
}

export default App;
