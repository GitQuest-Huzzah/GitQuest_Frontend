import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Contact from './Contact';
import Thanks from './Thanks';
import About from './About';
import FAQPage from './FAQPage';
import { RenderThis } from './RenderThis';
import { TestChart } from './TestChart';

const AppRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route to='/home' element={<Home />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/thankyou' element={<Thanks />} />
				<Route path='/about' element={<About />} />
				<Route path='/faq' element={<FAQPage />} />
				<Route path='/renderthisforme' element={<RenderThis />} />
				<Route path='/testchart' element={<TestChart/>}/>
			</Routes>
		</div>
	);
};

export default AppRoutes;
