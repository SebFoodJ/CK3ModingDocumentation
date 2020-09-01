module.exports = {
	plugins: [],

	themeConfig: {
		sidebar: [
			{
				title: 'Introduction',
				path: '/introduction/',
				children: [
					'/introduction/project-setup',
					'/introduction/folder-structure'
				]
			},
			{
				title: 'Tutorials',
				children: [
					'tutorials/basic-alert',
				]
			}
		],

		footer: "[MIT Licensed](https://github.com/CK3-Modding/Documentation/blob/master/LICENSE)",
		logo: "/assets/img/logo.png"
	}
}
