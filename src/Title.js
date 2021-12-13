import React from 'react';

const Title = ({ title }) => {
	return (
		<section className='menu section'>
			<header className='title'>
				<h2>{title}</h2>
				<div className='underline'></div>
			</header>
		</section>
	);
};

export default Title;
