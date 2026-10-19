export type Lang = 'en' | 'es';

export type NavItem = { label: string; href: string };

export type LangHrefs = Record<Lang, string>;

export const homeHrefs: LangHrefs = { en: '/', es: '/es/' };

export const navLinks: Record<Lang, NavItem[]> = {
	en: [
		{ label: 'skills', href: '/#skills' },
		{ label: 'work', href: '/#work' },
		{ label: 'about', href: '/#about' },
		{ label: 'contact', href: '/#contact' },
	],
	es: [
		{ label: 'habilidades', href: '/es/#skills' },
		{ label: 'trabajo', href: '/es/#work' },
		{ label: 'sobre mí', href: '/es/#about' },
		{ label: 'contacto', href: '/es/#contact' },
	],
};

export const ui = {
	en: {
		main: 'Main',
		language: 'Language',
		menu: 'Menu',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		announcement: 'Announcement',
		constellations: 'Constellations',
	},
	es: {
		main: 'Principal',
		language: 'Idioma',
		menu: 'Menú',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
		announcement: 'Anuncio',
		constellations: 'Constelaciones',
	},
} satisfies Record<Lang, Record<string, string>>;
