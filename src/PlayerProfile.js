import React, { useState, useEffect } from 'react';
import scroll from './assets/namescroll.svg';
import goldshield from './assets/goldshield.svg';
import lvlshield from './assets/lvlshield.svg';
import rewardgold from './assets/rewardgold.svg';
import background from './assets/stonebackground.svg';
import xpshield from './assets/xpshield.svg';

export const PlayerProfile = ({ user, gold, reward, xp, level, rank }) => {
	const [fontSize, setFontSize] = useState('');

	useEffect(() => {
		const fontSizeClasses = [
			'text-5xl',
			'text-4xl',
			'text-3xl',
			'text-2xl',
			'text-xl',
			'text-lg',
			'text-base',
			'text-sm',
			'text-xs',
			'text-xs truncate',
		];
		const limits = [6, 7, 9, 11, 14, 15, 17, 20, 23, Infinity];

		setFontSize(
			fontSizeClasses[limits.findIndex((limit) => user.length <= limit)]
		);
	}, [user]);
	return (
		<div className='flex justify-center items-center w-[26rem] h-fit'>
			<img
				src={background}
				className='h-[31rem] w-auto mx-auto text-4xl text-center font-extrabold p-auto flex justify-center items-center object-cover'
				alt='background for profile'></img>
			<div className='absolute w-[auto] h-[30rem] text-4xl text-center font-extrabold uppercase flex flex-col items-center justify-around'>
				{/* <div>Player Profile</div> */}
				<div className='relative'>
					<img
						src={scroll}
						className='h-auto w-80 mx-auto mt-5 text-4xl text-center font-extrabold p-auto flex justify-center items-center'
						alt='xpshield'></img>
					<div className='text-3xl absolute h-fit w-56 top-14 left-[46px] right-0 bottom-0 flex flex-col justify-around divide-y-2 divide-black'>
						<div
							className={`${fontSize} p-1 font-doom tracking-widest`}>
							{user}
						</div>
						<div className='text-2xl p-1 font-medieval tracking-widest'>{rank}</div>
					</div>
				</div>
				<div className='flex gap-4'>
					<div className='relative '>
						<img
							src={lvlshield}
							className='h-36 w-36 mx-auto text-4xl text-center font-extrabold p-auto flex justify-center items-center'
							alt='xpshield'></img>
						<div className='text-3xl absolute text-yellow-400 top-16 left-0 right-0 bottom-0  font-medieval tracking-widest'>
							{level}
						</div>
					</div>
					<div className='relative'>
						<img
							src={goldshield}
							className='h-36 w-36 mx-auto text-4xl text-center font-extrabold p-auto flex justify-center items-center'
							alt='xpshield'></img>
						<div className='text-3xl absolute text-yellow-400 top-16 left-0 right-0 bottom-0 font-medieval tracking-widest'>
							{gold}
						</div>
					</div>
				</div>
				<div className='flex  gap-4'>
					<div className='relative'>
						<img
							src={xpshield}
							className='h-36 w-36 mx-auto text-4xl text-center font-extrabold p-auto flex justify-center items-center'
							alt='xpshield'></img>
						<div className='text-3xl absolute text-yellow-400 top-16 left-0 right-0 bottom-0 font-medieval tracking-widest'>
							{xp}
						</div>
					</div>
					<div className='relative'>
						<img
							src={rewardgold}
							className='h-36 w-36 mx-auto text-4xl text-center font-extrabold p-auto flex justify-center items-center'
							alt='xpshield'></img>
						<div className='text-3xl absolute text-yellow-400 top-16 left-0 right-0 bottom-0 font-medieval tracking-widest'>
							{reward}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};