// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'ZHENTAI.DEV';
export const SITE_DESCRIPTION = '真太的个人博客 · 医学影像深度学习 · 研究笔记、开源项目与工具心法。';

// Social / contact links used in the header & footer.
export const GITHUB_URL = 'https://github.com/zhentai-sn';
export const EMAIL = 'zhentai.sn@gmail.com';

// Projects showcased on the home page. `post` links to the write-up on this blog.
export const PROJECTS = [
	{
		name: 'Model Flow',
		tagline: '让模型拥有可以被记住的形状。',
		taglineEn: 'Give models a shape people can remember.',
		descZh:
			'7 家提供商、20 个版本锁定的开放模型放进同一片 Canvas 星空——远看是体量与架构物种，近看是可追溯的计算图。',
		descEn:
			'20 revision-pinned open models from 7 providers in one Canvas universe — scale and architecture species from afar, traceable computation graphs up close.',
		url: 'https://model-flow-phi.vercel.app/',
		repo: 'https://github.com/zhentai-sn/model-flow',
		post: '/blog/model-flow-model-universe/',
	},
];
