import React from 'react';
import s from './App.module.scss'
import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";
import About from "../components/About/About";
import AboutOurBeans from "../components/About/img/aboutOurBeans.jpg"
import Best from "../components/Best/Best";
import Footer from "../components/Footer/Footer";

const App = (props) => {
	return (
		<div className={s.app}>
			<div>
				
				<Header title={'Our Coffee'}/>
				{/*
			<About label={'About Us'} img={AboutOurBeans}>
				<p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
					Afraid at highly months do things on at. Situation recommend objection do intention
					so questions. As greatly removed calling pleased improve an. Last ask him cold feel
					met spot shy want. Children me laughing we prospect answered followed. At it went
					is song that held help face.
				</p>
				<p>
					Now residence dashwoods she excellent you. Shade being under his bed her, Much
					read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
					horrible but confined day end marriage. Eagerness furniture set preserved far
					recommend. Did even but nor are most gave hope. Secure active living depend son
					repair day ladies now.
				</p>
			</About>
			*/}
				{/*<Best/>*/}
			</div>
			<Footer/>
		</div>
	);
}

export default App