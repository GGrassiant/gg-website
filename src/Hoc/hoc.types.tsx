// Lib
import { Edge, DescriptionEdge, ResumeEdge, TechSkillEdge } from '../../site';
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
    allContentfulAsset: {
      edges: Array<ResumeEdge>;
    };
    allContentfulTechSkills: {
      group: Array<{
        fieldValue: string;
        edges: Array<TechSkillEdge>;
      }>;
    };
  };
  locale?: string;
  fullHeight?: boolean;
  ctaContent?: Pick<FooterProps, 'ctaContent'>;
}
