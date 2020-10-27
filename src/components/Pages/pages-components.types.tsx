import { ContentfulProject } from '../../../site';

export type Edge = {
  node: ContentfulProject;
};

export interface ProjectPageComponentProps {
  data: {
    contentfulProject: ContentfulProject;
  };
}
