// Libs
import React from 'react';

// Utils
import { graphql } from 'gatsby';
import { ProjectsPageProps } from './pages.types';

// Components
import ProjectsPageComponent from '../components/Pages/ProjectsPageComponent';

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  // TODO: Check data type
  const { data } = props;
  // Need to create a component to pass the data since we use withLayout HOC
  return <ProjectsPageComponent data={data} />;
};

export const query = graphql`
  query {
    allContentfulProject {
      group(field: node_locale) {
        fieldValue
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
