export type Lang = 'en' | 'es';

export type NavItem = { label: string; href: string };

export type LangHrefs = Record<Lang, string>;

export const defaultNav: NavItem[] = [
	{ label: 'skills', href: '/#skills' },
	{ label: 'work', href: '/#work' },
	{ label: 'about', href: '/#about' },
	{ label: 'contact', href: '/#contact' },
];
