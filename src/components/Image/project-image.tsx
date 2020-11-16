// Libs
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image: React.FC = () => {
  const data: { [key: string]: any } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gg2020.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      alt="gg-avatar"
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default Image;
