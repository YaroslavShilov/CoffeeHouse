import React from 'react';
import s from './App.module.scss'
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Preloader from "./components/Preloader/Preloader";
import {HashRouter} from "react-router-dom";
import ServerState from "./context/server/ServerState";


//**TODO: need to do adaptive**/
const App = () => (
	<ServerState>
		<HashRouter>
			<div className={s.app}>
				<Preloader/>
				<Main/>
				<Footer/>
			</div>
		</HashRouter>
	</ServerState>
);

export default App