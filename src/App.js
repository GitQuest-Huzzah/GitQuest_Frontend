import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Footer from "./Footer";
import Navbar from "./Navbar";

const App = () => {
	const currentDarkModePreference = localStorage.getItem("darkMode");
	const [darkMode, setDarkMode] = useState(
		currentDarkModePreference === "true" ? true : false
	);
	useEffect(() => {
		localStorage.setItem("darkMode", darkMode);
	}, [darkMode]);
	const { pathname } = useLocation();
	const hideNav = pathname === "/renderthisforme";
	return (
		<div className={hideNav ? "false" : `${darkMode && "dark"}`}>
			{hideNav ? null : <Navbar />}
			{hideNav ? null : (
				<div className="flex justify-end flex-none items-center pt-8 px-44 bg-white dark:bg-gray-800">
					<label className="switch flex">
						<input
							type="checkbox"
							defaultChecked={darkMode}
							onClick={() => setDarkMode(!darkMode)}
						/>
						<span className="slider round"></span>
					</label>
				</div>
			)}
			<AppRoutes />
			{hideNav ? null : <Footer />}
		</div>
	);
};

export default App;
