// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Update this to your GitHub Pages URL.
	// User page (repo named zhentai-sn.github.io) is served at the root.
	site: 'https://zhentai-sn.github.io',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			// Pixel display font — used for the logo, headings & buttons.
			provider: fontProviders.google(),
			name: 'Pixelify Sans',
			cssVariable: '--font-pixel',
			fallbacks: ['monospace'],
			weights: [400, 500, 700],
		},
		{
			// Tight pixel font — used for tiny labels / badges.
			provider: fontProviders.google(),
			name: 'Silkscreen',
			cssVariable: '--font-silk',
			fallbacks: ['monospace'],
			weights: [400, 700],
		},
		{
			// Clean modern body font.
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-body',
			fallbacks: ['sans-serif'],
			weights: [400, 500, 600, 700],
		},
	],
});
