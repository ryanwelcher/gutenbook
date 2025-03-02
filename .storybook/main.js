// const stories = [
// 	process.env.NODE_ENV !== 'test' && './stories/**/*.(js|mdx)',
// 	'../packages/components/src/**/stories/*.js',
// ].filter( Boolean );
const stories = [
	process.env.NODE_ENV !== 'test' && '../main-stories/**/*.(js|mdx)',
	'../**/stories/*.js',
].filter( Boolean );

module.exports = {
	stories,
	addons: [
		{
			name: '@storybook/addon-docs',
			options: { configureJSX: true },
		},
		'@storybook/addon-knobs',
		'@storybook/addon-storysource',
		'@storybook/addon-viewport',
		'@storybook/addon-a11y',
	],
};
  