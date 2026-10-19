import { DocumentTextIcon } from '@sanity/icons/DocumentText';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const article = defineType({
	name: 'article',
	title: 'Article',
	type: 'document',
	icon: DocumentTextIcon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			description: 'Lowercase, as it appears on the site.',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: { source: 'title' },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'excerpt',
			type: 'text',
			rows: 3,
			description: 'One or two sentences. Shown in the journal list, under the article title and in the RSS feed.',
			validation: (rule) => [rule.required(), rule.max(200).warning('Keep it under 200 characters.')],
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'topics',
			type: 'array',
			description: 'The first topic is the one shown in the journal list.',
			of: [defineArrayMember({ type: 'reference', to: [{ type: 'topic' }] })],
			validation: (rule) => rule.required().min(1).unique(),
		}),
		defineField({
			name: 'body',
			type: 'array',
			description: 'The first paragraph is set as the lead. Headings become the contents list.',
			of: [
				defineArrayMember({
					type: 'block',
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'Heading', value: 'h2' },
					],
					lists: [{ title: 'Bullet', value: 'bullet' }],
					marks: {
						decorators: [
							{ title: 'Strong', value: 'strong' },
							{ title: 'Emphasis', value: 'em' },
							{ title: 'Code', value: 'code' },
						],
						annotations: [
							defineArrayMember({
								name: 'link',
								type: 'object',
								title: 'Link',
								fields: [
									defineField({
										name: 'href',
										title: 'URL',
										type: 'url',
										validation: (rule) =>
											rule.required().uri({ allowRelative: true, scheme: ['http', 'https', 'mailto'] }),
									}),
								],
							}),
						],
					},
				}),
				defineArrayMember({ type: 'figure' }),
				defineArrayMember({ type: 'pullQuote' }),
				defineArrayMember({ type: 'sidenote' }),
			],
		}),
	],
	orderings: [
		{
			title: 'Published, newest first',
			name: 'publishedAtDesc',
			by: [{ field: 'publishedAt', direction: 'desc' }],
		},
	],
	preview: {
		select: { title: 'title', publishedAt: 'publishedAt', topic: 'topics.0.title' },
		prepare: ({ title, publishedAt, topic }) => ({
			title,
			subtitle: [publishedAt?.slice(0, 10), topic].filter(Boolean).join(' · '),
		}),
	},
});
