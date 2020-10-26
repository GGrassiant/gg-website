// Libs
import { graphql, useStaticQuery } from 'gatsby';
import { Edge } from '../components/Pages/pages-components.types';

export interface ContentFulData {
  allContentfulProject: {
    group: Array<{
      fieldValue: string;
      edges: Array<Edge>;
      totalCount: number;
    }>;
  };
}

export const ContenfulDataQuery = graphql`
  query ContentfulData {
    allContentfulProject {
      group(field: node_locale) {
        fieldValue
        totalCount
        edges {
          node {
            shortDescription
            slug
            id
          }
        }
      }
    }
  }
`;

export const useSiteMetadata = (): ContentFulData =>
  useStaticQuery(ContenfulDataQuery);
