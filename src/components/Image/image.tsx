// Libs
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Image: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gg2020.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
    }
  `);

  return (
    <GatsbyImage
      alt="gg-avatar"
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
      }}
    />
  );
};

export default Image;
