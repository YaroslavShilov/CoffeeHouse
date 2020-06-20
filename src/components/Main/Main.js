import React from 'react';
import {Route, Switch} from "react-router";
import Home from "../../pages/Home";
import OurCoffee from "../../pages/OurCoffee";
import Pleasure from "../../pages/Pleasure";
import AboutIt from "../../pages/AboutIt";

const Main = () => {
	
	return (
		<main>
			<Switch>
				<Route path={'/'} component={Home} exact/>
				<Route path={'/ourcoffee'} component={OurCoffee}/>
				<Route path={'/pleasure'} component={Pleasure}/>
				<Route path={'/aboutit'} component={AboutIt}/>
				{/*404page<Route path={'/'} component={Home}/>*/}
			</Switch>

		</main>
	)
}
	

export default Main
