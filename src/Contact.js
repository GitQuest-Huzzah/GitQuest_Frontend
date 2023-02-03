import React from 'react';
import { Link } from 'react-router-dom';
import scroll from './assets/scroll.svg';
import gqfavicon from './assets/gqfavicon.svg';

const Contact = () => {
	return (
		<div className='py-10 bg-white md:py-16 dark:bg-gray-800 h-full'>
			<div className='flex flex-col items-center justify-center mx-auto sm:p-3 xl:pb-4 xl:px-4 lg:max-w-[87rem] lg:p-0'>
				<div className='w-3/4 mx-auto mb-10 md:mb-16 flex flex-col items-center'>
					<img alt='gqfavicon' src={scroll} className='w-auto h-64' />
					<p className='text-6xl font-bold text-black uppercase dark:text-gray-500'>
						Contact Us
					</p>
					<div className='w-full mx-auto mt-4 text-left text-gray-500 md:text-lg md:mt-6'>
						We value your feedback and are always here to help. If you have any
						questions, concerns, or comments about our GitQuest bot and how it can
						enhance your Slack Workspace, please don't hesitate to reach out to us.
						<div>
							<br></br>
						</div>
						<div>
							Fill out our contact form and one of our friendly support representatives
							will get back to you as soon as possible. Thank you for choosing GitQuest
							and we look forward to assisting you!
						</div>
					</div>
				</div>
				<form className='grid w-3/4 gap-4 mx-auto sm:grid-cols-2'>
					<div>
						<label
							htmlFor='first-name'
							className='inline-block mb-2 text-xl font-medium text-gray-500 sm:text-base'>
							First name
						</label>
						<input
							name='first-name'
							className='w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-full outline-none bg-gray-50 focus:ring-4 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none'
						/>
					</div>

					<div className=''>
						<label
							htmlFor='last-name'
							className='inline-block mb-2 text-xl font-medium text-gray-500 sm:text-base'>
							Last name
						</label>
						<input
							name='last-name'
							className='w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-full outline-none bg-gray-50 focus:ring-4 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none'
						/>
					</div>

					<div className='sm:col-span-2'>
						<label
							htmlFor='email'
							className='inline-block mb-2 text-xl font-medium text-gray-500 sm:text-base'>
							Email
						</label>
						<input
							name='email'
							className='w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-full outline-none bg-gray-50 focus:ring-4 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none'
						/>
					</div>

					<div className='sm:col-span-2'>
						<label
							htmlFor='subject'
							className='inline-block mb-2 text-xl font-medium text-gray-500 sm:text-base'>
							Subject
						</label>
						<input
							name='subject'
							className='w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-full outline-none bg-gray-50 focus:ring-4 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none'
						/>
					</div>

					<div className='sm:col-span-2'>
						<label
							htmlFor='message'
							className='inline-block mb-2 text-xl font-medium text-gray-500 sm:text-base'>
							Message
						</label>
						<textarea
							name='message'
							className='w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-lg outline-none bg-gray-50 focus:ring-4 focus:ring-black dark:focus:ring-white focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none'></textarea>
					</div>
					<div className='flex items-center justify-center sm:col-span-2'>
						<Link
							to='/thankyou'
							className='inline-flex tracking-wide uppercase text-xl items-center sm:mt-0 mt-5 justify-center px-5 py-2.5 font-semibold text-white bg-gray-800 dark:bg-gray-600 border border-transparent shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 2xl:rounded-full 2xl:border-transparent 2xl:bg-gray-800 rounded-full'
							data-primary='black'
							data-rounded='rounded-full'>
							Submit
						</Link>
					</div>
				</form>
				<p className='w-3/4 mx-auto mt-5 text-xs text-gray-400'>
					Please allow up to 24-48 hour response. Thank you for choosing GitQuest and
					we look forward to assisting you!
				</p>
			</div>
		</div>
	);
};

export default Contact;
