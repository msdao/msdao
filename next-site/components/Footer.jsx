import React from 'react';
import {
	SiDiscord,
	SiInstagram,
	SiTwitter,
	SiReddit,
	SiTelegram,
} from 'react-icons/si';
import { Link } from 'react-scroll';
import * as ga from '../lib/googleAnalytics';

const Footer = () => (
	<div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
		<div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
			<div className="flex flex-[0.5] justify-center items-center">
				<div className="flex items-center text-white space-x-3">
					<img
						src={'/assets/images/msdaoLogo.png'}
						alt="logo"
						className="w-11 rounded-full"
					/>
					<p className="text-2xl mr-2 font-bold text-logo cursor-pointer">
						<Link to="Home" smooth={true} duration={1000}>
							Movie Studio DAO
						</Link>
					</p>
				</div>
			</div>
			<div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
				<p className="text-gray-200 text-base text-center mx-2 cursor-pointer font-bold hover-underline-animation">
					<Link to="Mission" smooth={true} duration={1000}>
						Mission
					</Link>
				</p>
				<p className="text-gray-200 text-base text-center mx-2 cursor-pointer font-bold hover-underline-animation">
					<Link to="Mission" smooth={true} duration={1000}>
						Roadmap
					</Link>
				</p>
				<p className="text-gray-200 text-base text-center mx-2 cursor-pointer font-bold hover-underline-animation">
					<Link to="Goals" smooth={true} duration={1000}>
						Goals
					</Link>
				</p>
				<p className="text-gray-200 text-base text-center mx-2 cursor-pointer font-bold hover-underline-animation">
					<Link to="Nfts" smooth={true} duration={1000}>
						Nfts
					</Link>
				</p>
			</div>
		</div>
		<div className="flex justify-center items-center flex-col mt-5">
			{/* <p className="text-white text-lg text-center">		</p> */}
			<div className="flex space-x-4 mt-3">
				<a
					href="https://discord.gg/nwc8ytv4Z9"
					className="text-xl hover:bg-[#7289DA] rounded-full hover:text-white transition-colors duration-300 inline-block p-1 text-[#7289DA]"
					target="_blank"
					rel="noreferrer"
					onClick={(e) =>
						ga.linkClick({
							target: {
								innerText: 'Discord',
								href: e.target.href,
							},
						})
					}
				>
					<SiDiscord className="text-2xl cursor-pointer" />
				</a>
				<a
					href="https://twitter.com/aMovieStudioDAO"
					className="text-xl hover:bg-[#1DA1F2] rounded-full text-[#1DA1F2] hover:text-white transition-colors duration-300 inline-block p-1 "
					target="_blank"
					rel="noreferrer"
					onClick={(e) =>
						ga.linkClick({
							target: {
								innerText: 'Twitter',
								href: e.target.href,
							},
						})
					}
				>
					<SiTwitter className="text-2xl cursor-pointer" />
				</a>
				<a
					href="https://www.reddit.com/r/msdao/"
					className="text-xl hover:bg-[#FF5700] rounded-full hover:text-white transition-colors duration-300 inline-block p-1 text-[#FF5700]"
					target="_blank"
					rel="noreferrer"
					onClick={(e) =>
						ga.linkClick({
							target: {
								innerText: 'Reddit',
								href: e.target.href,
							},
						})
					}
				>
					<SiReddit className="text-2xl cursor-pointer" />
				</a>
				<a
					href="https://www.instagram.com/moviestudiodao/"
					className="text-xl hover:bg-[#C13584] rounded-full hover:text-white transition-colors duration-300 inline-block p-1 text-[#C13584]"
					target="_blank"
					rel="noreferrer"
					onClick={(e) =>
						ga.linkClick({
							target: {
								innerText: 'Instagram',
								href: e.target.href,
							},
						})
					}
				>
					<SiInstagram className="text-2xl cursor-pointer" />
				</a>
				<a
					href="https://t.me/MovieStudioDAO"
					className="text-xl hover:bg-[#0088cc] rounded-full hover:text-white transition-colors duration-300 inline-block p-1 text-[#0088cc]"
					target="_blank"
					rel="noreferrer"
					onClick={(e) =>
						ga.linkClick({
							target: {
								innerText: 'Telegram',
								href: e.target.href,
							},
						})
					}
				>
					<SiTelegram className="text-2xl cursor-pointer" />
				</a>
			</div>
		</div>
		<div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
		<div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
			<p className="text-white text-left text-xs">
				<a
					href="https://twitter.com/aMovieStudioDAO"
					target={'_blank'}
					rel="noreferrer"
					onClick={(e) => ga.linkClick(e)}
				>
					@aMovieStudioDAO
				</a>
			</p>
			<p className="text-white text-right text-xs">All rights reserved</p>
		</div>
	</div>
);

export default Footer;
