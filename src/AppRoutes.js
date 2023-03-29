import React from 'react';
import { Login } from './Login';
import { RenderThis } from './RenderThis';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import FAQPage from './FAQPage';
import Home from './Home';
import Install from './Install';
import Thanks from './Thanks';
import { SignUp } from './SignUp';
import { Dashboard } from './Dashboard';

const AppRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route to='/home' element={<Home />} />
				<Route path='/install' element={<Install />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/thankyou' element={<Thanks />} />
				<Route path='/about' element={<About />} />
				<Route path='/faq' element={<FAQPage />} />
				<Route path='/renderthisforme' element={<RenderThis />} />
				<Route path='/login' element={<Login/>}/>
				<Route path='/signup' element={<SignUp/>}/>
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</div>
	);
};

export default AppRoutes;
