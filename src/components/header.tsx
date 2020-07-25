// Libs
import { Link } from 'gatsby';
import React from 'react';

// Utils
import ThemeContext from '../context/ThemeContext';

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
