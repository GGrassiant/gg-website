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
        {
          fieldValue: 'en',
          totalCount: 2,
          edges: [
            {
              node: {
                id: 'lol',
                slug: 'lol',
                title: 'lolz',
                mainTech: 'internet',
                year: '1982',
                mainPicture: {
                  fluid: {
                    base64:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQA…kZXNjcmlwdGlvbgBEaXNwbGF5FxuVuAAAAABJRU5ErkJggg==',
                    aspectRatio: 1.124251497005988,
                    src:
                      '//images.ctfassets.net/77qd04dslv2l/10TJDRTs9naw0r…reen_Shot_2020-07-18_at_3.41.48_PM.png?w=500&q=50',
                    srcSet:
                      '//images.ctfassets.net/77qd04dslv2l/10TJDRTs9naw0r…-07-18_at_3.41.48_PM.png?w=1502&h=1336&q=50 1502w',
                    sizes: '(max-width: 500px) 100vw, 500px',
                  },
                  title: 'lol-picture',
                },
              },
            }
          ],
        }
      ]
    }
  })),
};
