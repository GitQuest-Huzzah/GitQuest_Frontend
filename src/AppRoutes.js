import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Contact from "./Contact";
import Thanks from "./Thanks";
import About from "./About";
import { RenderThis } from "./RenderThis";

const AppRoutes = () => {
	
	return (
		<div>
			<Routes>
				
				<Route path="/*" element={<Home />} />
				<Route to="/home" element={<Home />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/thankyou" element={<Thanks />} />
				<Route path="/about" element={<About />} />
				<Route path="/renderthisforme" element={<RenderThis/>} />

				
			</Routes>
		</div>
	);
};

export default AppRoutes;
