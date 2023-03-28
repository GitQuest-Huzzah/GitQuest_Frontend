import React from "react";
import {  formGridOneColumn, inputClass, inputLabel, submitButton } from "./cssClasses";
export const SignUp = () => (
    <div className="py-10 bg-white md:py-16 dark:bg-gray-800 h-full">
        <div className="flex flex-col items-center justify-center mx-auto sm:p-3 xl:pb-4 xl:px-4 lg:max-w-[87rem] lg:p-0">
            <form className={formGridOneColumn}>
                <div>
                    <label htmlFor="email" className={inputLabel}>
                        Email
                    </label>
                    <input id='email' name="email" className={inputClass}></input>
                    <label htmlFor="password" className={inputLabel}>
                        Password
                    </label>
                    <input id='password' name="password" className={inputClass}></input>
                    <label htmlFor="retypepassword" className={inputLabel}>
                      Re-type Password
                    </label>
                    <input id='retypepassword' name="retypepassword" className={inputClass}></input>
                </div>
                <div className='flex items-center justify-center sm:col-span-2'>
                    <input
                        type="submit"
                        value="Sign Up"
                        className={submitButton}
                        data-primary='black'
                        data-rounded='rounded-full' />
                </div>
            </form>
        </div>
    </div>
);