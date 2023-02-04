import React, { useState, useEffect } from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import Footer from './Footer';
import Navbar from './Navbar';

const App = () => {
	const currentDarkModePreference = localStorage.getItem('darkMode');
	const [darkMode, setDarkMode] = useState(
		currentDarkModePreference === 'true' ? true : false
	);

	useEffect(() => {
		localStorage.setItem('darkMode', darkMode);
	}, [darkMode]);

	return (
		<div className={`${darkMode && 'dark'} `}>
			<Navbar />
			<div className='flex justify-end flex-none items-center pt-8 px-44 dark:bg-gray-800'>
				<label className='switch flex'>
					<input type='checkbox' defaultChecked={darkMode} onClick={() => setDarkMode(!darkMode)} />
					<span className='slider round'></span>
				</label>
			</div>
			<AppRoutes />
			<Footer />
		</div>
	);
};

export default App;
