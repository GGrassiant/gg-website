import { ContentfulProject, ContentfulDescription, ResumeFile } from './site';

export type Edge = {
  node: ContentfulProject;
};

export type DescriptionEdge = {
  node: ContentfulDescription;
};

export type ResumeEdge = {
  node: ResumeFile;
};

export interface ProjectPageComponentProps {
  data: {
    contentfulProject: ContentfulProject;
  };
}
