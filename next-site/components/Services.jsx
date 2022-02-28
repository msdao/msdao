import React from 'react';
import { GrMoney } from 'react-icons/gr';
import { BiSearchAlt } from 'react-icons/bi';
import { MdBallot } from 'react-icons/md';

const ServiceCard = ({ color, title, icon, subtitle, duration }) => (
	<div
		className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl"
		data-aos="flip-right"
		data-aos-duration={duration}
	>
		<div
			className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
		>
			{icon}
		</div>
		<div className="ml-5 flex flex-col flex-1">
			<h3 className=" text-white text-lg">{title}</h3>
			<p className="my-1 text-white text-sm">{subtitle}</p>
		</div>
	</div>
);

const Services = () => (
	<div
		className="flex w-full justify-center items-center gradient-bg-services"
		id="Goals"
	>
		<div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
			<div
				className="flex-1 flex flex-col justify-start items-start"
				data-aos="fade-right"
				data-aos-duration={1000}
			>
				<h1 className="text-white text-3xl sm:text-5xl py-2 text-secondary-gradient sm:leading-[56px] text-center mf:text-left">
					Three things movie
					<br />
					studio will do
				</h1>
			</div>

			<div className="flex-1 flex flex-col justify-start items-center">
				<ServiceCard
					color="bg-yellow-400"
					title="Funding the movie"
					icon={<GrMoney fontSize={21} className="text-white" />}
					duration={1500}
					subtitle="Empowering the community to make movie production decisions which include voting on which script to produce, paying the screenwriter with treasury funds, where to hold the premiere etc."
				/>
				<ServiceCard
					color="bg-[#8945F8]"
					title="NFT membership and perks"
					icon={<BiSearchAlt fontSize={21} className="text-white" />}
					duration={2000}
					subtitle="NFT hodlers will not just hold membership, but will also be eligible to claim a benefit for each film produced by staking their NFT(s). The combined points values of the NFT(s) will determine the Perk that can be claimed "
				/>
				<ServiceCard
					color="bg-[#F84550]"
					title="DAO Governance "
					icon={<MdBallot fontSize={21} className="text-white" />}
					duration={2500}
					subtitle="Claim your governance and voting Rights in the DAO using unstaked NFT and the MSDAO token. Have a say in all key partnership and treasury decisions"
				/>
			</div>
		</div>
	</div>
);

export default Services;
