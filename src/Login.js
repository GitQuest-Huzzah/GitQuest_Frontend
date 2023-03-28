import React from "react";
import { Link } from "react-router-dom";
import { formGrid, inputClass, inputLabel, submitButton } from "./cssClasses";
export const Login = () => (
    <div className="py-10 bg-white md:py-16 dark:bg-gray-800 h-full">
        <div className="flex flex-col items-center justify-center mx-auto sm:p-3 xl:pb-4 xl:px-4 lg:max-w-[87rem] lg:p-0">
            <form className={formGrid}>
                <div>
                    <label htmlFor="email" className={inputLabel}>
                        Email
                    </label>
                    <input id='email' name="email" className={inputClass}></input>
                </div>
                <div>
                    <label htmlFor="password" className={inputLabel}>
                        Password
                    </label>
                    <input id='password' name="password" className={inputClass}></input>
                </div>
                <div className='flex items-center justify-center sm:col-span-2'>
                    <input
                        type="submit"
                        value="Login"
                        className={submitButton}
                        data-primary='black'
                        data-rounded='rounded-full' />
                </div>
            </form>
            <Link to='/signup' className="underline hover:text-blue-500 pt-3">Don't Have an Account?</Link>
        </div>
    </div>
);
