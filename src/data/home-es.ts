import * as en from './home';

export const hero: typeof en.hero = {
	headline: ['soy Harold', 'hago cosas.'],
	highlight: 'de A a Z.',
	bio: `Desarrollador full stack y diseñador, basado en Lima, Perú, con más de 15 años de experiencia construyendo productos que funcionan, desde el prototipo y el diseño hasta apps en producción.`,
	words: ['diseño', 'desarrollo', 'construyo'],
	fitTo: en.hero.fitTo,
};

export const skills: typeof en.skills = {
	label: 'habilidades',
	headline: ['ingeniería de producto', 'de corazón.'],
	pillars: [
		{
			title: 'diseño',
			description: 'Interfaces con un punto de vista.',
			tools: ['Figma', 'Sistemas de diseño', 'Prototipado', 'Tipografía y diagramación', 'UI + UX'],
		},
		{
			title: 'desarrollo',
			description: 'Del modelo de datos al front end en producción.',
			tools: ['TypeScript', 'React / Next.js', 'Node.js y APIs', 'Bases de datos', 'Nube y CI/CD'],
		},
		{
			title: 'ia',
			description: 'Agentes en el proceso, del primer boceto al despliegue.',
			tools: ['Claude Code', 'Agentes de código y revisión', 'Flujos con MCP y Figma', 'Diseño de prompts y contexto', 'Automatización y evals'],
		},
	],
	processTitle: 'de la idea al despliegue.',
	stages: [
		{ name: 'idea', description: 'Brief, investigación y restricciones.' },
		{ name: 'prototipo', description: 'Flujos e interfaces, probados desde temprano.' },
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
			role: 'ingeniero de producto senior',
			years: '2025 — hoy',
			description: 'Qué estuvo a tu cargo, con quién trabajaste y un resultado. Texto provisional — reemplázalo por el rol real.',
		},
		{
			company: 'perceptyx',
			location: 'remoto, EE. UU.',
			role: 'desarrollador hubspot',
			years: '2021 — 2025',
			description: 'Qué estuvo a tu cargo, con quién trabajaste y un resultado. Texto provisional — reemplázalo por el rol real.',
		},
		{
			company: 'waggl',
			location: 'remoto, EE. UU.',
			role: 'desarrollador full-stack',
			years: '2016 — 2021',
			description: 'Qué estuvo a tu cargo, con quién trabajaste y un resultado. Texto provisional — reemplázalo por el rol real.',
		},
		{
			company: 'tecla labs',
			location: 'Lima, Perú',
			role: 'desarrollador web',
			years: '2014 — 2017',
			description: 'Qué estuvo a tu cargo, con quién trabajaste y un resultado. Texto provisional — reemplázalo por el rol real.',
		},
	],
	resume: { label: 'currículum completo →', href: '#' },
};

export const about: typeof en.about = {
	label: 'sobre mí',
	headline: ['diseño, tecnología,', 'ciencia y arte.'],
	note: ['sobre las cosas', 'que me motivan.'],
	intro: `Me apasionan muchas cosas. Más allá de mi trabajo profesional, disfruto leer libros de divulgación científica y de ciencia ficción. Esa combinación me llevó a crear un canal de YouTube llamado [Odisea del Cosmos](https://www.youtube.com/@OdiseadelCosmos), dedicado a explorar la ciencia que hay en la ciencia ficción, tanto en el cine como en la literatura. Actualmente estoy trabajando en un proyecto relacionado llamado *Odisea Axis*.

	Amo el arte en todas sus formas, incluidos el cine y la música, desde el blues hasta el hip-hop, con especial énfasis en el rock y, sobre todo en los últimos diez años, el jazz.`,
	planets: ['tecnología', 'diseño', 'ciencia', 'arte'],
	items: [
		{
			label: 'youtube',
			title: 'odisea del cosmos',
			description: 'Un canal donde explico la ciencia detrás de la ciencia ficción en el cine y la literatura.',
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
	headline: ['hagamos', 'algo.'],
	links: [
		{ label: 'correo ↗', href: 'mailto:hola@haroldcoronado.com', external: false },
		{ label: 'github ↗', href: 'https://github.com/haroldjc/', external: true },
		{ label: 'linkedin ↗', href: 'https://www.linkedin.com/in/haroldjc/', external: true },
		{ label: 'youtube ↗', href: '#', external: true },
	],
};
