// Libs
import React from 'react';

// Utils
import { graphql } from 'gatsby';

// Components
import ProjectsPageComponent from '../components/Pages/ProjectsPageComponent';
import { WithLayoutProps } from '../Hoc/hoc.types';

const ProjectsPage: React.FC<WithLayoutProps> = (props) => {
  const { data, banner } = props;
  // Need to create a component to pass the data since we use withLayout HOC
  return <ProjectsPageComponent data={data} banner={banner} />;
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
