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
		tagline: '给影像智能体一个能把事做对的环境。',
		taglineEn: 'An environment where image agents get things right.',
		descZh:
			'用自然语言描述研究目标，智能体调用带物理标定的分割与测量工具干活，覆盖超声、CT 与病理切片。',
		descEn:
			'Describe a research goal in plain language; the agent does the work with calibrated segmentation and measurement tools across ultrasound, CT and pathology slides.',
		repo: 'https://github.com/zhentai-sn/open-glaux',
		post: '/blog/glaux-biomedical-image-agents/',
	},
];
