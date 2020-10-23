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
  banner?: boolean;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, locale, banner = false } = props;
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
          <Location>
            {(location) => (
              <Header
                siteTitle={data.site.siteMetadata.title}
                location={location}
                locale={locale}
              />
            )}
          </Location>
          {banner && (
            <div
              style={{
                width: '100%',
                height: '20px',
                backgroundColor: 'red',
                marginTop: '1rem',
              }}
            >
              Sliding banner lolz les copains le fun dis donc #nomoreubi
            </div>
          )}
          <div
            style={{
              padding: '0 2rem',
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
