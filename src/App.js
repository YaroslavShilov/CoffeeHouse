import React from 'react';
import s from './App.module.scss'
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Preloader from "./components/Preloader/Preloader";

const App = (props) => {
	
	return (
		<div className={s.app}>
			<Preloader/>
			<Main/>
			<Footer/>
		</div>
	);
}

export default App