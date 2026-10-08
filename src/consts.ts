// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'ZHENTAI.DEV';
export const SITE_DESCRIPTION = '真太的个人博客 · 医学影像深度学习 · 研究笔记、开源项目与工具心法。';

// Social / contact links used in the header & footer.
export const GITHUB_URL = 'https://github.com/zhentai-sn';
export const EMAIL = 'zhentai.sn@gmail.com';

// Projects showcased on the home page. `post` links to the write-up on this blog;
// `url` (a live demo) is optional — projects without one get no Launch button.
type Project = {
	name: string;
	tagline: string;
	taglineEn: string;
	descZh: string;
	descEn: string;
	url?: string;
	repo: string;
	post: string;
};

export const PROJECTS: Project[] = [
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
	{
		name: 'Glaux',
		tagline: '让图像与视频分析有据可查。',
		taglineEn: 'Image and video analysis with evidence you can review.',
		descZh:
			'本机运行的图像与视频分析智能体环境：连接自己的模型，在工作区分析图像与视频、复核证据，并保存可复用案例。',
		descEn:
			'A local agent environment for image and video analysis: connect your own model, analyze files, review evidence, and save reusable cases.',
		repo: 'https://github.com/zhentai-sn/open-glaux',
		post: '/blog/glaux-biomedical-image-agents/',
	},
	{
		name: 'zhentai-skills',
		tagline: '把踩过的坑写成 agent 的操作契约。',
		taglineEn: 'Turn hard-won gotchas into operating contracts for agents.',
		descZh:
			'18 个在真实项目里攒出来的 Claude Code / Agent Skills——文档、Git、发布部署、环境运维、排障取数，写给 agent 读的顺序、确认点与禁止项。',
		descEn:
			'18 Claude Code / Agent Skills accumulated in real projects — docs, Git, release, ops and debugging, written as the ordering, confirmation gates and hard limits an agent can read.',
		repo: 'https://github.com/zhentai-sn/zhentai-skills',
		post: '/blog/zhentai-skills-operating-contracts/',
	},
];
