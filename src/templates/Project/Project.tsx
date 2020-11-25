// Libs
import React from 'react';
import { graphql } from 'gatsby';

// Utils
import { WithLayoutProps } from '../../Hoc/hoc.types';

// Components
import ProjectPageComponent from '../../components/Pages/ProjectPageComponent';

const Project: React.FC<WithLayoutProps> = (props) => {
  const { data } = props;
  return <ProjectPageComponent data={data} />;
};

export default Project;

export const query = graphql`
  query ProjectQuery($id: String!) {
    contentfulProject(id: { eq: $id }) {
      title
      year
      team
      techStack
      shortDescription
      link
      mainPicture {
        id
        fluid(maxWidth: 1220) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
