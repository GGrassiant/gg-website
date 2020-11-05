// Libs
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';

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
  banner?: boolean;
  fullHeight?: boolean;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, locale, banner = false, fullHeight = false } = props;
  const intl = useIntl();
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
        {banner && (
          <div className="banner">
            <p className="banner-content">
              {intl.formatMessage({
                id: 'Under construction ¯\\_(ツ)_/¯, come back soon fren 🐶',
              })}
            </p>
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
          <main className="full-height-main">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
