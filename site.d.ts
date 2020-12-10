/**
 * Projects coming from the headless CMS
 * Contentful
 */
// Libs
import { FluidObject } from 'gatsby-image';

interface ContenfulImage {
  title: string;
  fluid: FluidObject;
}

export interface ContentfulProject {
  title: string;
  slug: string;
  shortDescription: string;
  id: string;
  mainPicture: ContenfulImage;
  projectPictures: Array<ContenfulImage>;
  mainTech: string;
  year: string;
  link: string;
  team: string;
  techStack: string;
}

export interface ContentfulDescription {
  content: string;
}

export interface ContentfulTechSkill {
  id: string;
  skill: string;
}

export type Edge = {
  node: ContentfulProject;
};

export type DescriptionEdge = {
  node: ContentfulDescription;
};

export type TechSkillEdge = {
  node: ContentfulTechSkill;
};

export type ResumeEdge = {
  node: ResumeFile;
};

export interface ProjectPageComponentProps {
  data: {
    contentfulProject: ContentfulProject;
  };
}

export interface ResumeFile {
  id: string;
  file: {
    url: string;
  };
}

/**
 * Metadata coming from Gatsby
 */

export type Menu = {
  slug: string;
  label: string;
};

export interface SiteMasterData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: {
        name: string;
      };
      menu: Menu;
    };
  };
  allContentfulProject: {
    group: Array<{
      fieldValue: string;
      edges: Array<Edge>;
      totalCount: number;
    }>;
  };
}

export type ContentfulDataGroup = Array<{
  fieldValue: string;
  edges: Array<Edge>;
  totalCount: number;
}>;

// MENU: Add all new routes to this constant
export type menuItems = 'about' | 'blog' | 'contact' | '';
