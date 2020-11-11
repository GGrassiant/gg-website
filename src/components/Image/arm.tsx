// Libs
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ArmImage: React.FC = () => {
  const data: { [key: string]: any } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "arm.jpg" }) {
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
      alt="arm"
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default ArmImage;
