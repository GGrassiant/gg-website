// Libs
import React from 'react';
import { graphql } from 'gatsby';

// Components
import AboutPageComponent from '../components/Pages/AboutPagecomponent';
import { WithLayoutProps } from '../Hoc/hoc.types';

const AboutPage: React.FC<WithLayoutProps> = (props) => {
  const { data } = props;
  return <AboutPageComponent data={data} />;
};

export const query = graphql`
  query {
    allContentfulDescription {
      group(field: node_locale) {
        edges {
          node {
            content
          }
        }
        fieldValue
      }
    }
    allContentfulAsset(
      filter: { contentful_id: { eq: "1nqOrhi7IYCsZqg1IbszGl" } }
    ) {
      edges {
        node {
          id
          file {
            url
          }
        }
      }
    }
    allContentfulTechSkills(sort: { order: ASC, fields: createdAt }) {
      group(field: node_locale) {
        edges {
          node {
            id
            skill
          }
        }
        fieldValue
      }
    }
  }
`;

export default AboutPage;
