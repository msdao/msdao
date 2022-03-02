import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga from '../lib/googleAnalytics';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		AOS.init({});
	}, []);

	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};

		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics-script" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
				  
					gtag('config','${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
				`}
			</Script>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
