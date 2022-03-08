import React from 'react';
import { GrMoney } from 'react-icons/gr';
import { BiSearchAlt, BiCameraMovie, BiMoviePlay } from 'react-icons/bi';
import { MdBallot } from 'react-icons/md';
import { RiMovie2Fill } from 'react-icons/ri';

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
					{/* Three things movie
					<br />
					studio will do */}
					The MSDAO Ecosystem
				</h1>
			</div>

			<div className="flex-1 flex flex-col justify-start items-center">
				<ServiceCard
					color="bg-yellow-400"
					title="MSDAO Funding"
					icon={<GrMoney fontSize={21} className="text-white" />}
					duration={1500}
					subtitle="MSDAO Funding provides filmmakers and other creatives a platform for funding and community-building"
				/>
				<ServiceCard
					color="bg-[#8945F8]"
					title="MSDAO Studios"
					icon={<BiMoviePlay fontSize={21} className="text-white" />}
					duration={2000}
					subtitle="MSDAO Studios is the production company of MSDAO. The MSDAO community will participate in all aspects of an original MSDAO Studios production"
				/>
				<ServiceCard
					color="bg-[#F84550]"
					title="MS EnDAOment"
					icon={<MdBallot fontSize={21} className="text-white" />}
					duration={2500}
					subtitle="Ten Percent of the MSDAO year-end treasury will be used to fund Social Good Projects via the MS En-DAO-ment Initiative"
				/>
			</div>
		</div>
	</div>
);

export default Services;
