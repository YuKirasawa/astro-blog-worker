export interface Favorite {
	title: string;
	description: string;
	url: string;
	tags: string[];
}

export const favorites: Favorite[] = [
	{
		title: 'A股资金面',
		description:
			'A股市场资金面看板',
		url: 'https://forgpt-d0g49jg3794cda582-1456017603.tcloudbaseapp.com/',
		tags: ['金融'],
	},
];
