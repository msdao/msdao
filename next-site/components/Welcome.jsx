import React from 'react';
import { IoNewspaperOutline } from 'react-icons/io5';
import * as ga from '../lib/googleAnalytics';

const Welcome = () => {
	return (
		<div className="flex w-full justify-center items-center mg:h-[85vh]">
			<div className="flex mg:flex-row flex-col items-center justify-center xl:p-20 py-12 px-4">
				<div
					className="flex flex-1 justify-center items-center mg:items-start flex-col md:mr-10"
					data-aos="fade-right"
					data-aos-once="true"
					data-aos-duration="1000"
				>
					<h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 font-semibold sm:leading-[58px] text-center mg:text-left">
						World’s first crypto <br /> native, decentralized
						<br /> Movie Studio
					</h1>
					<p className="mt-3 sm:mt-3  text-white md:w-11/12 w-11/12 font-light text-xl leading-7 text-center mg:text-left">
						An open source, transparent community of filmmakers, entertainment
						professionals, developers and entrepreneurs who will leverage the
						power of Web3 to produce entertaining and thought-provoking movies
						outside of the traditional studio machines such as Hollywood and
						Bollywood
					</p>

					<a
						href="https://docs.moviestudiodao.xyz/internal-wiki/"
						target="_blank"
						rel="noreferrer"
						onClick={(e) => ga.linkClick(e)}
					>
						<button
							type="button"
							className="flex flex-row justify-center items-center my-[1.28rem] bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
						>
							<IoNewspaperOutline className="text-white mr-2" />
							<p className="text-white text-base font-semibold">Whitepaper</p>
						</button>
					</a>
				</div>
				<video
					autoPlay
					loop
					muted
					width="650px"
					height="650px"
					className="mg:self-start mt-8 mg:mt-0"
					data-aos="fade-left"
					data-aos-once="true"
					data-aos-duration="1000"
					poster={'/assets/images/fallBack3dNft.png'}
				>
					<source src={'/assets/videos/3dNftC.webm'} type="video/webm" />
				</video>
			</div>
		</div>
	);
};

export default Welcome;
