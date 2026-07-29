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
  'nav.music': 'Music',
  'nav.teaching': 'Teaching',
  'nav.contact': 'Contact',
  'home.location': 'Lyon, France',
  'home.headline': 'Creative spirit, at the intersection of art & technology.',
  'home.intro':
    'Software developer, music teacher, artist. I help people accomplish their creative vision — whatever the field.',
  'home.sectionsHeading': 'Around here',
  'home.contactCta': 'Get in touch →',
  'music.title': 'Music',
  'music.subtitle': 'Bands led, bands joined, and the sessions in between.',
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
  'teaching.subtitle': 'Three things I try to hold at once.',
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
  'nav.music': 'Musique',
  'nav.teaching': 'Enseignement',
  'nav.contact': 'Contact',
  'home.location': 'Lyon, France',
  'home.headline': 'Esprit créatif, à la croisée de l’art et de la technologie.',
  'home.intro':
    'Développeur logiciel, professeur de musique, artiste. J’accompagne les projets créatifs, quel que soit le domaine.',
  'home.sectionsHeading': 'Par ici',
  'home.contactCta': 'Me contacter →',
  'music.title': 'Musique',
  'music.subtitle': 'Frontman, sideman, et toutes les sessions qui m\'y ont mené',
  'music.empty': 'Aucun projet publié pour le moment.',
  'music.kbdHint': 'utilisez ← / → pour naviguer',
  'music.swipeHint': 'balayez ou utilisez les flèches',
  'music.prev': 'Projet précédent',
  'music.next': 'Projet suivant',
  'music.listen': 'Écouter',
  'music.visit': 'Voir ↗',
  'oddities.title': 'Curiosités',
  'oddities.subtitle': 'Les bizarreries hors-catégorie qui me captivent',
  'oddities.empty': 'Aucune entrée publiée pour le moment.',
  'oddities.kbdHint': 'utilisez ← / → pour naviguer',
  'oddities.swipeHint': 'balayez ou utilisez les flèches',
  'oddities.prev': 'Précédent',
  'oddities.next': 'Suivant',
  'oddities.inProgress': 'en cours',
  'nav.oddities': 'Curiosités',
  'engineering.title': 'Développement',
  'engineering.subtitle': 'Sept ans en prod, et la tech au quotidien',
  'engineering.empty': 'Aucune entrée publiée pour le moment.',
  'engineering.kbdHint': 'utilisez ← / → pour naviguer',
  'engineering.swipeHint': 'balayez ou utilisez les flèches',
  'engineering.prev': 'Précédent',
  'engineering.next': 'Suivant',
  'engineering.ongoing': 'en cours',
  'engineering.stack': 'Stack',
  'nav.engineering': 'Développement',
  'sports.title': 'Sport',
  'sports.subtitle': 'Un disque, un ballon, deux roues',
  'sports.empty': 'Aucune entrée publiée pour le moment.',
  'sports.kbdHint': 'utilisez ← / → pour naviguer',
  'sports.swipeHint': 'balayez ou utilisez les flèches',
  'sports.prev': 'Précédent',
  'sports.next': 'Suivant',
  'sports.ongoing': 'en cours',
  'nav.sports': 'Sport',
  'teaching.title': 'Enseignement',
  'teaching.subtitle': 'L\'apprentissage accessible et émancipateur',
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
