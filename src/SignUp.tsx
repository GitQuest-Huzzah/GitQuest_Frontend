import React, { useState } from "react";
import {
	errorMessage,
	formGridOneColumn,
	inputClass,
	inputLabel,
	submitButton,
} from "./cssClasses";
import axios from "axios";
import { IsignupFormData, LoginProps } from "./Interfaces";
export const SignUp = ({ setLoggedIn }: LoginProps) => {
	const [signUpFormData, setSignUpFormData] = useState<IsignupFormData>({
		email: "",
		password: "",
		duplicatePassword: "",
	});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState<boolean>(false);
	const updateSignUpFormData = (event) => {
		const keyToUpdate = event.target.name;
		setSignUpFormData((currentInfo) => ({
			...currentInfo,
			[keyToUpdate]: event.target.value,
		}));
	};

	const handleSubmit = async (event) => {
		setLoading(true);
		event.preventDefault();
		if (validateForm()) {
			try {
				const response = await axios.post(
					"https://gitgoingslackbot.uc.r.appspot.com/api/auth/signup",
					signUpFormData
				);
				window.localStorage.setItem("token", response.data.token);
				setLoggedIn(true);
				setError(null);
			} catch (err) {
				setError(err.response.data);
			} finally {
				setSignUpFormData({
					email: "",
					password: "",
					duplicatePassword: "",
				});
				setLoading(false);
			}
		}
	};
	const validateForm = () => {
		if (signUpFormData.password !== signUpFormData.duplicatePassword) {
			setError("Passwords don't match!");
			return false;
		}
		setError(null);
		return true;
	};
	return (
		<div className="py-10 bg-white md:py-16 dark:bg-gray-800 h-full">
			<div className="flex flex-col items-center justify-center mx-auto sm:p-3 xl:pb-4 xl:px-4 lg:max-w-[87rem] lg:p-0">
				<form className={formGridOneColumn} onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email" className={inputLabel}>
							Email (same address used to install GitQuest)
						</label>
						<input
							id="email"
							name="email"
							type="email"
							className={inputClass}
							onChange={updateSignUpFormData}
							value={signUpFormData.email}
						></input>
						<label htmlFor="password" className={inputLabel}>
							Password (minimum 5 characters)
						</label>
						<input
							id="password"
							name="password"
							type="password"
							className={inputClass}
							onChange={updateSignUpFormData}
							minLength={5}
							value={signUpFormData.password}
						></input>
						<label htmlFor="retypepassword" className={inputLabel}>
							Re-type Password
						</label>
						<input
							id="duplicatepassword"
							name="duplicatePassword"
							type="password"
							minLength={5}
							className={inputClass}
							onChange={updateSignUpFormData}
							value={signUpFormData.duplicatePassword}
						></input>
					</div>
					<div className="flex items-center flex-col justify-center sm:col-span-2">
						{error ? <div className={errorMessage}>{error}</div> : null}
						{loading ? (
							<div
								role="status"
								className="flex items-center flex-col justify-center sm:col-span-2"
							>
								<svg
									aria-hidden="true"
									className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
									viewBox="0 0 100 101"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
										fill="currentColor"
									/>
									<path
										d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
										fill="currentFill"
									/>
								</svg>
								<span className="sr-only">Loading...</span>
							</div>
						) : (
							<input
								type="submit"
								value="Sign Up"
								className={submitButton}
								data-primary="black"
								data-rounded="rounded-full"
							/>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};
