import * as en from './home';

export const hero: typeof en.hero = {
	headline: ['soy Harold.', 'programo.'],
	highlight: 'y diseño.',
	bio: `Desarrollador full stack y diseñador, con sede en Lima, Perú, con más de 15 años de experiencia construyendo productos que funcionan, desde el prototipo y el diseño hasta apps en producción.`,
	words: ['diseño', 'desarrollo', 'producto'],
	fitTo: en.hero.fitTo,
};

export const skills: typeof en.skills = {
	label: 'habilidades',
	headline: ['ingeniería de producto', 'desde cero.'],
	pillars: [
		{
			title: 'diseño',
			description: 'Interfaces con un punto de vista.',
			tools: ['Figma', 'Sistemas de diseño', 'Prototipado', 'Tipografía y diagramación', 'UI + UX'],
		},
		{
			title: 'desarrollo',
			description: 'Del modelo de datos al front end en producción.',
			tools: ['TypeScript', 'React / Next.js', 'Node.js y APIs', 'Bases de datos', 'Cloud y CI/CD'],
		},
		{
			title: 'ia',
			description: 'Agentes de IA en el proceso, del primer boceto al despliegue.',
			tools: ['Claude Code', 'Agentes de código y review', 'Flujos con MCP y Figma', 'Diseño de prompts y contexto', 'Automatización y evals'],
		},
	],
	processTitle: 'desde la idea al despliegue.',
	stages: [
		{ name: 'idea', description: 'Brief, investigación y restricciones.' },
		{ name: 'prototipo', description: 'Flujos e interfaces, probados desde el principio.' },
		{ name: 'sistema', description: 'Tokens y componentes compartidos entre diseño y código.' },
		{ name: 'desarrollo', description: 'Front end y APIs tipados y probados.' },
		{ name: 'revisión', description: 'Pruebas, accesibilidad y revisión de código.' },
		{ name: 'despliegue', description: 'CI/CD a producción, y luego a medir.' },
	],
	lanes: {
		design: 'diseño',
		overlap: 'sistemas de diseño',
		development: 'desarrollo',
		agents: 'agentes',
		tasks: ['investigación', 'prototipado con ia', 'figma mcp', 'agentes de código', 'agentes de revisión', 'automatización ci'],
	},
};

export const work: typeof en.work = {
	title: 'trabajo',
	label: 'experiencia',
	projects: [
		{ name: 'cliente uno', meta: 'marca + web · 2025' },
		{ name: 'cliente dos', meta: 'diseño de producto · 2024' },
		{ name: 'cliente tres', meta: 'desarrollo full-stack · 2024' },
		{ name: 'cliente cuatro', meta: 'sistema de diseño · 2023' },
		{ name: 'cliente cinco', meta: 'app web · 2023' },
		{ name: 'cliente seis', meta: 'identidad + sitio · 2022' },
		{ name: 'cliente siete', meta: 'prototipo · 2022' },
		{ name: 'odisea del cosmos', meta: 'youtube · en curso' },
	],
	experienceHeadline: 'dónde he trabajado.',
	experience: [
		{
			company: 'commence',
			location: 'remoto, EE. UU.',
			role: 'product engineer',
			years: '2025 — hoy',
			description: 'Ayudamos a las empresas a alcanzar sus objetivos. Estoy a cargo de todo el ciclo de vida del sitio web, desde el diseño hasta el despliegue.',
		},
		{
			company: 'perceptyx',
			location: 'remoto, EE. UU.',
			role: 'desarrollador hubspot',
			years: '2021 — 2025',
			description: 'Tema a medida para el sitio de marketing en la plataforma HubSpot, usando funciones nativas como HubDB y sus APIs.',
		},
		{
			company: 'waggl',
			location: 'remoto, EE. UU.',
			role: 'desarrollador full-stack',
			years: '2016 — 2021',
			description: 'Sitio de marketing de la empresa, con WordPress y un CMS a medida.',
		},
		{
			company: 'tecla labs',
			location: 'Lima, Perú',
			role: 'desarrollador web',
			years: '2014 — 2017',
			description: 'Desarrollador front-end en distintos proyectos: sitios de marketing, apps con Ionic y más.',
		},
	],
	resume: { label: 'currículum completo →', href: '#' },
};

export const about: typeof en.about = {
	label: 'sobre mí',
	headline: ['diseño, tecnología,', 'ciencia y arte.'],
	note: ['sobre las cosas', 'que me motivan.'],
	intro: `Me apasionan muchas cosas. Más allá de mi trabajo profesional, disfruto leer libros de divulgación científica y de ciencia ficción. Esa combinación me llevó a crear un canal de YouTube llamado [Odisea del Cosmos](https://www.youtube.com/@OdiseadelCosmos), dedicado a explicar la ciencia de la ciencia ficción, tanto en el cine como en la literatura. Actualmente estoy trabajando en un proyecto relacionado llamado *Odisea Axis*.

	Amo el arte en todas sus formas, incluidos el cine y la música, desde el blues hasta el hip-hop, con especial énfasis en el rock y, sobre todo en la última década, el jazz.`,
	planets: ['tecnología', 'diseño', 'ciencia', 'arte'],
	items: [
		{
			label: 'youtube',
			title: 'odisea del cosmos',
			description: 'Un canal donde explico la ciencia de la ciencia ficción en el cine, la literatura y más.',
			link: { label: 'ver el canal →', href: 'https://www.youtube.com/@OdiseadelCosmos', external: true },
		},
		{
			label: 'libro · 2027',
			title: 'un libro sobre coleccionismo',
			description: 'Soy coautor de un libro sobre coleccionismo que saldrá en 2027. Pronto más detalles.',
		},
	],
};

export const contact: typeof en.contact = {
	label: 'contacto',
	headline: ['constru-', 'yamos algo.'],
	links: [
		{ label: 'correo ↗', href: 'mailto:hola@haroldcoronado.com', external: false },
		{ label: 'github ↗', href: 'https://github.com/haroldjc/', external: true },
		{ label: 'linkedin ↗', href: 'https://www.linkedin.com/in/haroldjc/', external: true },
		{ label: 'youtube ↗', href: '#', external: true },
	],
};
