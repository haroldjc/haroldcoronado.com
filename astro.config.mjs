// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';
import { existsSync } from 'node:fs';

if (existsSync('.env')) process.loadEnvFile('.env');
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = process.env;

export default defineConfig({
	site: 'https://haroldcoronado.com',
	integrations: [
		sanity({
			projectId: PUBLIC_SANITY_PROJECT_ID,
			dataset: PUBLIC_SANITY_DATASET,
			apiVersion: '2026-10-18',
			useCdn: false,
			studioBasePath: '/studio',
			studioRouterHistory: 'hash',
		}),
		react(),
	],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Inter',
			cssVariable: '--font-inter',
			fallbacks: ['sans-serif'],
			options: {
				variants: [{ src: ['./src/assets/fonts/InterVariable.woff2'], weight: '100 900', style: 'normal' }],
			},
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
