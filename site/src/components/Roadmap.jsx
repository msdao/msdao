import React from 'react';

const Roadmap = () => {
	return (
		<div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-roadmap">
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
		</div>
	);
};

export default Roadmap;
