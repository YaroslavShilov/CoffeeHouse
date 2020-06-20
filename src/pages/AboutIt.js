import React from 'react';
import Header from "../components/Header/Header";
import AboutItem from "../components/AboutItem/AboutItem";
import {Route} from "react-router";

const AboutIt = () => {
	return (
		<>
			<Header title={'Our Coffee'}/>
			<Route path={'/aboutit/:name'} component={AboutItem}/>
		</>
	);
}

export default AboutIt