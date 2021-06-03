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
              gatsbyImageData(width: 500)
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 500)
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const useSiteMetadata = (): SiteMasterData => useStaticQuery(ContenfulDataQuery);
