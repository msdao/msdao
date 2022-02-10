import React from 'react';
import movieDaoImg from '../assets/images/clapboard.png';

const Roadmap = () => {
	return (
		<div className="antialiased gradient-bg-roadmap text-white md:p-12 py-12 px-4">
			<h3
				className="text-white text-5xl text-center mb-8 font-semibold text-secondary-gradient"
				data-aos="zoom-in"
				data-aos-duration="1500"
				id="Roadmap"
			>
				Roadmap
			</h3>
			<div className="relative container mx-auto px-6 flex flex-col space-y-8">
				<div className="absolute z-0 w-2 h-full blue-timeline-glassmorphism shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
				<div
					className="relative z-10"
					data-aos="fade-left"
					data-aos-duration="1250"
				>
					<img src={movieDaoImg} alt="" className="timeline-img" />
					<div className="timeline-container">
						<div className="timeline-pointer" aria-hidden="true"></div>
						<div className="blue-glassmorphism p-6 rounded-md shadow-md">
							<span className="font-bold text-indigo-600 text-sm tracking-wide">
								Q1 2022
							</span>
							<h1 className="text-2xl font-bold pt-1">Website Launch</h1>
							<ul className="list-disc ml-4 pt-1">
								<li>Whitepaper covering the governance and core values.</li>
								<li>$MSDAO token launch on the Polygon Network.</li>
								<li>
									Airdrop to key contributors, core members & early adopters.
								</li>
							</ul>
							{/* <p className="pt-1">
								Whitepaper covering the governance and core values $MSDAO token
								launch on the Polygon Network Airdrop to key contributors, core
								members & early adopters
							</p> */}
						</div>
					</div>
				</div>
				<div
					className="relative z-10"
					data-aos="fade-right"
					data-aos-duration="1250"
				>
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
							<ul className="list-disc ml-4 pt-1">
								<li>
									Community voting enabled for both NFT and Token Holders.
								</li>
								<li>Calls for screenplay submissions.</li>
								<li>Begin community voting on screenplay submissions.</li>
							</ul>
							{/* <p className="pt-1">
								Community voting enabled for both NFT and Token Holders Calls
								for screenplay submissions Begin community voting on screenplay
								submissions
							</p> */}
						</div>
					</div>
				</div>
				<div
					className="relative z-10"
					data-aos="fade-left"
					data-aos-duration="1250"
				>
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
							<ul className="list-disc ml-4 pt-1">
								<li>Greenlight the first project for production.</li>
								<li>
									Commencement of pre-production with shooting planned for Q3-Q4
									2022.
								</li>
								<li>Special celebrations to reward all our NFT holders.</li>
							</ul>
							{/* <p className="pt-1">
								Commencement of pre-production with shooting planned for Q3-Q4
								2022 Special celebrations to reward all our NFT holders
							</p> */}
						</div>
					</div>
				</div>
				<div
					className="relative z-10"
					data-aos="fade-right"
					data-aos-duration="1250"
				>
					<img src={movieDaoImg} alt="" className="timeline-img" />
					<div className="timeline-container timeline-container-left">
						<div
							className="timeline-pointer timeline-pointer-left"
							aria-hidden="true"
						></div>
						<div className="blue-glassmorphism p-6 rounded-md shadow-md">
							<span className="font-bold text-indigo-600 text-sm tracking-wide">
								Q4 2022
							</span>
							<h1 className="text-2xl font-bold pt-1">Parternship</h1>
							<ul className="list-disc ml-4 pt-1">
								<li>
									Partnerships with OTT players & other distribution platforms.
								</li>
								<li>Talks from industry experts & networking sessions .</li>
							</ul>
							{/* <p className="pt-1">
								Partnerships with OTT players & other distribution platforms
								Talks from industry experts & networking sessions
							</p> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
