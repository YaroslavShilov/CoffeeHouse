import React from 'react';
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import About from "../About/About";
import AboutOurBeans from "../About/img/aboutOurBeans.jpg"
import Best from "../Best/Best";

const App = (props) => {
	return (
		<div>
			<Header title={'Our Coffee'}/>
			<MainSection/>
			<About label={'About Us'}>
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
			<Best/>
		</div>
	);
}

export default App