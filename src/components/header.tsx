// Libs
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// Utils
import { LocalizedLink } from 'gatsby-theme-i18n';
import ThemeContext from '../context/ThemeContext';

const SelectLanguage: React.FC<any> = (props) => {
  const { langs, pathname, locale } = props;
  const isHome = (path: string) => ['/', '/fr', '/fr/'].includes(path);

  const links = langs.map(({ langKey }: any) => {
    let to;
    if (isHome(pathname)) {
      to = '/';
    } else if (langKey === 'en' && locale !== 'en') {
      to = pathname.slice(3);
    } else {
      to = pathname;
    }

    return (
      <li key={langKey}>
        <LocalizedLink key={langKey} to={to} language={langKey}>
          {langKey}
        </LocalizedLink>
      </li>
    );
  });

  return (
    <div>
      <ul>{links}</ul>
    </div>
  );
};

const getMenuItems = (menu: any) =>
  menu.map((item: any) => (
    <LocalizedLink to={item.slug} key={item.slug}>
      <li>{item.label}</li>
    </LocalizedLink>
  ));

const Header: React.FC<any> = (props) => {
  const {
    siteTitle,
    locale,
    location: {
      location: { pathname },
    },
  } = props;
  const {
    site: {
      siteMetadata: { menu },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menu {
              slug
              label
            }
          }
        }
      }
    `,
  );

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div
          style={{
            background: 'rebeccapurple',
            marginBottom: '1.45rem',
          }}
        >
          <header
            style={{
              background: 'rebeccapurple',
              marginBottom: '1.45rem',
            }}
          >
            <div>
              <SelectLanguage
                pathname={pathname}
                langs={[{ langKey: 'fr' }, { langKey: 'en' }]}
                locale={locale}
              />
            </div>
            <ul>{getMenuItems(menu)}</ul>
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
              }}
            >
              <h1 style={{ margin: 0 }}>
                <LocalizedLink
                  to="/"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  {siteTitle}
                </LocalizedLink>
              </h1>
              <button
                className="dark-switcher"
                type="button"
                onClick={theme.toggleDark}
              >
                {theme.dark ? (
                  <span>Light mode ☀</span>
                ) : (
                  <span>Dark mode ☾</span>
                )}
              </button>
            </div>
          </header>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Header;
