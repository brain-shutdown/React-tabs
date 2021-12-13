import React, { useState } from 'react';
import useFetch from './useFetch';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Title from './Title';

const url = 'https://course-api.com/react-tabs-project';
function App() {
	const { loading, error, data } = useFetch(url);
	const [value, setValue] = useState(0);
	console.log(loading, error, data);

	if (loading) {
		return (
			<main>
				<Title title={loading} />;
			</main>
		);
	}
	if (error) {
		return (
			<main>
				<Title title={error} />;
			</main>
		);
	}
	const { company, duties, dates, title } = data[value];
	return (
		<main>
			<Title title={'Experience'} />
			<article className='jobs-center'>
				<div className='btn-container'>
					{data.map((company, index) => {
						return (
							<button className={`job-btn ${index === value && 'active-btn'}`} key={company.id} onClick={() => setValue(index)}>
								{company.company}
							</button>
						);
					})}
				</div>
				<div className='job-info'>
					<h3>{title}</h3>
					<h4>{company}</h4>
					<p className='job-date'>{dates}</p>
					{duties.map((duty, index) => {
						return (
							<div className='job-desc' key={index}>
								<FaAngleDoubleRight className='job-icon' />
								<p>{duty}</p>
							</div>
						);
					})}
				</div>
			</article>
		</main>
	);
}

export default App;
