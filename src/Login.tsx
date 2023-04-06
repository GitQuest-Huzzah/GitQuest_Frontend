import React, { useState } from "react";
import { formGrid, inputClass, inputLabel, submitButton } from "./cssClasses";
import { errorMessage } from "./cssClasses";
import axios from "axios";
import { SignUp } from "./SignUp";
import { LoginProps } from "./Interfaces";
export const Login = ({ setLoggedIn }: LoginProps) => {
	const [loading, setLoading] = useState(false);
	const [loginFormData, setLoginFormData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState(null);
	// to conditionally render signup or login based on state
	const [signUp, setSignUp] = useState(false);

	const handleSubmit = async (event) => {
		setLoading(true);
		event.preventDefault();
		console.log(loginFormData);
		try {
			const response = await axios.post(
				"https://gitgoingslackbot.uc.r.appspot.com/api/auth/login",
				loginFormData
			);
			window.localStorage.setItem("token", response.data.token);
			response.data.token ? setLoggedIn(true) : setLoggedIn(false);
			setError(null);
		} catch (err) {
			console.log(err);
			setError(err);
		} finally {
			setLoginFormData({
				email: "",
				password: "",
			});
			setLoading(false)
		}
	};
	const updateLoginFormData = (event) => {
		const keyToUpdate = event.target.name;
		setLoginFormData((currentInfo) => ({
			...currentInfo,
			[keyToUpdate]: event.target.value,
		}));
		console.log(loginFormData);
	};
	return (
		<>
			{signUp ? (
				<SignUp setLoggedIn={(value) => setLoggedIn(value)} />
			) : (
				<div className="py-10 bg-white md:py-16 dark:bg-gray-800 h-full">
					<div className="flex flex-col items-center justify-center mx-auto sm:p-3 xl:pb-4 xl:px-4 lg:max-w-[87rem] lg:p-0">
						<form className={formGrid} onSubmit={handleSubmit}>
							<div>
								<label htmlFor="email" className={inputLabel}>
									Email
								</label>
								<input
									id="email"
									name="email"
									className={inputClass}
									onChange={updateLoginFormData}
								></input>
							</div>
							<div>
								<label htmlFor="password" className={inputLabel}>
									Password
								</label>
								<input
									id="password"
									name="password"
									className={inputClass}
									onChange={updateLoginFormData}
									minLength={5}
									value={loginFormData.password}
								></input>
							</div>
							{loading ? (
							<div
								className="flex items-center flex-col justify-center sm:col-span-2 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
								role="status"
							>
								<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
									Loading...
								</span>
							</div>
						) : <div className="flex items-center flex-col justify-center sm:col-span-2">
								{error ? <div className={errorMessage}>Incorrect Username/Password Please Try Again</div> : null}
								<input
									type="submit"
									value="Login"
									className={submitButton}
									data-primary="black"
									data-rounded="rounded-full"
								/>
							</div> }
						</form>
						<span
							onClick={() => setSignUp(true)}
							className="underline text-blue-300 hover:text-blue-500 pt-3"
						>
							Don't Have an Account Yet?
						</span>
					</div>
				</div>
			)}
		</>
	);
};
