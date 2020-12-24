// Libs
import React, { useContext } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';

// Utils
import { ThemeContext } from '../../context/ThemeContext';
import * as langsSettings from '../../utils/languages';
import * as siteMetaData from '../../utils/siteMetaData';
import { Menu } from '../../../site';

// Styles
import {
  ToggleThemeElement,
  HeaderElement,
  MenuWrapper,
  ToggleThemeWrapper,
} from './header-styles';

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
    <li className="lang-wrapper">
      <LocalizedLink
        to={to}
        language={newLocale}
        className="lang"
        data-testid="LocalizedLink"
      >
        <span>{newLocale}</span>
      </LocalizedLink>
    </li>
  );
};

const getMenuItems = (pathname: string, locale: string, intl: IntlShape) => {
  const delocalizedPath: string =
    locale === `${langsSettings.defaultLangKey}` ? pathname : pathname.slice(3);

  return siteMetaData.menu.reduce(
    (acc: Array<React.ReactElement>, cur: Menu) => {
      if (isHome(cur.slug) || cur.label === 'projects') {
        return acc;
      }

      const className =
        !isHome(cur.slug) && delocalizedPath.startsWith(cur.slug)
          ? 'active'
          : '';

      const link = (
        <li key={cur.slug}>
          <LocalizedLink to={cur.slug} className={className}>
            {intl.formatMessage({ id: `${cur.label}` })}
          </LocalizedLink>
        </li>
      );
      return acc.concat(link);
    },
    [],
  );
};

const Header: React.FC<HeaderProps> = (props) => {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const {
    locale,
    location: {
      location: { pathname },
    },
  } = props;
  const intl = useIntl();

  const toggleTheme = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  const toggleElement = () => (
    <ToggleThemeElement role="img" aria-label="toggle" colorMode={colorMode}>
      {colorMode === 'dark' ? '🌞' : '🌝'}
    </ToggleThemeElement>
  );

  return (
    <HeaderElement>
      <h1>
        <LocalizedLink to="/" locale={locale}>
          <p>
            Guillaume <span>Guillaume</span>
          </p>
          <p>
            Grassiant <span>Grassiant</span>
          </p>
        </LocalizedLink>
      </h1>
      <MenuWrapper>
        {getMenuItems(pathname, locale, intl)}
        <SelectLanguage pathname={pathname} locale={locale} />
        <li>
          <ToggleThemeWrapper
            className="dark-switcher"
            onClick={toggleTheme}
            onKeyDown={toggleTheme}
            type="button"
          >
            {toggleElement()}
          </ToggleThemeWrapper>
        </li>
      </MenuWrapper>
    </HeaderElement>
  );
};

export default Header;
