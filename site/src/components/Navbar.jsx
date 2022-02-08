import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { FaDiscord } from 'react-icons/fa';

const NavBarItem = ({ title, classprops, to }) => (
	<li
		className={`mx-4 cursor-pointer ${classprops} font-bold text-gray-200 hover-underline-animation`}
	>
		<Link smooth={true} duration={1000} to={to}>
			{title}
		</Link>
	</li>
);

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className="w-full flex md:justify-center justify-between p-4 items-center">
			<div className="text-white md:flex-[0.5]  flex-initial justify-center items-center">
				<div className="flex items-center">
					<p className="text-2xl mr-2 font-bold text-logo">Movie Studio DAO</p>
				</div>
			</div>
			<ul className="text-white md:flex hidden list-none justify-between items-center flex-initial">
				{['Mission', 'Roadmap', 'Goals', 'Nfts'].map((item, index) => (
					<NavBarItem key={item + index} title={item} to={item} />
				))}
				<li>
					<a
						href="https://discord.gg/vyXvJ92x"
						target="_blank"
						rel="noreferrer"
					>
						<button
							type="button"
							className="flex flex-row justify-center items-center bg-[#2952e3] p-2 rounded-full cursor-pointer hover:bg-[#2546bd] ml-1"
						>
							<FaDiscord className="text-white mr-2" />
							<p className="text-white text-base font-semibold">Join Discord</p>
						</button>
					</a>
				</li>
			</ul>
			<div className="flex relative">
				{toggleMenu ? (
					<AiOutlineClose
						fontSize={28}
						className="text-white md:hidden cursor-pointer"
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<HiMenuAlt4
						fontSize={28}
						className="text-white md:hidden cursor-pointer"
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<ul
						className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
				flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
					>
						<li className="text-xl w-full my-2">
							<AiOutlineClose onClick={() => setToggleMenu(false)} />
						</li>
						{['Mission', 'Roadmap', 'Goals', 'Nfts'].map((item, index) => (
							<NavBarItem
								key={item + index}
								title={item}
								to={item}
								classprops="my-2 text-lg"
							/>
						))}
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
