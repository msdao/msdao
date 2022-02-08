import React from 'react';

const Mission = () => {
	return (
		<div
			className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-missions"
			id="Mission"
		>
			<div
				className="flex flex-col md:p-12 py-12 px-4 items-center justify-center w-7/12"
				data-aos="zoom-out-right"
				data-aos-duration="1000"
			>
				<h3 className="text-white text-5xl text-center my-2 font-semibold text-secondary-gradient">
					Mission
				</h3>
				<p className="text-white text-center my-3">
					Movie Studio DAO's mission is to become a community-run film studio
					which finances and produces films from talented creatives overlooked
					by the big *ollywood studio machines. The community will vote on which
					scripts to produce, hire filmmakers based on their vision and talent
					(and not their connections), and tell the stories that otherwise go
					untold.
				</p>
				<a
					href="https://docs.mediamonkeys.xyz/internal-wiki/movie-studio-dao-msdao/mission"
					target="_blank"
					rel="noreferrer"
				>
					<button
						type="button"
						className="flex flex-row justify-center items-center my-[1.28rem] bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
					>
						<p className="text-white text-base font-semibold">Our Mission</p>
					</button>
				</a>
			</div>
		</div>
	);
};

export default Mission;
