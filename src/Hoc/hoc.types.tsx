// Lib
import { Edge } from '../components/Pages/pages-components.types';

export interface WithLayoutProps {
  data?: {
    allContentfulProject: {
      group: Array<{
        fieldValue: string;
        edges: Array<Edge>;
        totalCount: number;
      }>;
    };
  };
  locale?: string;
  banner?: boolean;
  fullHeight?: boolean;
}
