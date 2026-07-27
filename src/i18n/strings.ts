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
  'nav.about': 'About',
  'home.location': 'Lyon, France',
  'home.headline': 'Creative spirit, at the intersection of art & technology.',
  'home.intro':
    'Software developer, music teacher, artist. I help people accomplish their creative and entrepreneurial vision — whatever the field.',
  'home.cta.projects': 'See projects →',
  'home.cta.music': 'Listen to music →',
  'home.cta.teaching': 'Teaching →',
  'home.featured': 'Featured projects',
  'home.allProjects': 'All projects →',
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
  'teaching.title': 'Teaching',
  'teaching.subtitle': 'Lessons, workshops, and how to work with me.',
  'about.title': 'About',
  'about.contact': 'Elsewhere & contact',
  'footer.built': 'built with Astro',
} satisfies StringMap;

const fr: typeof en = {
  'site.tagline': 'Développeur, musicien, enseignant.',
  'nav.projects': 'Projets',
  'nav.music': 'Musique',
  'nav.teaching': 'Enseignement',
  'nav.about': 'À propos',
  'home.location': 'Lyon, France',
  'home.headline': 'Esprit créatif, à la croisée de l’art et de la technologie.',
  'home.intro':
    'Développeur logiciel, professeur de musique, artiste. J’accompagne celles et ceux qui portent une vision créative ou entrepreneuriale — dans tous les domaines.',
  'home.cta.projects': 'Voir les projets →',
  'home.cta.music': 'Écouter la musique →',
  'home.cta.teaching': 'Enseignement →',
  'home.featured': 'Projets en vedette',
  'home.allProjects': 'Tous les projets →',
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
  'teaching.title': 'Enseignement',
  'teaching.subtitle': 'Cours, ateliers et modalités de collaboration.',
  'about.title': 'À propos',
  'about.contact': 'Ailleurs & contact',
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
