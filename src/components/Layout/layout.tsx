// Libs
import React, { useMemo, useEffect, useContext } from 'react';

// Utils
import { Location } from '@reach/router';
import { SiteMasterData, Edge } from '../../../site';
import { ProjectContext } from '../../context/ProjectContext';
import { useSiteMetadata } from '../../utils/query-hooks';

// Styles
import { PageWrapper, ContentWrapper, MainElement } from './layout-styles';

// Components
import Header from '../Header/header';
import { getLocalizedDataFromContentful } from '../../utils/typescript.utils';

interface LayoutProps {
  children: Array<React.ReactElement> | React.ReactElement;
  locale: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, locale } = props;
  const data: SiteMasterData = useSiteMetadata();
  const { setProjects, projects } = useContext(ProjectContext);

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
      <PageWrapper>
        <ContentWrapper>
          <MainElement>{children}</MainElement>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default Layout;
