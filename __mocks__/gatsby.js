// Libs
const React = require('react');

const gatsby = jest.requireActual('gatsby');

// Utils
const siteMetaData = require('../src/utils/siteMetaData');

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  navigate: jest.fn().mockImplementation((url) => {
    Object.defineProperty(window, 'location', {
      value: {
        pathname: url,
      },
    });
  }),
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
          sizes: 'test,',
        },
      },
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
                  gatsbyImageData: {
                    backgroundColor: '#f8f8f8',
                    height: 900,
                    images: {
                      sources: [
                        {
                          sizes: '(min-width: 1280px) 1280px, 100vw',
                          srcSet:
                            '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=320&h=225&q=50&fm=webp 320w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=640&h=450&q=50&fm=webp 640w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=1280&h=900&q=50&fm=webp 1280w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=2560&h=1800&q=50&fm=webp 2560w',
                          type: 'image/webp',
                        },
                      ],
                    },
                    fallback: {
                      sizes: '(min-width: 1280px) 1280px, 100vw',
                      src: '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=1280&h=900&q=50&fm=png',
                      srcSet:
                        '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=320&h=225',
                    },
                    layout: 'constrained',
                    width: 1280,
                  },
                  localFile: {
                    childImageSharp: {
                      gatsbyImageData: {
                        backgroundColor: '#f8f8f8',
                        height: 900,
                        images: {
                          sources: [
                            {
                              sizes: '(min-width: 1280px) 1280px, 100vw',
                              srcSet:
                                '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=320&h=225&q=50&fm=webp 320w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=640&h=450&q=50&fm=webp 640w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=1280&h=900&q=50&fm=webp 1280w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=2560&h=1800&q=50&fm=webp 2560w',
                              type: 'image/webp',
                            },
                          ],
                        },
                        fallback: {
                          sizes: '(min-width: 1280px) 1280px, 100vw',
                          src: '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=1280&h=900&q=50&fm=png',
                          srcSet:
                            '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=320&h=225',
                        },
                        layout: 'constrained',
                        width: 1280,
                      },
                    },
                  },
                  title: 'lol-picture',
                },
              },
            },
          ],
        },
        {
          fieldValue: 'fr',
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
                  gatsbyImageData: {
                    backgroundColor: '#f8f8f8',
                    height: 900,
                    images: {
                      sources: [
                        {
                          sizes: '(min-width: 1280px) 1280px, 100vw',
                          srcSet:
                            '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=320&h=225&q=50&fm=webp 320w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=640&h=450&q=50&fm=webp 640w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=1280&h=900&q=50&fm=webp 1280w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=2560&h=1800&q=50&fm=webp 2560w',
                          type: 'image/webp',
                        },
                      ],
                    },
                    fallback: {
                      sizes: '(min-width: 1280px) 1280px, 100vw',
                      src: '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=1280&h=900&q=50&fm=png',
                      srcSet:
                        '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=320&h=225',
                    },
                    layout: 'constrained',
                    width: 1280,
                  },
                  localFile: {
                    childImageSharp: {
                      gatsbyImageData: {
                        backgroundColor: '#f8f8f8',
                        height: 900,
                        images: {
                          sources: [
                            {
                              sizes: '(min-width: 1280px) 1280px, 100vw',
                              srcSet:
                                '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=320&h=225&q=50&fm=webp 320w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=640&h=450&q=50&fm=webp 640w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=1280&h=900&q=50&fm=webp 1280w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=2560&h=1800&q=50&fm=webp 2560w',
                              type: 'image/webp',
                            },
                          ],
                        },
                        fallback: {
                          sizes: '(min-width: 1280px) 1280px, 100vw',
                          src: '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=1280&h=900&q=50&fm=png',
                          srcSet:
                            '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=320&h=225',
                        },
                        layout: 'constrained',
                        width: 1280,
                      },
                    },
                  },
                  title: 'lol-picture',
                },
              },
            },
          ],
        },
      ],
    },
  })),
};
