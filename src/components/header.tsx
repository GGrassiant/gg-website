// Libs
import React from 'react';

// Utils
import { LocalizedLink } from 'gatsby-theme-i18n';
import ThemeContext from '../context/ThemeContext';
import * as langsSettings from '../utils/languages';
import * as siteMetaData from '../utils/siteMetaData';

// Helpers
const languagesHomeUrlArray = langsSettings.langs.reduce(
  (acc: Array<string>, cur: string) => {
    if (cur !== langsSettings.defaultLangKey) {
      acc.push(`/${cur}`, `/${cur}/`);
    }
    return acc;
  },
  ['/'],
);
const isHome = (path: string) => languagesHomeUrlArray.includes(path);
const styleToggle = {
  fontWeight: 'bold',
};
const defaultStyle = {};

const SelectLanguage: React.FC<any> = (props) => {
  const { pathname, locale } = props;

  const links = langsSettings.langs.map((langKey: string) => {
    let to;
    if (isHome(pathname)) {
      to = '/';
    } else if (
      langKey === `${langsSettings.defaultLangKey}` &&
      locale !== `${langsSettings.defaultLangKey}`
    ) {
      to = pathname.slice(3);
    } else {
      to = pathname;
    }

    return (
      <li key={langKey}>
        <LocalizedLink key={langKey} to={to} language={langKey}>
          <span style={langKey === locale ? styleToggle : defaultStyle}>
            {langKey}
          </span>
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

const getMenuItems = (pathname: string, locale: string) =>
  siteMetaData.menu.map((item: any) => {
    const delocalizedPath =
      locale === `${langsSettings.defaultLangKey}`
        ? pathname
        : pathname.slice(3);
    let linkStyle;
    if (isHome(pathname) && isHome(item.slug)) {
      linkStyle = styleToggle;
    } else if (!isHome(item.slug) && delocalizedPath.startsWith(item.slug)) {
      linkStyle = styleToggle;
    } else {
      linkStyle = defaultStyle;
    }
    return (
      <LocalizedLink to={item.slug} key={item.slug}>
        <li style={linkStyle}>{item.label}</li>
      </LocalizedLink>
    );
  });

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
              <SelectLanguage pathname={pathname} locale={locale} />
            </div>
            <ul>{getMenuItems(pathname, locale)}</ul>
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
