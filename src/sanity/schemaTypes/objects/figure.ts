import { ImageIcon } from '@sanity/icons/Image';
import { defineField, defineType } from 'sanity';

export const figure = defineType({
	name: 'figure',
	title: 'Figure',
	type: 'object',
	icon: ImageIcon,
	fields: [
		defineField({
			name: 'image',
			type: 'image',
			options: { hotspot: true },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'alt',
			title: 'Alternative text',
			type: 'string',
			validation: (rule) => rule.required().warning('Describe the image for screen readers.'),
		}),
		defineField({
			name: 'caption',
			type: 'string',
		}),
		defineField({
			name: 'width',
			type: 'string',
			options: {
				list: [
					{ title: 'Wide (full container, 16:9)', value: 'wide' },
					{ title: 'Column (reading width)', value: 'column' },
				],
				layout: 'radio',
			},
			initialValue: 'wide',
		}),
	],
	preview: {
		select: { title: 'caption', subtitle: 'alt', media: 'image' },
	},
});
