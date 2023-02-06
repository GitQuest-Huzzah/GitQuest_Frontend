import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import gqfavicon from './assets/gqfavicon.svg';

const SignUp = () => {
    const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
        e.preventDefault();
		console.log(email);
	};
    
	return (
		<section className='py-20 bg-white dark:bg-gray-800 min-h-screen'>
			<div className='flex flex-col items-center justify-center mx-auto sm:p-3 xl:pb-4 xl:px-4 lg:max-w-[87rem] lg:p-0'>
				<div className='flex flex-col justify-center items-center space-y-8 w-3/4'>
					<img
						alt='gqfavicon'
						src={gqfavicon}
						className='w-auto h-64 shadow-2xl dark:shadow-none rounded-lg'
					/>
					<h2 className='w-full mx-auto text-4xl font-extrabold leading-none text-left text-gray-900 sm:text-5xl md:text-7xl dark:text-gray-500'>
						Level Up your Slack Workspace with GitQuest!
					</h2>
					<p className='w-full mx-auto text-xl text-left text-gray-500 md:text-2xl'>
						Enter your email below and click "SIGN UP" to receive a step-by-step guide
						on how to install our bot and start transforming your Slack Workspace
						today!
					</p>

					<form className='flex flex-wrap justify-center items-center flex-col w-full mx-auto'>
						<input
							type='text'
							className='flex min-w-full px-5 py-5 text-2xl bg-gray-200 border border-gray-300 rounded-full focus:ring-4 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none'
							data-primary='black'
							data-rounded='rounded-lg'
							placeholder='Email Address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
						/>
						<button>
							<Link
								to='/thankyou'
								className='w-40 inline-flex tracking-wide uppercase text-xl items-center m-8 justify-center px-5 py-2.5 font-semibold text-white bg-gray-800 dark:bg-gray-600 border border-transparent shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-white 2xl:rounded-full 2xl:border-transparent 2xl:bg-gray-800 rounded-full'
								data-primary='black'
								data-rounded='rounded-lg'
                                onClick={(e) => handleSubmit(e)}
								>
								SIGN UP
							</Link>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
