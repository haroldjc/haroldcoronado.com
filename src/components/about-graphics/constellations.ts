export type Tone = 'ink' | 'red' | 'teal' | 'plum';
export type Side = 'top' | 'right' | 'bottom' | 'left';

type Star = {
	name: string;
	col: number;
	row: number;
	r: number;
	tone: Tone;
	label: Side;
};

export type Constellation = { name: string; stars: Star[]; lines: string[][] };

export const width = 1720;
export const height = 1220;
export const grid = { x: 42, y: 60, cols: 35, rows: 24, gap: 48, dot: 2 };

export const percent = (value: number, total: number) => `${(value / total) * 100}%`;

export const tones: Record<Tone, string> = {
	ink: 'fill-ink',
	red: 'fill-red',
	teal: 'fill-teal',
	plum: 'fill-plum',
};

export const constellations: Constellation[] = [
	{
		name: 'Orion',
		stars: [
			{
				name: 'betelgeuse',
				col: 15,
				row: 5,
				r: 16,
				tone: 'red',
				label: 'right',
			},
			{ name: 'rigel', col: 26, row: 19, r: 14, tone: 'teal', label: 'right' },
			{ name: 'mintaka', col: 22, row: 11, r: 9, tone: 'plum', label: 'right' },
			{
				name: 'alnilam',
				col: 21,
				row: 12,
				r: 9,
				tone: 'plum',
				label: 'bottom',
			},
			{ name: 'alnitak', col: 19, row: 12, r: 9, tone: 'plum', label: 'left' },
			{ name: 'bellatrix', col: 24, row: 6, r: 8, tone: 'ink', label: 'right' },
			{ name: 'saiph', col: 17, row: 20, r: 8, tone: 'ink', label: 'right' },
			{ name: 'meissa', col: 20, row: 1, r: 7, tone: 'ink', label: 'top' },
		],
		lines: [
			['saiph', 'alnitak', 'betelgeuse', 'meissa', 'bellatrix', 'mintaka', 'rigel'],
			['alnitak', 'alnilam', 'mintaka'],
		],
	},
	{
		name: 'Ursa Major',
		stars: [
			{ name: 'dubhe', col: 27, row: 5, r: 12, tone: 'red', label: 'top' },
			{
				name: 'alkaid',
				col: 13,
				row: 17,
				r: 11,
				tone: 'teal',
				label: 'bottom',
			},
			{ name: 'mizar', col: 15, row: 12, r: 10, tone: 'plum', label: 'left' },
			{ name: 'alioth', col: 18, row: 9, r: 12, tone: 'ink', label: 'top' },
			{ name: 'merak', col: 28, row: 10, r: 10, tone: 'ink', label: 'right' },
			{ name: 'phecda', col: 23, row: 12, r: 10, tone: 'ink', label: 'bottom' },
			{ name: 'megrez', col: 22, row: 7, r: 7, tone: 'ink', label: 'top' },
			{ name: 'alcor', col: 15, row: 11, r: 5, tone: 'plum', label: 'top' },
		],
		lines: [['alkaid', 'mizar', 'alioth', 'megrez', 'dubhe', 'merak', 'phecda', 'megrez']],
	},
	{
		name: 'Scorpius',
		stars: [
			{ name: 'antares', col: 20, row: 8, r: 16, tone: 'red', label: 'top' },
			{ name: 'shaula', col: 12, row: 16, r: 12, tone: 'teal', label: 'left' },
			{
				name: 'dschubba',
				col: 26,
				row: 7,
				r: 10,
				tone: 'plum',
				label: 'right',
			},
			{ name: 'acrab', col: 27, row: 4, r: 9, tone: 'plum', label: 'right' },
			{ name: 'fang', col: 25, row: 10, r: 8, tone: 'plum', label: 'right' },
			{ name: 'sargas', col: 15, row: 20, r: 10, tone: 'ink', label: 'bottom' },
			{ name: 'larawag', col: 19, row: 14, r: 9, tone: 'ink', label: 'right' },
			{
				name: 'xamidimura',
				col: 18,
				row: 18,
				r: 8,
				tone: 'ink',
				label: 'right',
			},
			{ name: 'girtab', col: 12, row: 19, r: 8, tone: 'ink', label: 'left' },
			{
				name: 'paikauhale',
				col: 19,
				row: 10,
				r: 7,
				tone: 'ink',
				label: 'left',
			},
		],
		lines: [
			['fang', 'dschubba', 'acrab'],
			['dschubba', 'antares', 'paikauhale', 'larawag', 'xamidimura', 'sargas', 'girtab', 'shaula'],
		],
	},
	{
		name: 'Cassiopeia',
		stars: [
			{ name: 'schedar', col: 25, row: 10, r: 12, tone: 'red', label: 'right' },
			{ name: 'navi', col: 21, row: 7, r: 12, tone: 'teal', label: 'top' },
			{ name: 'caph', col: 27, row: 4, r: 10, tone: 'ink', label: 'right' },
			{ name: 'ruchbah', col: 19, row: 13, r: 9, tone: 'ink', label: 'bottom' },
			{ name: 'segin', col: 15, row: 12, r: 7, tone: 'ink', label: 'left' },
		],
		lines: [['caph', 'schedar', 'navi', 'ruchbah', 'segin']],
	},
];

const center = (col: number, row: number) => ({
	cx: grid.x + grid.dot + col * grid.gap,
	cy: grid.y + grid.dot + row * grid.gap,
});

const labelOffsets: Record<Side, string> = {
	top: '-50% 0',
	right: '0 0',
	bottom: '-50% 0',
	left: '-100% 0',
};

const drawSpeed = 1.5;

const middle = (values: number[]) => (Math.min(...values) + Math.max(...values)) / 2;

export function layout(constellation: Constellation) {
	const shift = {
		col: Math.round((grid.cols - 1) / 2 - middle(constellation.stars.map((star) => star.col))),
		row: Math.round((grid.rows - 1) / 2 - middle(constellation.stars.map((star) => star.row))),
	};
	const stars = [...constellation.stars]
		.sort((a, b) => b.r - a.r)
		.map((star) => {
			const { cx, cy } = center(star.col + shift.col, star.row + shift.row);
			const textWidth = star.name.length * 7.5;
			const anchor = {
				top: { x: cx, y: cy - star.r - 26 },
				right: { x: cx + star.r + 10, y: cy - 10 },
				bottom: { x: cx, y: cy + star.r + 6 },
				left: { x: cx - star.r - 10, y: cy - 10 },
			}[star.label];
			const left = {
				top: anchor.x - textWidth / 2,
				right: anchor.x,
				bottom: anchor.x - textWidth / 2,
				left: anchor.x - textWidth,
			}[star.label];
			return {
				...star,
				cx,
				cy,
				fill: tones[star.tone],
				labelX: anchor.x,
				labelY: anchor.y,
				labelOffset: labelOffsets[star.label],
				labelBox: {
					x0: left,
					x1: left + textWidth,
					y0: anchor.y,
					y1: anchor.y + 20,
				},
			};
		});

	const byName = Object.fromEntries(stars.map((star) => [star.name, star]));
	let elapsed = 0;
	const segments = constellation.lines.flatMap((path) =>
		path.slice(1).map((name, i) => {
			const from = byName[path[i]];
			const to = byName[name];
			const length = Math.hypot(to.cx - from.cx, to.cy - from.cy);
			const segment = {
				x: from.cx,
				y: from.cy,
				angle: (Math.atan2(to.cy - from.cy, to.cx - from.cx) * 180) / Math.PI,
				length,
				delay: elapsed,
				duration: length / drawSpeed,
			};
			elapsed += segment.duration;
			return segment;
		}),
	);

	const holes = stars.flatMap(({ labelBox }) => {
		const dots = [];
		for (let row = 0; row < grid.rows; row++) {
			for (let col = 0; col < grid.cols; col++) {
				const { cx, cy } = center(col, row);
				if (cx >= labelBox.x0 && cx <= labelBox.x1 && cy >= labelBox.y0 && cy <= labelBox.y1) dots.push({ cx, cy });
			}
		}
		return dots;
	});

	return {
		name: constellation.name,
		stars,
		segments,
		holes,
		drawTime: elapsed,
	};
}

export const layouts = constellations.map(layout);

export const pool = {
	stars: Math.max(...layouts.map((l) => l.stars.length)),
	segments: Math.max(...layouts.map((l) => l.segments.length)),
	holes: Math.max(...layouts.map((l) => l.holes.length)),
};
