export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
};

export const localeHreflang: Record<Locale, string> = {
  en: 'en',
  fr: 'fr',
};

type StringMap = Record<string, string>;

const en = {
  'site.tagline': 'Developer, musician, teacher.',
  'nav.projects': 'Projects',
  'nav.music': 'Music',
  'nav.teaching': 'Teaching',
  'nav.contact': 'Contact',
  'home.location': 'Lyon, France',
  'home.headline': 'Creative spirit, at the intersection of art & technology.',
  'home.intro':
    'Software developer, music teacher, artist. I help people accomplish their creative and entrepreneurial vision — whatever the field.',
  'home.sectionsHeading': 'Around here',
  'home.contactCta': 'Get in touch →',
  'projects.title': 'Projects',
  'projects.subtitle': 'Software, tools, and experiments.',
  'projects.empty': 'No projects published yet.',
  'projects.back': '← All projects',
  'projects.visit': 'Visit ↗',
  'projects.source': 'Source ↗',
  'music.title': 'Music',
  'music.subtitle': 'Projects & collaborations.',
  'music.empty': 'No projects published yet.',
  'music.kbdHint': 'use ← / → to navigate',
  'music.swipeHint': 'swipe or use the arrows',
  'music.prev': 'Previous project',
  'music.next': 'Next project',
  'music.listen': 'Listen',
  'music.visit': 'Visit ↗',
  'oddities.title': 'Various oddities',
  'oddities.subtitle': 'Side projects, one-offs, and in-flight experiments.',
  'oddities.empty': 'No entries published yet.',
  'oddities.kbdHint': 'use ← / → to navigate',
  'oddities.swipeHint': 'swipe or use the arrows',
  'oddities.prev': 'Previous',
  'oddities.next': 'Next',
  'oddities.inProgress': 'in progress',
  'nav.oddities': 'Oddities',
  'engineering.title': 'Engineering',
  'engineering.subtitle': 'Seven years in production, plus what came after.',
  'engineering.empty': 'No entries published yet.',
  'engineering.kbdHint': 'use ← / → to navigate',
  'engineering.swipeHint': 'swipe or use the arrows',
  'engineering.prev': 'Previous',
  'engineering.next': 'Next',
  'engineering.ongoing': 'ongoing',
  'engineering.stack': 'Stack',
  'nav.engineering': 'Engineering',
  'sports.title': 'Sports',
  'sports.subtitle': 'One disc, one ball, two wheels — in that order.',
  'sports.empty': 'No entries published yet.',
  'sports.kbdHint': 'use ← / → to navigate',
  'sports.swipeHint': 'swipe or use the arrows',
  'sports.prev': 'Previous',
  'sports.next': 'Next',
  'sports.ongoing': 'ongoing',
  'nav.sports': 'Sports',
  'teaching.title': 'Teaching',
  'teaching.subtitle': 'Three pillars — autonomy, adaptability, and serious fun.',
  'teaching.empty': 'No pillars published yet.',
  'teaching.kbdHint': 'use ← / → to navigate',
  'teaching.swipeHint': 'swipe or use the arrows',
  'teaching.prev': 'Previous',
  'teaching.next': 'Next',
  'contact.title': 'Contact',
  'footer.built': 'built with Astro',
} satisfies StringMap;

const fr: typeof en = {
  'site.tagline': 'Développeur, musicien, enseignant.',
  'nav.projects': 'Projets',
  'nav.music': 'Musique',
  'nav.teaching': 'Enseignement',
  'nav.contact': 'Contact',
  'home.location': 'Lyon, France',
  'home.headline': 'Esprit créatif, à la croisée de l’art et de la technologie.',
  'home.intro':
    'Développeur logiciel, professeur de musique, artiste. J’accompagne celles et ceux qui portent une vision créative ou entrepreneuriale — dans tous les domaines.',
  'home.sectionsHeading': 'Par ici',
  'home.contactCta': 'Prendre contact →',
  'projects.title': 'Projets',
  'projects.subtitle': 'Logiciels, outils et expérimentations.',
  'projects.empty': 'Aucun projet publié pour le moment.',
  'projects.back': '← Tous les projets',
  'projects.visit': 'Voir ↗',
  'projects.source': 'Code source ↗',
  'music.title': 'Musique',
  'music.subtitle': 'Projets et collaborations.',
  'music.empty': 'Aucun projet publié pour le moment.',
  'music.kbdHint': 'utilisez ← / → pour naviguer',
  'music.swipeHint': 'balayez ou utilisez les flèches',
  'music.prev': 'Projet précédent',
  'music.next': 'Projet suivant',
  'music.listen': 'Écouter',
  'music.visit': 'Voir ↗',
  'oddities.title': 'Curiosités diverses',
  'oddities.subtitle': 'Projets parallèles, hors-catégorie, et expériences en cours.',
  'oddities.empty': 'Aucune entrée publiée pour le moment.',
  'oddities.kbdHint': 'utilisez ← / → pour naviguer',
  'oddities.swipeHint': 'balayez ou utilisez les flèches',
  'oddities.prev': 'Précédent',
  'oddities.next': 'Suivant',
  'oddities.inProgress': 'en cours',
  'nav.oddities': 'Curiosités',
  'engineering.title': 'Développement',
  'engineering.subtitle': 'Sept ans en production, et ce qui s’en est suivi.',
  'engineering.empty': 'Aucune entrée publiée pour le moment.',
  'engineering.kbdHint': 'utilisez ← / → pour naviguer',
  'engineering.swipeHint': 'balayez ou utilisez les flèches',
  'engineering.prev': 'Précédent',
  'engineering.next': 'Suivant',
  'engineering.ongoing': 'en cours',
  'engineering.stack': 'Stack',
  'nav.engineering': 'Développement',
  'sports.title': 'Sport',
  'sports.subtitle': 'Un disque, un ballon, deux roues — dans cet ordre.',
  'sports.empty': 'Aucune entrée publiée pour le moment.',
  'sports.kbdHint': 'utilisez ← / → pour naviguer',
  'sports.swipeHint': 'balayez ou utilisez les flèches',
  'sports.prev': 'Précédent',
  'sports.next': 'Suivant',
  'sports.ongoing': 'en cours',
  'nav.sports': 'Sport',
  'teaching.title': 'Enseignement',
  'teaching.subtitle': 'Trois piliers — autonomie, adaptabilité, et sérieux-joyeux.',
  'teaching.empty': 'Aucun pilier publié pour le moment.',
  'teaching.kbdHint': 'utilisez ← / → pour naviguer',
  'teaching.swipeHint': 'balayez ou utilisez les flèches',
  'teaching.prev': 'Précédent',
  'teaching.next': 'Suivant',
  'contact.title': 'Contact',
  'footer.built': 'fait avec Astro',
};

const dictionaries: Record<Locale, typeof en> = { en, fr };

export type StringKey = keyof typeof en;

export function t(locale: Locale, key: StringKey): string {
  return dictionaries[locale][key];
}

export function localizePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${clean === '/' ? '' : clean}`.replace(/\/$/, '') + '/';
}
