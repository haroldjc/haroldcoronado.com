import { CommentIcon } from '@sanity/icons/Comment';
import { defineField, defineType } from 'sanity';

export const sidenote = defineType({
	name: 'sidenote',
	title: 'Sidenote',
	type: 'object',
	icon: CommentIcon,
	description: 'Sits in the margin next to the block above it on wide screens, and inline on phones.',
	fields: [
		defineField({
			name: 'text',
			type: 'text',
			rows: 3,
			validation: (rule) => rule.required(),
		}),
	],
	preview: {
		select: { title: 'text' },
		prepare: ({ title }) => ({ title, subtitle: 'Sidenote' }),
	},
});
