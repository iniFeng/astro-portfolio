export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'iniFeng.me',
  DESCRIPTION: 'Freelance frontend web developer.',
  EMAIL: 'iniFeng@outlook.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 4,
  SITEURL: 'https://enscribe-dev-astro.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/', label: 'home' },
  { href: '/blog', label: 'blog' },
  // { href: '/authors', label: 'authors' },
  // { href: '/about', label: 'about' },
  // { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/iniFeng', label: 'GitHub' },
  { href: 'https://x.com/NaiiveLin', label: 'Twitter' },
  { href: 'inifeng@outlook.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
