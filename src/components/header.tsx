// Libs
import React from 'react';
import { Link } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LocalizedLink } from 'gatsby-theme-i18n';

// Utils
import ThemeContext from '../context/ThemeContext';

const SelectLanguage: React.FC<any> = (props) => {
  const { langs, pathname, locale } = props;
  const isHome = (path: string) => ['/', '/fr', '/fr/'].includes(path);

  const links = langs.map(({ langKey }: any) => {
    // eslint-disable-next-line
    const to = isHome(pathname)
      ? '/'
      : langKey === 'en' && locale !== 'en'
      ? pathname.slice(3)
      : pathname;
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

const Header: React.FC<any> = (props) => {
  const {
    siteTitle,
    locale,
    location: {
      location: { pathname },
    },
  } = props;
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
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
              }}
            >
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  {siteTitle}
                </Link>
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
