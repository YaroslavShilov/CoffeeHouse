import React from 'react';
import {Route, Switch} from "react-router";
import Home from "../../pages/Home";
import OurCoffee from "../../pages/OurCoffee";
import Pleasure from "../../pages/Pleasure";
import AboutIt from "../../pages/AboutIt";
import Page404 from "../../pages/Page404/Page404";

const Main = () => {
	
	return (
		<main>
			<Switch>
				<Route path={'/'} component={Home} exact/>
				<Route path={'/ourcoffee'} component={OurCoffee} exact/>
				<Route path={'/pleasure'} component={Pleasure} exact/>
				<Route path={'/aboutit/:name'} component={AboutIt} exact/>
				<Route path={'/'} component={Page404}/>
			</Switch>

		</main>
	)
}
	

export default Main
