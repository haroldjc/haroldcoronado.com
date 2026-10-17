import { announcement } from '../data/site';

export type Announcement = {
	enabled: boolean;
	message: string;
	link?: { label: string; href: string; external?: boolean };
};

export async function getAnnouncement(): Promise<Announcement | null> {
	const data: Announcement | null = announcement;
	return data?.enabled && data.message.trim() ? data : null;
}
