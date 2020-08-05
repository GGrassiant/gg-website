// Lib
import { Edge } from '../components/Pages/pages-components.types';

export interface WithLayoutProps {
  data: {
    allContentfulProject: {
      group: Array<{ fieldValue: string; edges: Array<Edge> }>;
    };
    contentfulProject: { title: string };
  };
  locale?: string;
}
