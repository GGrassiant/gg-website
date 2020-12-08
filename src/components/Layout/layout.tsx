// Libs
import React, { useMemo, useEffect, useContext } from 'react';

// Utils
import { Location } from '@reach/router';
import { SiteMasterData, Edge } from '../../../site';
import { ProjectContext } from '../../context/ProjectContext';
import { useSiteMetadata } from '../../utils/query-hooks';

// Styles
import './layout.scss';

// Components
import Header from '../Header/header';
import { getLocalizedDataFromContentful } from '../../utils/typescript.utils';

interface LayoutProps {
  children: Array<React.ReactElement> | React.ReactElement;
  locale: string;
  fullHeight?: boolean;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, locale, fullHeight = false } = props;
  const data: SiteMasterData = useSiteMetadata();
  const { setProjects, projects } = useContext(ProjectContext);

  // eslint-disable-next-line arrow-body-style
  const informationElements: Array<Edge> | undefined = useMemo(() => {
    return getLocalizedDataFromContentful(
      data.allContentfulProject?.group,
      locale,
    );
  }, [data.allContentfulProject, locale]);

  // load the projects in context on first mount
  useEffect((): void => {
    if (informationElements?.length && !projects?.length) {
      setProjects(informationElements);
    }
  }, [informationElements, projects, setProjects]);

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
