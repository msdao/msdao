import React from 'react';
import yNftImg from '../assets/images/yNft.png';
import gNftImg from '../assets/images/gNft.png';
import grNftImg from '../assets/images/grNft.png';
import tNftImg from '../assets/images/tNft.png';
import pNftImg from '../assets/images/pNft.png';
import vNftImg from '../assets/images/vNft.png';

const NftCard = ({ imgSrc }) => {
	return (
		<div
			className="blue-glassmorphism m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
			data-aos="flip-down"
			data-aos-duration="1000"
		>
			<div className="flex flex-col items-center w-full mt-3">
				<img
					src={imgSrc}
					alt="nature"
					className="w-full rounded-md shadow-lg object-cover"
				/>
			</div>
		</div>
	);
};

const Nfts = () => {
	return (
		<div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
			<div className="flex flex-col md:p-12 py-12 px-4" id="Nfts">
				<h3
					className="text-white text-5xl text-center my-2 text-secondary-gradient"
					data-aos="zoom-in"
					data-aos-duration="1000"
				>
					Our Nfts
				</h3>
				<div className="flex flex-wrap justify-center items-center mt-10">
					{[yNftImg, gNftImg, grNftImg, vNftImg, pNftImg, tNftImg].map(
						(img, i) => (
							<NftCard imgSrc={img} key={i + img} />
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Nfts;
