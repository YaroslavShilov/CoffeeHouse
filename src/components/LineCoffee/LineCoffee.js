import React from 'react';
import s from './LineCoffee.module.scss';
import IconLine from "./icon/IconLine";

const LineCoffee = ({modif=''}) => (
		<div className={`${s.line} ${s[modif]}`}>
			<span className={s.icon}>
				<IconLine/>
			</span>
		</div>
);

export default LineCoffee