import React from 'react';
import s from './App.module.scss'
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Preloader from "./components/Preloader/Preloader";
import {BrowserRouter} from "react-router-dom";
import ServerState from "./context/server/ServerState";

const App = () => (
	<ServerState>
		<BrowserRouter>
			<div className={s.app}>
				<Preloader/>
				<Main/>
				<Footer/>
			</div>
		</BrowserRouter>
	</ServerState>
);

export default App