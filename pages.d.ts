import { ContentfulProject, ContentfulDescription } from './site';

export type Edge = {
  node: ContentfulProject;
};

export type DescriptionEdge = {
  node: ContentfulDescription;
};

export interface ProjectPageComponentProps {
  data: {
    contentfulProject: ContentfulProject;
  };
}
