import React from "react";
import "./App.css";

//Styles
import "assets/styles/main.css";

//Components
import { Landing, Footer } from "components";

function App() {
  return (
    <div className="App">
      {Landing()}
      {Footer()}
    </div>
  );
}

export default App;
