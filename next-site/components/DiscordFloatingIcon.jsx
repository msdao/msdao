import React from 'react';
import { SiDiscord } from 'react-icons/si';
import * as ga from '../lib/googleAnalytics';

const DiscordFloatingIcon = () => {
	return (
		<a
			href="https://discord.gg/nwc8ytv4Z9"
			className="text-3xl bg-[#7289DA] rounded-full text-white transition-colors duration-300 inline-block p-2 fixed bottom-10 right-10 z-[5000] hover:bg-[#6377bd]"
			target="_blank"
			rel="noreferrer"
			onClick={(e) =>
				ga.linkClick({
					target: {
						innerText: 'Discord',
						href: e.target.href,
					},
				})
			}
		>
			<SiDiscord className="text-[1.685rem] cursor-pointer" />
		</a>
	);
};

export default DiscordFloatingIcon;
