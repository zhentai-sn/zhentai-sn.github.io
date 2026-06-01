import { getCollection } from 'astro:content';

// Build a lightweight search index consumed by the client-side search modal.
export async function GET() {
	const posts = await getCollection('blog');
	const index = posts
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			tags: post.data.tags ?? [],
			url: `/blog/${post.id}/`,
			date: post.data.pubDate.toISOString().slice(0, 10),
			// Strip markdown to plain-ish text for full-text matching.
			body: (post.body ?? '')
				.replace(/```[\s\S]*?```/g, ' ')
				.replace(/[#>*_`~\-|]/g, ' ')
				.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
				.replace(/\s+/g, ' ')
				.trim()
				.slice(0, 2000),
		}));

	return new Response(JSON.stringify(index), {
		headers: { 'Content-Type': 'application/json' },
	});
}
