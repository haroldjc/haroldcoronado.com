export const hero = {
	headline: ['i’m Harold', 'i build stuff.'],
	highlight: 'end to end.',
	bio: `Full stack developer and designer, based in Lima, Perú, with over 15 years of experience building products that work, from prototype and design to deployed apps.`,
	words: ['design', 'develop', 'building'],
	fitTo: 'building',
};

export const skills = {
	headline: ['product engineering', 'at heart.'],
	pillars: [
		{
			title: 'design',
			description: 'Interfaces with a point of view.',
			tools: ['Figma', 'Design systems', 'Prototyping', 'Typography & layout', 'UI + UX'],
		},
		{
			title: 'build',
			description: 'From data model to deployed front end.',
			tools: ['TypeScript', 'React / Next.js', 'Node.js & APIs', 'Databases', 'Cloud & CI/CD'],
		},
		{
			title: 'ai',
			description: 'Agents in the loop, from first sketch to deploy.',
			tools: ['Claude Code', 'Coding & review agents', 'MCP & Figma workflows', 'Prompt & context design', 'Automation & evals'],
		},
	],
	processTitle: 'from idea to deployment.',
	stages: [
		{ name: 'idea', description: 'Brief, research and constraints.' },
		{ name: 'prototype', description: 'Flows and interfaces, tested early.' },
		{ name: 'system', description: 'Tokens and components shared by design and code.' },
		{ name: 'build', description: 'Typed, tested front end and APIs.' },
		{ name: 'review', description: 'Tests, accessibility and code review.' },
		{ name: 'deploy', description: 'CI/CD to production, then measure.' },
	],
	lanes: {
		design: 'design',
		overlap: 'design systems',
		development: 'development',
		agents: 'agents',
		tasks: ['research', 'ai prototyping', 'figma mcp', 'coding agents', 'review agents', 'ci automation'],
	},
};

export const work = {
	title: 'work',
	projects: [
		{ name: 'client one', meta: 'brand + web · 2025' },
		{ name: 'client two', meta: 'product design · 2024' },
		{ name: 'client three', meta: 'full-stack build · 2024' },
		{ name: 'client four', meta: 'design system · 2023' },
		{ name: 'client five', meta: 'web app · 2023' },
		{ name: 'client six', meta: 'identity + site · 2022' },
		{ name: 'client seven', meta: 'prototype · 2022' },
		{ name: 'odisea del cosmos', meta: 'youtube · ongoing' },
	],
	experienceHeadline: 'where i’ve worked.',
	experience: [
		{
			company: 'commence',
			location: 'remote, USA',
			role: 'senior product engineer',
			years: '2025 — now',
			description: 'What you owned, who you worked with and one result. Placeholder — swap for the real role.',
		},
		{
			company: 'perceptyx',
			location: 'remote, USA',
			role: 'hubspot developer',
			years: '2021 — 2025',
			description: 'What you owned, who you worked with and one result. Placeholder — swap for the real role.',
		},
		{
			company: 'waggl',
			location: 'remote, USA',
			role: 'full-stack developer',
			years: '2016 — 2021',
			description: 'What you owned, who you worked with and one result. Placeholder — swap for the real role.',
		},
		{
			company: 'tecla labs',
			location: 'Lima, Perú',
			role: 'web developer',
			years: '2014 — 2017',
			description: 'What you owned, who you worked with and one result. Placeholder — swap for the real role.',
		},
	],
	resume: { label: 'full résumé →', href: '#' },
};

export const about = {
	headline: ['design, tech,', 'science and art.'],
	note: ['about the things', 'that motivate me.'],
	intro: `I am passionate about many things. Beyond my professional work, I enjoy reading books on popular science as well as science fiction. This combination led me to create a YouTube channel called [Odisea del Cosmos](https://www.youtube.com/@OdiseadelCosmos), dedicated to exploring the science found within science fiction, both in film and literature. Currently, I am working on a related project called *Odisea Axis*.
	
	I love art in all its forms, including film and music, ranging from blues to hip-hop, with a particular emphasis on rock and, especially in the last ten years, jazz.`,
	planets: ['technology', 'design', 'science', 'art'],
	items: [
		{
			label: 'youtube',
			title: 'odisea del cosmos',
			description: 'A channel where I explain the science in science fiction media. In Spanish only.',
			link: { label: 'watch the channel →', href: 'https://www.youtube.com/@OdiseadelCosmos', external: true },
		},
		{
			label: 'book · 2027',
			title: 'a book on collecting',
			description: 'I’m co-authoring a book on collecting, coming out in 2027. More details coming soon.',
		},
	],
};

export const contact = {
	headline: ['let’s build', 'something.'],
	links: [
		{ label: 'email ↗', href: 'mailto:hola@haroldcoronado.com', external: false },
		{ label: 'github ↗', href: 'https://github.com/haroldjc/', external: true },
		{ label: 'linkedin ↗', href: 'https://www.linkedin.com/in/haroldjc/', external: true },
		{ label: 'youtube ↗', href: '#', external: true },
	] as [Link, Link, Link, Link],
};

type Link = { label: string; href: string; external?: boolean };
