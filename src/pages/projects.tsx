// Libs
import React from 'react';

// Utils
import { graphql } from 'gatsby';

// Components
import ProjectsPageComponent from '../components/Pages/ProjectsPageComponent';
import { WithLayoutProps } from '../Hoc/hoc.types';

const ProjectsPage: React.FC<WithLayoutProps> = (props) => {
  const { data } = props;
  // Need to create a component to pass the data since we use withLayout HOC
  return <ProjectsPageComponent data={data} />;
};

export const query = graphql`
  query {
    allContentfulProject {
      group(field: node_locale) {
        fieldValue
        totalCount
        edges {
          node {
            shortDescription
            slug
            id
          }
        }
      }
    }
  }
`;

export default ProjectsPage;
