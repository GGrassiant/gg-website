// Libs
import React, { useMemo, useEffect, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Utils
import { Location } from '@reach/router';
// TODO: retype
// import { SiteMetaData } from '../../../site';
import { ProjectContext } from '../../context/ProjectContext';

// Styles
import './layout.scss';

// Components
import Header from '../Header/header';
import { Edge } from '../../../pages';
import { getLocalizedDataFromContentful } from '../../utils/typescript.utils';

interface LayoutProps {
  children: Array<React.ReactElement> | React.ReactElement;
  locale: string;
  fullHeight?: boolean;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, locale, fullHeight = false } = props;
  const data: any = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulProject {
        group(field: node_locale) {
          fieldValue
          totalCount
          edges {
            node {
              title
              mainTech
              year
              slug
              id
              githubLink
              mainPicture {
                id
                fluid(maxWidth: 500) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const { setProjects, projects } = useContext(ProjectContext);

  const informationElements: Array<Edge> | undefined = useMemo(() => {
    if (data && locale) {
      return getLocalizedDataFromContentful(
        data.allContentfulProject.group,
        locale,
      );
    }
    return undefined;
  }, [data, locale]);

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
