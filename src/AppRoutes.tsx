import React from "react";
import { RenderThis } from "./RenderThis";
import { Route, Routes } from "react-router-dom";
import About from "./About.js";
import Contact from "./Contact";
import FAQPage from "./FAQPage";
import Home from "./Home";
import Install from "./Install";
import Thanks from "./Thanks";
import { MyAccount } from "./MyAccount";

const AppRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/*" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/install" element={<Install />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/thankyou" element={<Thanks />} />
				<Route path="/about" element={<About />} />
				<Route path="/faq" element={<FAQPage />} />
				<Route path="/renderthisforme" element={<RenderThis />} />
				<Route path="/myaccount" element={<MyAccount />} />
			</Routes>
		</div>
	);
};

export default AppRoutes;
