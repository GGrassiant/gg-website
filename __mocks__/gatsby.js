// Libs
const React = require('react');
const gatsby = jest.requireActual('gatsby');

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      }),
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn().mockImplementation(() => ({
    site: {
      siteMetadata: {
        menu: [
          { label: 'home', slug: '/' },
          { label: 'projects', slug: '/projects/' },
        ]
      }
    },
    themeI18N: {
      defaultLang: 'en',
      config: {
        code: 'en',
        hrefLang: 'en-CA',
        name: 'English',
        localName: 'English',
        langDir: 'ltr',
        dateFormat: 'MM/DD/YYYY',
      },
    },
  })),
};
