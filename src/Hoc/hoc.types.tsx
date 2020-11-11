// Lib
import { Edge, DescriptionEdge } from '../../pages';

export interface WithLayoutProps {
  data?: {
    allContentfulProject: {
      group: Array<{
        fieldValue: string;
        edges: Array<Edge>;
        totalCount: number;
      }>;
    };
    allContentfulDescription: {
      group: Array<{
        fieldValue: string;
        edges: Array<DescriptionEdge>;
        totalCount: number;
      }>;
    };
  };
  locale?: string;
  fullHeight?: boolean;
}
