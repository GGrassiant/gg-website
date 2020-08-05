const languages = require('./languages');

module.exports = {
  siteUrl: 'https://gg-website.herokuapp.com/',
  title: 'Guillaume Grassiant - Software developer',
  description: 'React lover, JavaScript & Rails aficionado, Flutter enthusiast',
  author: {
    name: 'Guillaume Grassiant',
    bio:
      'I am a software developer from Montreal with a knack for Front-End development with React',
    homeCity: 'Montreal',
    email: 'guillaumegrassiant@hey.com',
    defaultLink: 'https://github.com/ggrassiant',
  },
  sourceCodeLink: 'https://github.com/ggrassiant/gg-website',
  menu: [
    { label: 'home', slug: '/' },
    { label: 'projects', slug: '/projects/' },
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
