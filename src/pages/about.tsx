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
  }
`;

export default AboutPage;
