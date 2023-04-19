import React from "react";
import { useSearchParams } from "react-router-dom";
import FAQ from "./FAQ";

const FAQPage = () => {
	const [query] = useSearchParams();
	const isInstalled:string = query.get("installed");

	return (
		<>
			{isInstalled ? (
				isInstalled === "successful" ? (
					<h2 className="mb-2 text-xl font-bold text-center md:text-3xl text-black dark:text-yellow-500 uppercase">
						You've successfully installed GitQuest!
						<br /> Read on for more info
					</h2>
				) : (
					<h2 className="mb-2 text-xl font-bold text-center md:text-3xl text-black dark:text-red-500 uppercase">
						GitQuest installation failed!
						<br /> Please contact us for help
					</h2>
				)
			) : null}
			<section className="py-24 bg-white dark:bg-gray-800 min-h-screen w-full">
				<div className="px-8 mx-auto lg:flex-row lg:max-w-[87rem] w-full lg:p-0">
					<h2 className="mb-2 text-xl font-bold text-center md:text-3xl text-black dark:text-gray-500 uppercase">
						The Quest for Answers:
					</h2>
					<p className="mb-2 text-l text-center md:text-xl text-black dark:text-gray-500">
						A Guide to Common FAQs
					</p>
					<div className="relative mt-12 space-y-5">
						<FAQ
							question="How to get started as a new GitQuest user?"
							answer={
								<ul className="ml-5">
									<li className="list-disc">
										Open the Slack workspace on which GitQuest has been
										installed by a company administrator.
									</li>
									<li className="list-disc">
										Checkout the GitQuest app in Slack (under “Apps”) and visit
										the Home tab. Here you will find buttons to view your
										profile, available quests, your achievements and more.
									</li>
									<li className="list-disc">
										As you work on the connected repositories, you’ll gain
										experience points and unlock achievements. Activity such as
										your number of commits made, pull requests, and quests
										completed all contribute to your rewards!
									</li>
									<li className="list-disc">
										Over time, your experience points will increase your player
										level…earning prestigious new titles, amassing gold and even
										getting gold to reward your teammates for their
										contributions! Check the “My Profile” button at any time for
										a summary of your stats.
									</li>
								</ul>
							}
						/>
						<FAQ
							question="How to get started as a Slack Workspace Administrator?"
							answer={
								<ul className="ml-5">
									<li className="list-disc">
										In your Slack workspace, visit the Apps section to add an
										app
									</li>
									<li className="list-disc">
										Search for “gitquest” and select it from the options
									</li>
									<li className="list-disc">
										Follow the prompts to authorize GitQuest with the necessary
										permissions
									</li>
									<li className="list-disc">
										Visit the GitQuest app in Slack to finish configuring your
										workspace and users. The simple click of a button will walk
										you through the easy steps!
									</li>
									<li>
										<ol className="ml-5">
											<li className="list-decimal ml-5">
												Set your organization name (this should match what is on
												GitHub)
											</li>
											<li className="list-decimal ml-5">
												Click the button to Connect to GitHub. This will
												authorize GitQuest to view information from GH.
											</li>
											<li className="list-decimal ml-5">
												Now, you can connect users (matches Slack user to GitHub
												user account) and select which repositories for GitQuest
												to track.
											</li>
										</ol>
									</li>

									<li className="list-disc">
										Your organization is ready to join the adventure! As an
										administrator, you can now Add Quests for your team to
										claim. Read more about Quests in our FAQ section.
									</li>
								</ul>
							}
						/>
						<FAQ
							question="What are Quests?"
							answer={
								<ul>
									<li className="list-disc">
										Users can complete quests to gain rewards! Quests are a fun
										way to transform team coding tasks and features into
										rewarding journeys. Much like a ticketing system, your
										organization’s admin can post a quest which will then be
										claimed by a user. Each quest will ultimately be tied to a
										pull request that is made. GitQuest reviews the
										corresponding metrics within that PR to award the user with
										experience points.
									</li>
								</ul>
							}
						/>
						<FAQ
							question="What are achievements?"
							answer={
								<ul>
									<li className="list-disc">
										There are a variety of achievements that can be reached by a
										user. Some examples include certain benchmark numbers of
										commits made or pull requests that have been closed and
										merged.
									</li>
								</ul>
							}
						/>
						<FAQ
							question="How can I use gold?"
							answer={
								<ul>
									<li className="list-disc">
										This can vary by organization. Companies may choose to view
										your gold as an exchangeable currency for real-world prizes!
										Remember, your player has a separate treasure chest of gold
										that is meant to be distributed as you choose. This “gold to
										give” can be awarded to players of your choosing. Whether
										you want to send a teammate a birthday gift or thank them
										for helping you on a project…it’s your choice!
									</li>
								</ul>
							}
						/>
						<FAQ
							question="How do I level up as a GitQuest player?"
							answer={
								<ul>
									<li className="list-disc">
										Your productivity within a GitHub repository yields a bounty
										of rewards. For example, every commit you make comes with
										experience points (XP). As your XP reaches certain
										thresholds, your player levels up! This increase in ranking
										can bring new titles, gold, and gold that you can give to
										other players (maybe another player helped you on a project,
										but didn’t necessarily put their name on the work!).
									</li>
								</ul>
							}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default FAQPage;
