// Libs
import React from 'react';
import { Link } from 'gatsby';

// Utils
import ThemeContext from '../context/ThemeContext';

const SelectLanguage: React.FC<any> = (props) => {
  const { langs } = props;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const links = langs.map(({ langKey, link }) => (
    <li key={langKey}>
      <Link key={langKey} to={link}>
        {langKey}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{links}</ul>
    </div>
  );
};

const Header: React.FC<any> = ({ siteTitle }) => (
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
              langs={[
                { langKey: 'fr', link: '/fr' },
                { langKey: 'en', link: '/en' },
              ]}
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

export default Header;
