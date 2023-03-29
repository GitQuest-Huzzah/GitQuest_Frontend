import React, { useState } from "react";
import {
  errorMessage,
	formGridOneColumn,
	inputClass,
	inputLabel,
	submitButton,
} from "./cssClasses";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
	const [signUpFormData, setSignUpFormData] = useState({
		email: "",
		password: "",
		duplicatePassword: "",
	});
	const [results, setResults] = useState(null);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const updateSignUpFormData = (event) => {
		const keyToUpdate = event.target.name;
		setSignUpFormData((currentInfo) => ({
			...currentInfo,
			[keyToUpdate]: event.target.value,
		}));
		console.log(signUpFormData);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (validateForm()) {
			try {
				const response = await axios.post(
					"https://gitgoingslackbot.uc.r.appspot.com/api/auth/signup",
					signUpFormData
				);
				setResults(response.data);
				setError(null);
				navigate('/dashboard')
			} catch (err) {
				setError(err.response.data);
				console.log("error:", error, "err:", err);
			} finally {
				setSignUpFormData({
					email: "",
					password: "",
					duplicatePassword: "",
				});
			}
		}
	};
	const validateForm = () => {
		console.log(error);
		if (signUpFormData.password !== signUpFormData.duplicatePassword) {
			setError("Passwords don't match!");
      return false;
		}
		setError(null);
    return true
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
              minLength="5"
							value={signUpFormData.password}
						></input>
						<label htmlFor="retypepassword" className={inputLabel}>
							Re-type Password
						</label>
						<input
							id="duplicatepassword"
							name="duplicatePassword"
							type="password"
              minLength="5"
							className={inputClass}
							onChange={updateSignUpFormData}
							value={signUpFormData.duplicatePassword}
						></input>
					</div>
					<div className="flex items-center flex-col justify-center sm:col-span-2">
            {error ? (
              <div className={errorMessage}>{error}</div>
            ) : null}
							<input
								type="submit"
								value="Sign Up"
								className={submitButton}
								data-primary="black"
								data-rounded="rounded-full"
                />
					</div>
				</form>
			</div>
		</div>
	);
};
