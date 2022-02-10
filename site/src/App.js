import React, { useEffect } from 'react';
import {
	Footer,
	Navbar,
	Services,
	Nfts,
	Welcome,
	Mission,
	Roadmap,
} from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
	useEffect(() => {
		AOS.init({});
	}, []);
	return (
		<div className="min-h-screen overflow-hidden">
			<div className="gradient-bg-welcome">
				<Navbar />
				<Welcome />
			</div>
			<Mission />
			<Services />
			<Roadmap />
			<Nfts />
			<Footer />
		</div>
	);
};

export default App;
