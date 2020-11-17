// Lib
import { Edge, DescriptionEdge } from '../../pages';
import { FooterProps } from '../components/Footer/footer-types';

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
  ctaContent?: Pick<FooterProps, 'ctaContent'>;
}
