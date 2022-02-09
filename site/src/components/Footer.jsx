import React from 'react';
import {
	SiDiscord,
	SiInstagram,
	SiTwitter,
	SiReddit,
	SiTelegram,
} from 'react-icons/si';
import { Link } from 'react-scroll';
const Footer = () => (
	<div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
		<div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
			<div className="flex flex-[0.5] justify-center items-center">
				<div className="flex items-center text-white">
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
			<p className="text-white text-lg text-center">
				Come join us and hear for the unexpected miracle
			</p>
			<div className="flex space-x-4 mt-3">
				<a
					href="https://discord.gg/vyXvJ92x"
					className="text-xl hover:bg-[#7289DA] rounded-full hover:text-white transition-colors duration-300 inline-block p-1 text-[#7289DA]"
					target="_blank"
					rel="noreferrer"
				>
					<SiDiscord className="text-2xl cursor-pointer" />
				</a>
				<a
					href="https://twitter.com/aMovieStudioDAO"
					className="text-xl hover:bg-[#1DA1F2] rounded-full text-[#1DA1F2] hover:text-white transition-colors duration-300 inline-block p-1 "
					target="_blank"
					rel="noreferrer"
				>
					<SiTwitter className="text-2xl cursor-pointer" />
				</a>
				<a
					href="https://www.reddit.com/r/msdao/"
					className="text-xl hover:bg-[#FF5700] rounded-full hover:text-white transition-colors duration-300 inline-block p-1 text-[#FF5700]"
					target="_blank"
					rel="noreferrer"
				>
					<SiReddit className="text-2xl cursor-pointer" />
				</a>
				<a
					href="https://www.instagram.com/moviestudiodao/"
					className="text-xl hover:bg-[#C13584] rounded-full hover:text-white transition-colors duration-300 inline-block p-1 text-[#C13584]"
					target="_blank"
					rel="noreferrer"
				>
					<SiInstagram className="text-2xl cursor-pointer" />
				</a>
				<a
					href="https://t.me/MovieStudioDAO"
					className="text-xl hover:bg-[#0088cc] rounded-full hover:text-white transition-colors duration-300 inline-block p-1 text-[#0088cc]"
					target="_blank"
					rel="noreferrer"
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
				>
					@aMovieStudioDAO
				</a>
			</p>
			<p className="text-white text-right text-xs">All rights reserved</p>
		</div>
	</div>
);

export default Footer;
