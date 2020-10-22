// Libs
import React from 'react';

// Utils
import { LocalizedLink } from 'gatsby-theme-i18n';
import ThemeContext from '../../context/ThemeContext';
import * as langsSettings from '../../utils/languages';
import * as siteMetaData from '../../utils/siteMetaData';

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
    <li style={{ width: '1.3rem' }}>
      <LocalizedLink to={to} language={newLocale} className={styles.lang}>
        <span>{newLocale}</span>
      </LocalizedLink>
    </li>
  );
};

const getMenuItems = (pathname: string, locale: string) =>
  siteMetaData.menu.map(
    (item: NavigationItem): React.ReactElement => {
      const delocalizedPath: string =
        locale === `${langsSettings.defaultLangKey}`
          ? pathname
          : pathname.slice(3);

      let className: string;
      if (isHome(pathname) && isHome(item.slug)) {
        className = `${styles.headerWrapper__menu} ${styles.active}`;
      } else if (!isHome(item.slug) && delocalizedPath.startsWith(item.slug)) {
        className = `${styles.headerWrapper__menu} ${styles.active}`;
      } else {
        className = '';
      }

      return (
        <li key={item.slug}>
          <LocalizedLink to={item.slug} className={className}>
            {item.label}
          </LocalizedLink>
        </li>
      );
    },
  );

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
            <p>Guillaume</p>
            <p>Grassiant</p>
          </div>
          <ul className={styles.headerWrapper__menu}>
            {getMenuItems(pathname, locale)}
            <SelectLanguage pathname={pathname} locale={locale} />
            {/* eslint-disable-next-line max-len */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <li className="dark-switcher" onClick={theme.toggleDark}>
              {theme.dark ? (
                <span className="dark-switcher__toggle">☀</span>
              ) : (
                <span>☾</span>
              )}
            </li>
          </ul>
        </header>
      )}
    </ThemeContext.Consumer>
  );
};

export default Header;
