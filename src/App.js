
import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Weather defaultCity='New York' />
				<footer>
					This project was coded by{' '}
					<a
						href='https://www.shecodes.io/graduates/98826-elvira-lettis'
						target='_blank'
						rel='noopener noreferrer'
					>
						Bougie
					</a>{' '}
					and is{' '}
					<a
						href='https://github.com/BoujeeWhoCodes/week-6-lesson'
						target='_blank'
						rel='noopener noreferrer'
					>
						open-sourced on GitHub
					</a>
				</footer>
			</div>
		</div>
	);

}
