// Libs
import React from 'react';

// Utils
import { graphql } from 'gatsby';
import ProjectsPageComponent from '../components/Pages/ProjectsPageComponent';

const ProjectsPage: React.FC<any> = (props) => {
  const { data } = props;
  // Need to create a component to pass the data since we use withLayout HOC
  return <ProjectsPageComponent data={data} />;
};

export const query = graphql`
  query {
    allContentfulProject {
      group(field: node_locale) {
        edges {
          node {
            shortDescription
          }
        }
      }
    }
  }
`;

export default ProjectsPage;
