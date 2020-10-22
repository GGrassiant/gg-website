// Libs
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Utils
import { Location } from '@reach/router';
import ThemeContext from '../../context/ThemeContext';
import { SiteMetaData } from '../../../site';

// Styles
import './layout.scss';

// Components
import Header from '../Header/header';

interface LayoutProps {
  children: Array<React.ReactElement> | React.ReactElement;
  locale: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, locale } = props;
  const data: SiteMetaData = useStaticQuery(graphql`
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
        <div
          className={theme.dark ? 'dark' : 'light'}
          style={{ height: '100vh' }}
        >
          <div
            style={{
              height: '100%',
              padding: '0 2rem',
            }}
          >
            <Location>
              {(location) => (
                <Header
                  siteTitle={data.site.siteMetadata.title}
                  location={location}
                  locale={locale}
                />
              )}
            </Location>
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
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Layout;
