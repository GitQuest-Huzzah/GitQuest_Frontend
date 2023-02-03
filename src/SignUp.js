import React from 'react';
import { Link } from 'react-router-dom';
import gqfavicon from './assets/gqfavicon.svg';

const SignUp = () => {
	return (
		<section className='py-20 bg-white dark:bg-gray-800 h-screen'>
			<div className='flex flex-col items-center justify-center mx-auto sm:p-3 xl:pb-4 xl:px-4 lg:max-w-[87rem] lg:p-0'>
				<div className='flex flex-col justify-center items-center space-y-8 w-3/4'>
					<img alt='gqfavicon' src={gqfavicon} className='w-auto h-64 shadow-2xl rounded-lg' />
					<h2 className='w-full mx-auto text-4xl font-extrabold leading-none text-left text-gray-900 sm:text-5xl md:text-7xl dark:text-gray-500'>
						Level Up your Slack Workspace with GitQuest!
					</h2>
					<p className='w-full mx-auto text-xl text-left text-gray-500 md:text-2xl'>
						Enter your email below and click "SIGN UP" to receive a step-by-step guide
						on how to install our bot and start transforming your Slack Workspace
						today!
					</p>

					<div className='flex flex-row w-full mx-auto space-y-5 md:space-y-0 md:space-x-5'>
						<input
							type='text'
							className='flex-1 w-1/2 px-5 py-5 text-2xl bg-gray-200 border border-gray-300 rounded-full focus:ring-4 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none'
							data-primary='black'
							data-rounded='rounded-lg'
							placeholder='Email Address'
						/>
						<Link
							to='/thankyou'
							className='flex-shrink-0 px-10 py-5 text-2xl font-xl text-center text-white bg-black dark:bg-gray-600 rounded-full focus:ring-4 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none'
							data-primary='black'
							data-rounded='rounded-lg'
							onClick={() => console.log('signup')}>
							SIGN UP
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
