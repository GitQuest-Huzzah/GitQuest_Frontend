import React from "react";
import { Link } from "react-router-dom";
import gqlogo from "./assets/gqlogo.svg";

const Navbar = () => {
	return (
		<section className="w-full px-8 text-gray-700 bg-white dark:bg-gray-800 border-solid border-b-2 border-gray-400">
			<div className="flex flex-col flex-wrap items-center justify-between py-6 mx-auto md:flex-row lg:max-w-[87rem]">
				<div className="relative flex flex-col md:flex-row">
					<Link
						to="/home"
						className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
					>
						<img alt="gqlogo" src={gqlogo} className="w-auto h-32" />
					</Link>
				</div>
				<div className="inline-flex flex-col items-center sm:flex-row sm:ml-5 lg:justify-end">
					<nav className="flex flex-wrap items-center space-x-4 text-xl font-semibold tracking-wide uppercase sm:space-x-6">
						{/*  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 */}
						<Link
							to="/home"
							className="text-gray-400 hover:text-gray-500 uppercase"
						>
							Home
						</Link>
						<Link
							to="/about"
							className="text-gray-400 hover:text-gray-500 uppercase"
						>
							About
						</Link>
						<Link
							to="/contact"
							className="text-gray-400 hover:text-gray-500 uppercase"
						>
							Contact
						</Link>
						<Link
							to="/faq"
							className="text-gray-400 hover:text-gray-500 uppercase"
						>
							FAQ
						</Link>
					</nav>
					<Link
						to="/signup"
						className="inline-flex tracking-wide uppercase text-xl items-center sm:mt-0 mt-5 sm:mx-8 justify-center px-5 py-2.5 font-semibold text-white bg-gray-800 dark:bg-gray-600 border border-transparent shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-white 2xl:rounded-full 2xl:border-transparent 2xl:bg-gray-800 rounded-full"
					>
						set sail
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
