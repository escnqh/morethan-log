/*
 * @Date: 2023-01-11 14:20:45
 * @LastEditors: Peelson github@peelson.cn
 * @LastEditTime: 2023-01-13 19:37:05
 * @FilePath: /morethan-log/morethan-log.config.js
 */
const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Peelson',
    image: '/avatar.png',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Life R.D.',
    bio: 'TALK TO ME.',
    email: 'peelson@peelson.cn',
    linkedin: '',
    github: '',
    instagram: '',
  },
  projects: [
    {
      name: '',
      href: ''
    }
  ],
  // blog setting (required)
  blog: {
    title: 'Peelson\'s Blog',
    description: 'Welcome to Peelson\'s Blog!',
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://peelsonx.com',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'escnqh/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
