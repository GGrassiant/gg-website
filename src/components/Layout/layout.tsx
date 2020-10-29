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
  fullHeight?: boolean;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, locale, banner = false, fullHeight = false } = props;
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
        <div className={theme.dark ? 'dark' : 'light'}>
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
                height: '100px',
                fontFamily: 'Piazzolla',
                color: '#B8B8B8',
                fontWeight: 300,
                fontSize: '50px',
                lineHeight: '99.4px',
                background: 'transparent',
              }}
            >
              Sliding banner lolz les copains le fun dis donc
            </div>
          )}
          <div
            className={`content-wrapper ${
              // eslint-disable-next-line no-nested-ternary
              fullHeight
                ? banner
                  ? 'with-banner-full-height'
                  : 'full-height'
                : ''
            }`}
          >
            <main className="full-height-main">
              {/* @ts-ignore */}
              {React.cloneElement(children, { darkTheme: theme.dark })}
            </main>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Layout;
