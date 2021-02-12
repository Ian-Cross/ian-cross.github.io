import React from "react";

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
