import React from 'react';
import s from './Preloader.module.scss';
import Loader from "../Loader/Loader";

const Preloader = () => (
	<div className={s.bg}>
		<Loader absolute/>
	</div>
);

export default Preloader