// Libs
import React from 'react';

// Utils
import { LocalizedLink } from 'gatsby-theme-i18n';
import ThemeContext from '../../context/ThemeContext';
import * as langsSettings from '../../utils/languages';
import * as siteMetaData from '../../utils/siteMetaData';
import { Menu } from '../../../site';

// Styles
import styles from './header.module.scss';

// Helpers
interface HeaderProps {
  siteTitle: string;
  locale: string;
  location: {
    location: { pathname: string };
  };
}

interface NavigationItem {
  slug: string;
  label: string;
}

const languagesHomeUrlArray: Array<string> = langsSettings.langs.reduce(
  (acc: Array<string>, cur: string) => {
    if (cur !== langsSettings.defaultLangKey) {
      acc.push(`/${cur}`, `/${cur}/`);
    }
    return acc;
  },
  ['/'],
);
const isHome: (arg: string) => boolean = (path: string) =>
  languagesHomeUrlArray.includes(path);

const SelectLanguage: React.FC<{ pathname: string; locale: string }> = (
  props,
) => {
  const { pathname, locale } = props;

  let to: string;

  if (isHome(pathname)) {
    to = '/';
  } else if (locale !== `${langsSettings.defaultLangKey}`) {
    to = pathname.slice(3);
  } else {
    to = pathname;
  }

  const newLocale =
    locale === `${langsSettings.defaultLangKey}`
      ? 'fr'
      : `${langsSettings.defaultLangKey}`;

  return (
    <li className={styles.lang__wrapper}>
      <LocalizedLink to={to} language={newLocale} className={styles.lang}>
        <span>{newLocale}</span>
      </LocalizedLink>
    </li>
  );
};

const getMenuItems = (pathname: string, locale: string) => {
  const delocalizedPath: string =
    locale === `${langsSettings.defaultLangKey}` ? pathname : pathname.slice(3);

  return siteMetaData.menu.reduce(
    (acc: Array<React.ReactElement>, cur: Menu) => {
      if (isHome(cur.slug)) {
        return acc;
      }

      const className: string =
        !isHome(cur.slug) && delocalizedPath.startsWith(cur.slug)
          ? `${styles.headerWrapper__menu} ${styles.active}`
          : '';

      const link = (
        <li key={cur.slug}>
          <LocalizedLink to={cur.slug} className={className}>
            {cur.label}
          </LocalizedLink>
        </li>
      );
      return acc.concat(link);
    },
    [],
  );
};

const Header: React.FC<HeaderProps> = (props) => {
  const {
    locale,
    location: {
      location: { pathname },
    },
  } = props;

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <header className={styles.headerWrapper}>
          <div className={styles.headerWrapper__gg}>
            <LocalizedLink
              to="/"
              locale={locale}
              className={styles.headerWrapper__logo}
            >
              <p>Guillaume</p>
              <p>Grassiant</p>
            </LocalizedLink>
          </div>
          <ul className={styles.headerWrapper__menu}>
            {getMenuItems(pathname, locale)}
            <SelectLanguage pathname={pathname} locale={locale} />
            <button
              className="dark-switcher"
              onClick={theme.toggleDark}
              onKeyDown={theme.toggleDark}
              type="button"
            >
              {theme.dark ? (
                <span className="dark-switcher__toggle">☀</span>
              ) : (
                <span>☾</span>
              )}
            </button>
          </ul>
        </header>
      )}
    </ThemeContext.Consumer>
  );
};

export default Header;
