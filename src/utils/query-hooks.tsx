// Libs
import { graphql, useStaticQuery } from 'gatsby';

// Utils
import { SiteMasterData } from '../../site';

export const ContenfulDataQuery = graphql`
  query ContentfulData {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProject {
      group(field: node_locale) {
        fieldValue
        totalCount
        edges {
          node {
            title
            mainTech
            year
            slug
            id
            mainPicture {
              id
              fluid(maxWidth: 500) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`;

export const useSiteMetadata = (): SiteMasterData => useStaticQuery(ContenfulDataQuery);
