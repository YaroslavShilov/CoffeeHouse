import React from 'react';
import s from "./Loader.module.scss";
import IconCoffee from "./img/coffee.png";
import IconCup from "./img/cup.png";

const Loader = ({absolute}) => {
	
	const modif = absolute && s.__absolute;
	
	return (
		<div className={`${s.loader} ${modif}`}>
			<div className={s.icon}>
				<img className={s.coffee} src={IconCoffee} alt="Goods"/>
				<div className={s.load}/>
				<img className={s.cup} src={IconCup} alt="Cup"/>
			</div>
		</div>
	);
}
export default Loader