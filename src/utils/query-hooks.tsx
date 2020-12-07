// Libs
import { graphql, useStaticQuery } from 'gatsby';
import { Edge } from '../../pages';

export type ContentfulDataGroup = Array<{
  fieldValue: string;
  edges: Array<Edge>;
  totalCount: number;
}>;

export interface ContenfulDataProject {
  group: ContentfulDataGroup;
}

export interface ContentFulData {
  allContentfulProject: ContenfulDataProject;
}

export const ContenfulDataQuery = graphql`
  query ContentfulData {
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
            githubLink
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

export const useSiteMetadata = (): ContentFulData =>
  useStaticQuery(ContenfulDataQuery);
