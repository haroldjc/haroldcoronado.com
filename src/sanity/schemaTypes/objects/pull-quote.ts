import { BlockquoteIcon } from '@sanity/icons/Blockquote';
import { defineField, defineType } from 'sanity';

export const pullQuote = defineType({
	name: 'pullQuote',
	title: 'Pull quote',
	type: 'object',
	icon: BlockquoteIcon,
	fields: [
		defineField({
			name: 'quote',
			type: 'text',
			rows: 3,
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'attribution',
			type: 'string',
		}),
	],
	preview: {
		select: { title: 'quote', subtitle: 'attribution' },
	},
});
