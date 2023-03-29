import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formGrid, inputClass, inputLabel, submitButton } from "./cssClasses";
import { errorMessage } from "./cssClasses";
import axios from "axios";
export const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(loginFormData);
    try {
      const response = await axios.post(
        "https://gitgoingslackbot.uc.r.appspot.com/api/auth/login",
        loginFormData
      );
      setError(null);
      navigate('/dashboard')
    } catch (err) {
      setError(err.response.data);
    } finally {
      setLoginFormData({
        email: "",
        password: "",
      });
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
              minLength="5"
              value={loginFormData.password}
            ></input>
          </div>
          <div className="flex items-center flex-col justify-center sm:col-span-2">
            {error ? <div className={errorMessage}>{error}</div> : null}
            <input
              type="submit"
              value="Login"
              className={submitButton}
              data-primary="black"
              data-rounded="rounded-full"
            />
          </div>
        </form>
        <Link
          to="/signup"
          className="underline text-blue-300 hover:text-blue-500 pt-3"
        >
          Don't Have an Account Yet?
        </Link>
      </div>
    </div>
  );
};
