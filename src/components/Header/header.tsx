// Libs
import React, { useContext } from 'react';
import { IntlShape, useIntl } from 'react-intl';

// Utils
import { LocalizedLink } from 'gatsby-theme-i18n';
import { ThemeContext } from '../../context/ThemeContext';
import * as langsSettings from '../../utils/languages';
import * as siteMetaData from '../../utils/siteMetaData';
import { Menu } from '../../../site';
import { useSiteMetadata } from '../../utils/query-hooks';

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

const languagesHomeUrlArray: Array<string> = langsSettings.langs.reduce(
  (acc: Array<string>, cur: string) => {
    if (cur !== langsSettings.defaultLangKey) {
      acc.push(`/${cur}`, `/${cur}/`);
    }
    return acc;
  },
  ['/'],
);

export const isHome: (arg: string) => boolean = (path: string) =>
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

const getMenuItems = (
  pathname: string,
  locale: string,
  intl: IntlShape,
  numberOfProjects: number,
) => {
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
            {intl.formatMessage({ id: `${cur.label}` })}
          </LocalizedLink>
          {cur.slug === '/projects/' && (
            <span className={styles.projects__number}>{numberOfProjects}</span>
          )}
        </li>
      );
      return acc.concat(link);
    },
    [],
  );
};

const Header: React.FC<HeaderProps> = (props) => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  console.log('colorMode', colorMode);
  const {
    locale,
    location: {
      location: { pathname },
    },
  } = props;

  const {
    allContentfulProject: { group },
  } = useSiteMetadata();
  const numberOfProjects = group.length;

  const intl = useIntl();

  const toggleTheme = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  const toggleElement = () => {
    if (!colorMode) {
      return;
    }

    if (colorMode === 'dark') {
      // eslint-disable-next-line consistent-return
      return (
        <span role="img" aria-label="Sun" className="dark-switcher__toggle">
          🌞
        </span>
      );
    }

    // eslint-disable-next-line consistent-return
    return (
      <span role="img" aria-label="Moon" className="dark-switcher__toggle">
        🌝
      </span>
    );
  };

  return (
    <header className={styles.headerWrapper}>
      <h1 className={styles.headerWrapper__gg}>
        <LocalizedLink
          to="/"
          locale={locale}
          className={styles.headerWrapper__logo}
        >
          <p>Guillaume</p>
          <p>Grassiant</p>
        </LocalizedLink>
      </h1>
      <ul className={styles.headerWrapper__menu}>
        {getMenuItems(pathname, locale, intl, numberOfProjects)}
        <SelectLanguage pathname={pathname} locale={locale} />
        <li>
          <button
            className="dark-switcher"
            onClick={toggleTheme}
            onKeyDown={toggleTheme}
            type="button"
          >
            {toggleElement()}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
