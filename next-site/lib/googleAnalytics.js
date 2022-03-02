export const pageview = (url) => {
	window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
		path_url: url,
	});
};

export const linkClick = (e) => {
	window.gtag('event', 'link_click', {
		link_text: e.target.innerText,
		link_url: e.target.href,
	});
};
