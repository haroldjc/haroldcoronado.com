import { TagIcon } from '@sanity/icons/Tag';
import { defineField, defineType } from 'sanity';

export const topic = defineType({
	name: 'topic',
	title: 'Topic',
	type: 'document',
	icon: TagIcon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			description: 'Lowercase, as it appears on the site (e.g. “design systems”).',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: { source: 'title' },
			validation: (rule) => rule.required(),
		}),
	],
});
