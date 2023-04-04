import React from "react";
import { Link } from "react-router-dom";
import productivity from "./assets/productivity.svg";
import teamwork from "./assets/teamwork.svg";
import collaboration from "./assets/collaboration.svg";
import integration from "./assets/integration.svg";
import gqbanner from "./assets/gqbanner.svg";

const Home = () => {
	return (
		<div className="dark:bg-gray-800">
			<section className="relative flex flex-col items-center justify-center w-full px-6 pb-6 bg-white dark:bg-gray-800 bg-cover">
				<div className="flex flex-col items-center justify-center mx-auto sm:p-3 xl:pb-4 xl:px-4 lg:flex-row lg:max-w-[87rem] w-full lg:p-0">
					<div className="container relative z-20 flex flex-col justify-center items-center w-full pb-1 mb-16 text-2xl text-gray-700 lg:w-full  sm:items-center lg:items-start lg:mb-0">
						<h1
							className="relative z-20 text-5xl my-8 font-extrabold leading-none xl:text-6xl sm:text-center lg:text-left"
							data-primary="purple-500"
						>
							<span className="mt-1 text-gray-800 dark:text-gray-500 lg:mt-0">
								Join the Adventure with GitQuest - Your GitHub Companion!
							</span>
						</h1>
						<div className="relative w-full px-5 my-8 rounded-lg cursor-pointer lg:w-full group xl:px-0">
							<div
								className="relative overflow-hidden rounded-lg shadow-2xl cursor-pointer group"
								data-rounded="rounded-md"
								data-rounded-max="rounded-full"
							>
								<img
									src={gqbanner}
									className="z-10 object-cover w-full h-full"
									alt="git quest banner"
								/>
							</div>
						</div>
						<p className="relative z-20 block mt-6 my-8 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">
							Set sail on an epic journey with GitQuest and transform your work
							experience! Our user-friendly bot transforms your GitHub data into
							a thrilling adventure, unlocking the full potential of your Slack
							Workspace. With GitQuest, you'll embark on a competitive quest,
							promoting collaboration and rewarding users. Say goodbye to dull
							work and hello to increased productivity and efficiency.
						</p>
						<div className="relative flex mt-4">
							<Link
								to="/install"
								className="flex items-center self-start justify-center px-5 py-2.5 mt-5 text-xl leading-tight text-white transition duration-150 ease-in-out bg-black dark:bg-gray-600 border border-transparent rounded-full shadow lg:py-4 hover:bg-black focus:outline-none focus:border-black focus:shadow-outline-black md:text-lg xl:text-xl md:px-5 xl:px-10 xl:bg-black font-semibold uppercase "
								data-primary="black"
								data-rounded="rounded-full"
							>
								join the adventure
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="pt-12 pb-8 leading-7 text-gray-900 bg-white dark:bg-gray-800 border-b border-solid md:pt-6 md:pb-12 box-border border-slate-100 2xl:pb-8">
				<div className="relative px-4 mx-1 w-full text-gray-900 box-border">
					<div className="flex flex-wrap items-center justify-center flex-row p-8 min-w-[18rem] max-md:max-w-[720px]">
						<div className="relative flex-none items-center justify-center px-5 py-5 my-8 mx-4 w-[20rem] h-[34rem] md:flex-none box-border border-solid border-2 border-gray-400 rounded-3xl">
							<div className="mb-3 flex justify-center">
								<img
									className="w-64 h-64 rounded-full border-2 bg-[#A3CFA7] border-gray-400 dark:border-white"
									src={teamwork}
									alt="teamwork"
								/>
							</div>
							<h3 className="mt-0 mb-2 text-xl tracking-normal box-border text-center font-semibold dark:text-gray-500">
								{" "}
								Boosts Team Motivation{" "}
							</h3>
							<p className="mt-0 mb-8 md:mb-0 box-border text-slate-400">
								{" "}
								Unleash the Power of Motivation with GitQuest! Our quest rewards
								your team's bravery with redeemable prizes, inspiring them to
								reach new heights and tackle each task with determination.{" "}
							</p>
						</div>
						<div className="relative flex-none items-center justify-center px-5 py-5 my-8 mx-4  w-[20rem] h-[34rem] md:flex-none box-border border-solid border-2 border-gray-400 rounded-3xl">
							<div className="mb-3 flex justify-center">
								<img
									className="w-64 h-64 rounded-full border-2 border-gray-400 dark:border-white"
									src={productivity}
									alt="productivity"
								/>
							</div>
							<h3 className="mt-0 mb-2 text-xl tracking-normal box-border text-center font-semibold dark:text-gray-500">
								{" "}
								Improves Productivity{" "}
							</h3>
							<p className="mt-0 mb-8 md:mb-0 box-border text-gray-400">
								{" "}
								Transform Work into Adventure with GitQuest! Our quest
								transforms mundane tasks into exciting challenges, spurring your
								team to work harder and more efficiently as they strive for
								glory.{" "}
							</p>
						</div>
						<div className="relative flex-none items-center justify-center px-5 py-5 my-8 mx-4  w-[20rem] h-[34rem] md:flex-none box-border border-solid border-2 border-gray-400 rounded-3xl">
							<div className="mb-3 flex justify-center">
								<img
									className="w-64 h-64 rounded-full border-2 border-gray-400 dark:border-white"
									src={collaboration}
									alt="collaboration"
								/>
							</div>
							<h3 className="mt-0 mb-2 text-xl tracking-normal box-border text-center font-semibold dark:text-gray-500">
								{" "}
								Enhances Collaboration{" "}
							</h3>
							<p className="my-0 box-border text-slate-400">
								{" "}
								We inspire collaboration among your brave adventurers by
								providing a shared quest, where teamwork and collaboration are
								rewarded with treasures beyond measure. Join forces and conquer
								your work like never before!{" "}
							</p>
						</div>
						<div className="relative flex-none items-center justify-center px-5 py-5 my-8 mx-4  w-[20rem] h-[34rem] md:flex-none box-border border-solid border-2 border-gray-400 rounded-3xl">
							<div className="mb-3 flex justify-center">
								<img
									className="w-64 h-64 rounded-full border-2 border-gray-400 dark:border-white"
									src={integration}
									alt="integration"
								/>
							</div>
							<h3 className="mt-0 mb-2 text-xl tracking-normal box-border text-center font-semibold dark:text-gray-500">
								{" "}
								Easy Integration{" "}
							</h3>
							<p className="my-0 box-border text-slate-400">
								{" "}
								GitQuest seamlessly blends into your existing Slack workspace,
								with nary a disturbance to your questing routine! Our
								integration is a smooth and effortless process, allowing ye and
								your team to embark on your adventure in no time!{" "}
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
