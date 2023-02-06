import React from 'react';
import { Link } from 'react-router-dom';
import diamond from './assets/diamond.svg';

const Thanks = () => {
	return (
		<section className='relative w-full bg-white dark:bg-gray-800 h-screen'>
			<div className='flex flex-col items-center justify-center mx-auto sm:p-3 xl:pb-4 xl:px-4 lg:flex-row lg:max-w-[87rem] w-[85%] lg:p-0'>
				<div className='w-full'>
					<h1 className='text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl dark:text-gray-500'>
						Thank ye, adventurer!
					</h1>
					<p className='mt-8 text-xl text-gray-500'>
						Your quest with GitQuest has taken another step forward. We're grateful
						for your trust in us and can't wait to see where your journey takes ye.
						Our friendly support knights are always here to aid you, so don't hesitate
						to reach out if ye have any questions or concerns.
					</p>
					<p className='my-8 text-xl text-gray-500'>
						Onward and upward, adventurer! Your GitQuest awaits.
					</p>
					<Link
						to='/home'
						className='px-8 py-4 inline-flex tracking-wide uppercase text-xl items-center sm:mt-0 mt-5 justify-center font-semibold text-white bg-gray-800 dark:bg-gray-600 border border-transparent shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 2xl:rounded-full 2xl:border-transparent 2xl:bg-gray-800 rounded-full'>
						RETURN HOME
					</Link>
				</div>
				<div className='w-full h-96 sm:w-3/4 lg:w-auto lg:mt-0 mt-20 px-20 flex justify-center'>
					<img src={diamond} className='' alt='diamond'/>
				</div>
			</div>
		</section>
	);
};

export default Thanks;
