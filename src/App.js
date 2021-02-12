import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Styles
import "assets/styles/main.css";

//Components
import { Landing, Footer, ReliefWeb, NotFound } from "components";

function App() {
	return (
		<div className="App">
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path="/relief-web-search">
						<ReliefWeb />
					</Route>
					<Route exact path="/">
						<Landing />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
