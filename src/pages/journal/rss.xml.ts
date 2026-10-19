import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { journal } from '../../data/journal';
import { articleHref, getArticles } from '../../lib/journal';

export async function GET(context: APIContext) {
	const articles = await getArticles();
	return rss({
		title: 'Harold Coronado — Journal',
		description: journal.description,
		site: context.site ?? 'https://haroldcoronado.com',
		items: articles.map((article) => ({
			title: article.title,
			description: article.excerpt,
			link: articleHref(article.slug),
			pubDate: new Date(article.publishedAt),
			categories: article.topics.map((topic) => topic.title),
		})),
	});
}
