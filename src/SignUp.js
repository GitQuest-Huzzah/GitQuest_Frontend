import React, { useState } from "react";
import {
	formGridOneColumn,
	inputClass,
	inputLabel,
	submitButton,
} from "./cssClasses";
import axios from "axios"
export const SignUp = () => {
	const [signUpFormData, setSignUpFormData] = useState({
		email: "",
		password: "",
		duplicatePassword: "",
	});
	const updateSignUpFormData = (event) => {
		const keyToUpdate = event.target.name;
		setSignUpFormData((currentInfo) => ({
			...currentInfo,
			[keyToUpdate]: event.target.value,
		}));
        console.log(signUpFormData)
	};
	const handleSubmit = (event) => {
		axios.post(
			"https://gitgoingslackbot.uc.r.appspot.com/api/auth/signup",
			signUpFormData
		);
		event.preventDefault();
		setSignUpFormData({
			email: "",
			password: "",
			duplicatePassword: "",
		});
	};
	return (
		<div className="py-10 bg-white md:py-16 dark:bg-gray-800 h-full">
			<div className="flex flex-col items-center justify-center mx-auto sm:p-3 xl:pb-4 xl:px-4 lg:max-w-[87rem] lg:p-0">
				<form className={formGridOneColumn} onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email" className={inputLabel}>
							Email
						</label>
						<input
							id="email"
							name="email"
							className={inputClass}
							onChange={updateSignUpFormData}
							value={signUpFormData.email}
						></input>
						<label htmlFor="password" className={inputLabel}>
							Password
						</label>
						<input
							id="password"
							name="password"
							className={inputClass}
							onChange={updateSignUpFormData}
							value={signUpFormData.password}
						></input>
						<label htmlFor="retypepassword" className={inputLabel}>
							Re-type Password
						</label>
						<input
							id="duplicatepassword"
							name="duplicatePassword"
							className={inputClass}
							onChange={updateSignUpFormData}
							value={signUpFormData.duplicatePassword}
						></input>
					</div>
					<div className="flex items-center justify-center sm:col-span-2">
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
