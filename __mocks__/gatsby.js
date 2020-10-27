// Libs
const React = require('react');

const gatsby = jest.requireActual('gatsby');

// Utils
const siteMetaData = require('../src/utils/siteMetaData');

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
        ...siteMetaData,
      },
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
    placeholderImage: {
      childImageSharp: {
        fluid: {
          aspectRatio: 1,
          src: 'test.png',
          srcSet: 'test',
          sizes: 'test,'
        }
      }
    },
    allContentfulProject: {
      group: [
        {fieldValue: 'en', totalCount: 2}
      ]
    }
  })),
};
