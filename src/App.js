import "./App.css";
import Feed from "./Components/Feed";
import Sidebar from "./Components/Sidebar";
import React from "react";
import Widgets from "./Components/Widgets";

function App() {
  return (
    <div className="app">
      {/*sidebar*/}
      <Sidebar />

      {/*Feed*/}
      <Feed />

      {/*Widgets*/}
      <Widgets />
    </div>
  );
}

export default App;
