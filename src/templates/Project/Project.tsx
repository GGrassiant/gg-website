// Libs
import React from 'react';
import { graphql } from 'gatsby';

// Components
import ProjectPageComponent from '../../components/Pages/ProjectPageComponent';

const Project: React.FC<any> = (props) => {
  const { data } = props;
  return <ProjectPageComponent data={data} />;
};

export default Project;

export const query = graphql`
  query ProjectQuery($id: String!) {
    contentfulProject(id: { eq: $id }) {
      title
    }
  }
`;
