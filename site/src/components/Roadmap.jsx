import React from 'react';
import movieDaoImg from '../assets/images/IMG_0594.jpeg';

const Roadmap = () => {
	{
		/* <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-roadmap">
		<div
			className="flex flex-col md:p-12 py-12 px-4 items-center justify-center w-7/12"
			data-aos="zoom-out-left"
			data-aos-duration="1500"
			id="Roadmap"
		>
			<h3 className="text-white text-5xl text-center my-2 font-semibold text-secondary-gradient">
				Roadmap
			</h3>
			<p className="text-white text-center my-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ea
				molestiae, amet dolore error ducimus qui, provident et illo
				consectetur cupiditate cum nobis repellat a? Ut, dolorem? Quos eaque
				possimus quasi dolores?
			</p>
			<a
				href="https://docs.mediamonkeys.xyz/internal-wiki/roadmap"
				target="_blank"
				rel="noreferrer"
			>
				<button
					type="button"
					className="flex flex-row justify-center items-center my-[1.28rem] bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
				>
					<p className="text-white text-base font-semibold">Our Roadmap</p>
				</button>
			</a>
		</div>
	</div> */
	}
	return (
		// <!-- component -->
		<div className="antialiased gradient-bg-roadmap text-white md:p-12 py-12 px-4">
			<h3 className="text-white text-5xl text-center mb-8 font-semibold text-secondary-gradient">
				Roadmap
			</h3>
			<div className="relative container mx-auto px-6 flex flex-col space-y-8">
				<div className="absolute z-0 w-2 h-full blue-glassmorphism shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
				<div className="relative z-10">
					<img src={movieDaoImg} alt="" className="timeline-img" />
					<div className="timeline-container">
						<div className="timeline-pointer" aria-hidden="true"></div>
						<div className="blue-glassmorphism p-6 rounded-md shadow-md">
							<span className="font-bold text-indigo-600 text-sm tracking-wide">
								Feb 2022
							</span>
							<h1 className="text-2xl font-bold pt-1">Website Launch</h1>
							<p className="pt-1">
								Whitepaper covering the governance and core values $MSDAO token
								launch on the Polygon Network Airdrop to key contributors, core
								members & early adopters
							</p>
						</div>
					</div>
				</div>
				<div className="relative z-10">
					<img src={movieDaoImg} alt="" className="timeline-img" />
					<div className="timeline-container timeline-container-left">
						<div
							className="timeline-pointer timeline-pointer-left"
							aria-hidden="true"
						></div>
						<div className="blue-glassmorphism p-6 rounded-md shadow-md">
							<span className="font-bold text-indigo-600 text-sm tracking-wide">
								Q2 2022
							</span>
							<h1 className="text-2xl font-bold pt-1">NFT Launch </h1>
							<p className="pt-1">
								Community voting enabled for both NFT and Token Holders Calls
								for screenplay submissions Begin community voting on screenplay
								submissions
							</p>
						</div>
					</div>
				</div>
				<div className="relative z-10">
					<img src={movieDaoImg} alt="" className="timeline-img" />
					<div className="timeline-container">
						<div className="timeline-pointer" aria-hidden="true"></div>
						<div className="blue-glassmorphism p-6 rounded-md shadow-md">
							<span className="font-bold text-indigo-600 text-sm tracking-wide">
								Q3 2022
							</span>
							<h1 className="text-2xl font-bold pt-1">
								Greenlight the first project for production
							</h1>
							<p className="pt-1">
								Commencement of pre-production with shooting planned for Q3-Q4
								2022 Special celebrations to reward all our NFT holders
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
