import type { PortableTextBlock } from '@portabletext/types';
import { defineQuery } from 'groq';
import { sanityClient } from 'sanity:client';

export type Topic = { title: string; slug: string };

export type ArticleSummary = {
	_id: string;
	title: string;
	slug: string;
	excerpt: string;
	publishedAt: string;
	topics: Topic[];
	words: number | null;
};

export type Article = ArticleSummary & { body: PortableTextBlock[] | null };

const summaryFields = /* groq */ `
	_id,
	title,
	"slug": slug.current,
	excerpt,
	publishedAt,
	"topics": topics[]->{ title, "slug": slug.current },
	"words": length(string::split(pt::text(body), " "))
`;

const ARTICLES_QUERY = defineQuery(`
	*[_type == "article" && defined(slug.current) && defined(publishedAt)] | order(publishedAt desc) {
		${summaryFields},
		body[]{
			...,
			_type == "figure" => { ..., image { ..., asset->{ _id, url, metadata { lqip, dimensions } } } }
		}
	}
`);

export const getArticles = (): Promise<Article[]> => sanityClient.fetch(ARTICLES_QUERY);

const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

export const shortDate = (iso: string) => {
	const date = new Date(iso);
	return `${String(date.getUTCDate()).padStart(2, '0')} ${months[date.getUTCMonth()].slice(0, 3)}`;
};

export const longDate = (iso: string) => {
	const date = new Date(iso);
	return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
};

export const year = (iso: string) => new Date(iso).getUTCFullYear();

export const readingTime = (words: number | null) => (words ? `${Math.max(1, Math.round(words / 200))} min read` : null);

export const articleHref = (slug: string) => `/journal/${slug}/`;

export const topicHref = (slug: string) => `/journal/?topic=${slug}`;

export const slugify = (text: string) =>
	text
		.toLowerCase()
		.normalize('NFD')
		.replace(/\p{Diacritic}/gu, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');

export const blockText = (block: PortableTextBlock) =>
	block.children.map((child) => ('text' in child ? String(child.text) : '')).join('');

export const headings = (body: PortableTextBlock[] | null) =>
	(body ?? [])
		.filter((block) => block._type === 'block' && block.style === 'h2')
		.map((block) => {
			const text = blockText(block);
			return { text, id: slugify(text) };
		});
