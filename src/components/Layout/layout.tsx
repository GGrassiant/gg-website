// Libs
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Utils
import { Location } from '@reach/router';
import { SiteMetaData } from '../../../site';

// Styles
import './layout.scss';

// Components
import Header from '../Header/header';

interface LayoutProps {
  children: Array<React.ReactElement> | React.ReactElement;
  locale: string;
  fullHeight?: boolean;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, locale, fullHeight = false } = props;
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
    <>
      <Location>
        {(location) => (
          <Header
            siteTitle={data.site.siteMetadata.title}
            location={location}
            locale={locale}
          />
        )}
      </Location>
      <div className="page-wrapper">
        <div
          className={`content-wrapper ${
            // eslint-disable-next-line no-nested-ternary
            fullHeight ? 'full-height' : ''
          }`}
        >
          <main className="full-height-main">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
