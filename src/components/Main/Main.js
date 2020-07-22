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
				<Route path={'/ourcoffee'} component={OurCoffee}/>
				<Route path={'/pleasure'} component={Pleasure}/>
				<Route path={'/aboutit'} component={AboutIt}/>
				<Route path={'/'} component={Page404}/>
			</Switch>

		</main>
	)
}
	

export default Main
