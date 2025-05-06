import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;