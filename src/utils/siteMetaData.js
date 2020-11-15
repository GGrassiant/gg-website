// Utils
const languages = require('./languages');

module.exports = {
  siteUrl: 'https://www.guillaumegrassiant.com/',
  title: 'Guillaume Grassiant - Web developer',
  description: 'React lover, JavaScript & Rails aficionado',
  author: {
    name: 'Guillaume Grassiant',
    bio:
      'I am a Web developer from Montreal with a knack for Front-End development with React',
    homeCity: 'Montreal',
    email: 'guillaumegrassiant@hey.com',
    defaultLink: 'https://github.com/ggrassiant',
  },
  sourceCodeLink: 'https://github.com/ggrassiant/gg-website',
  // MENU: Add all new routes to this constant. The order in the array will be the order in the menu
  // Don't forget to add translations in the locale files
  menu: [
    { label: 'home', slug: '/' },
    { label: 'about', slug: '/about/' },
  ],
  languages,
  contact: [
    {
      type: 'email',
      value: 'guillaumegrassiant@hey.com',
      link: 'mailto:guillaumegrassiant@hey.com',
    },
    {
      type: 'phone',
      value: '+1 514 823 6883',
      country: 'can',
      link: 'tel:+1 514 823 6883',
    },
  ],
};
