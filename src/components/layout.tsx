// Libs
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Utils
import ThemeContext from '../context/ThemeContext';

// Styles
import './layout.scss';

// Components
import Header from './header';

const Layout: React.FC<any> = (props) => {
  const { children } = props;
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className={theme.dark ? 'dark' : 'light'}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0 1.0875rem 1.45rem',
            }}
          >
            <main>{children}</main>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Layout;
