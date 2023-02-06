import React from 'react';
import fanfare from './assets/fanfare.svg';

const About = () => {
	return (
		<section className='w-full py-12 bg-white dark:bg-gray-800 min-h-screen'>
			<div className='flex flex-col items-center justify-center mx-auto sm:p-3 xl:pb-4 xl:px-4 lg:max-w-[87rem] lg:p-0'>
				<div className='space-y-12'>
					<div className='w-full px-20 pb-10 flex flex-col justify-center'>
						<img alt='fanfare' src={fanfare} className='w-auto h-64 m-8' />
						<h2 className='relative m-8 text-4xl font-extrabold tracking-tight sm:text-5xl dark:text-gray-300 text-center'>
							Meet the GitQuest Team!
						</h2>
						<p className='text-xl text-gray-500 break-normal'>
							Welcome to the GitQuest team, where work and adventure collide! Our
							mission is to turn your GitHub data into an epic journey, unlocking the
							full potential of your Slack Workspace. We are a group of skilled
							innovative developers, who are constantly pushing the limits of what's
							possible. Together, we are a team of passionate adventurers, determined
							to make work more exciting and fun! We are dedicated to promoting
							collaboration, competition, and rewards. Join us on our quest to increase
							productivity and efficiency, and let's make work a little more fun! We
							can't wait to embark on this journey with you. Thank ye for choosing
							GitQuest, and we look forward to sharing our adventures with ye.
						</p>
					</div>
				</div>

				<section className='py-4 text-gray-900 bg-white dark:bg-gray-800 border-solid border-t box-border border-slate-100'>
					<div className='flex flex-wrap items-center justify-center flex-row p-8 text-gray-900 box-border w-full'>
						<div className='relative flex-wrap items-center justify-center my-8 mx-4 w-80 h-fit md:flex-none border border-gray-200 rounded-lg shadow-md'>
							<div className='flex flex-col items-center justify-center p-5'>
								<img
									className='w-full h-full mb-6 rounded-full'
									src='https://i.stack.imgur.com/frlIf.png'
									alt='profile pic'
								/>
								<h2 className='text-lg font-bold dark:text-gray-300'>
									Corbin Campbell
								</h2>
							</div>

							<div className='flex border-t border-gray-200 divide-x divide-gray-200'>
								<a
									href='https://github.com/HankC138'
									className='flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-10 h-10 mx-auto fill-current'
										viewBox='0 0 24 24'>
										<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'></path>
									</svg>
								</a>
								<a
									href='https://www.linkedin.com/in/corbin-campbell/'
									className='flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-10 h-10 mx-auto fill-current'
										viewBox='0 0 24 24'>
										<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'></path>
									</svg>
								</a>
							</div>
						</div>

						<div className='relative flex-none items-center justify-center my-8 mx-4 w-80 h-fit md:flex-none border border-gray-200 rounded-lg shadow-md'>
							<div className='flex flex-col items-center justify-center p-5'>
								<img
									className='w-full h-full mb-6 rounded-full'
									src='https://i.stack.imgur.com/frlIf.png'
									alt='profile pic'
								/>
								<h2 className='text-lg font-bold dark:text-gray-300'>Robert Boles</h2>
							</div>

							<div className='flex border-t border-gray-200 divide-x divide-gray-200'>
								<a
									href='https://github.com/bobbyboles'
									className='flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-10 h-10 mx-auto fill-current'
										viewBox='0 0 24 24'>
										<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'></path>
									</svg>
								</a>
								<a
									href='https://www.linkedin.com/in/robert-dale-boles/'
									className='flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-10 h-10 mx-auto fill-current'
										viewBox='0 0 24 24'>
										<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'></path>
									</svg>
								</a>
							</div>
						</div>

						<div className='relative flex-none items-center justify-center my-8 mx-4 w-80 h-fit md:flex-none border border-gray-200 rounded-lg shadow-md'>
							<div className='flex flex-col items-center justify-center p-5'>
								<img
									className='w-full h-full mb-6 rounded-full'
									src='https://i.stack.imgur.com/frlIf.png'
									alt='profile pic'
								/>
								<h2 className='text-lg font-bold dark:text-gray-300'>Taylor Race</h2>
							</div>

							<div className='flex border-t border-gray-200 divide-x divide-gray-200'>
								<a
									href='https://github.com/taylorrace'
									className='flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-10 h-10 mx-auto fill-current'
										viewBox='0 0 24 24'>
										<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'></path>
									</svg>
								</a>
								<a
									href='https://www.linkedin.com/in/taylor-race/'
									className='flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-10 h-10 mx-auto fill-current'
										viewBox='0 0 24 24'>
										<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'></path>
									</svg>
								</a>
							</div>
						</div>
					</div>

					<div className='flex flex-wrap items-center justify-center flex-row p-8 text-gray-900 box-border w-full'>
						<div className='relative flex-wrap items-center justify-center my-8 mx-4 w-80 h-fit md:flex-none border border-gray-200 rounded-lg shadow-md'>
							<div className='flex flex-col items-center justify-center p-5'>
								<img
									className='w-full h-full mb-6 rounded-full'
									src='https://i.stack.imgur.com/frlIf.png'
									alt='profile pic'
								/>
								<h2 className='text-lg font-bold dark:text-gray-300'>Ramon Marero</h2>
							</div>

							<div className='flex border-t border-gray-200 divide-x divide-gray-200'>
								<a
									href='https://github.com/Ray718'
									className='flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-10 h-10 mx-auto fill-current'
										viewBox='0 0 24 24'>
										<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'></path>
									</svg>
								</a>
								<a
									href='https://www.linkedin.com/in/rmm1234/'
									className='flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-10 h-10 mx-auto fill-current'
										viewBox='0 0 24 24'>
										<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'></path>
									</svg>
								</a>
							</div>
						</div>

						<div className='relative flex-none items-center justify-center my-8 mx-4 w-80 h-fit md:flex-none border border-gray-200 rounded-lg shadow-md'>
							<div className='flex flex-col items-center justify-center p-5'>
								<img
									className='w-full h-full mb-6 rounded-full'
									src='https://i.stack.imgur.com/frlIf.png'
									alt='profile pic'
								/>
								<h2 className='text-lg font-bold dark:text-gray-300'>Kevin Fang</h2>
							</div>

							<div className='flex border-t border-gray-200 divide-x divide-gray-200'>
								<a
									href='https://github.com/kevinqlfang'
									className='flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-10 h-10 mx-auto fill-current'
										viewBox='0 0 24 24'>
										<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'></path>
									</svg>
								</a>
								<a
									href='https://www.linkedin.com/in/kevinqlfang/'
									className='flex-1 block p-5 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-10 h-10 mx-auto fill-current'
										viewBox='0 0 24 24'>
										<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default About;
