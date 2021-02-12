import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Styles
import "assets/styles/main.css";

//Components
import { Landing, Footer, ReliefWeb } from "components";

function App() {
	return (
		<div className="App">
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route path="/relief-web-search">
						<ReliefWeb />
					</Route>
					<Route path="/">
						{Landing()}
						{Footer()}
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
