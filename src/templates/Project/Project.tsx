// Libs
import React from 'react';
import { graphql } from 'gatsby';

const Project: React.FC<any> = ({
  data: {
    contentfulProject: { title },
  },
}) => <div>Coucou, {title}</div>;

export default Project;

export const query = graphql`
  query ProjectQuery($id: String!) {
    contentfulProject(id: { eq: $id }) {
      title
    }
  }
`;
