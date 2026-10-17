import ArrowRight from './ArrowRight.astro';
import ArrowLeft from './ArrowLeft.astro';
import ArrowUpRight from './ArrowUpRight.astro';
import ArrowDown from './ArrowDown.astro';
import ChevronRight from './ChevronRight.astro';
import ChevronDown from './ChevronDown.astro';
import Menu from './Menu.astro';
import Close from './Close.astro';
import Plus from './Plus.astro';
import Minus from './Minus.astro';
import Check from './Check.astro';
import Search from './Search.astro';
import Globe from './Globe.astro';
import Play from './Play.astro';
import Video from './Video.astro';
import Book from './Book.astro';
import Mail from './Mail.astro';
import External from './External.astro';
import Download from './Download.astro';
import Link from './Link.astro';
import Copy from './Copy.astro';
import Info from './Info.astro';
import Alert from './Alert.astro';
import Calendar from './Calendar.astro';
import Location from './Location.astro';

export const icons = {
	'arrow-right': ArrowRight,
	'arrow-left': ArrowLeft,
	'arrow-up-right': ArrowUpRight,
	'arrow-down': ArrowDown,
	'chevron-right': ChevronRight,
	'chevron-down': ChevronDown,
	'menu': Menu,
	'close': Close,
	'plus': Plus,
	'minus': Minus,
	'check': Check,
	'search': Search,
	'globe': Globe,
	'play': Play,
	'video': Video,
	'book': Book,
	'mail': Mail,
	'external': External,
	'download': Download,
	'link': Link,
	'copy': Copy,
	'info': Info,
	'alert': Alert,
	'calendar': Calendar,
	'location': Location,
};

export type IconName = keyof typeof icons;

export {
	ArrowRight,
	ArrowLeft,
	ArrowUpRight,
	ArrowDown,
	ChevronRight,
	ChevronDown,
	Menu,
	Close,
	Plus,
	Minus,
	Check,
	Search,
	Globe,
	Play,
	Video,
	Book,
	Mail,
	External,
	Download,
	Link,
	Copy,
	Info,
	Alert,
	Calendar,
	Location,
};
