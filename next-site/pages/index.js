import Head from 'next/head';

import {
	Footer,
	Mission,
	Navbar,
	Nfts,
	Roadmap,
	Services,
	Welcome,
} from '../components';

export default function Home() {
	return (
		<div className="min-h-screen overflow-hidden">
			<Head>
				<meta charSet="utf-8" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="World's First Decentralized Movie Studio"
				/>
				{/* <!-- Facebook Meta Tags --> */}
				<meta property="og:url" content="https://www.moviestudiodao.xyz/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Movie Studio DAO" />
				<meta
					property="og:description"
					content="World's First Decentralized Movie Studio"
				/>
				<meta
					property="og:image"
					content="https://www.moviestudiodao.xyz/logo.png"
				/>

				{/* <!-- Twitter Meta Tags --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://www.moviestudiodao.xyz/" />
				<meta name="twitter:title" content="Movie Studio DAO" />
				<meta
					name="twitter:description"
					content="World's First Decentralized Movie Studio"
				/>
				<meta
					name="twitter:image"
					content="https://www.moviestudiodao.xyz/logo.png"
				/>
				<link rel="apple-touch-icon" href="/logo.png" />
				<title>Movie Studio DAO</title>
			</Head>
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
}
