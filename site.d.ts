/**
 * Projects coming from the headless CMS
 * Contentful
 */
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
  mainTech: string;
  year: string;
}

export interface ContentfulDescription {
  content: string;
}

/**
 * Metadata coming from Gatsby
 */

export type Menu = {
  slug: string;
  label: string;
};

export interface SiteMetaData {
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
}

// MENU: Add all new routes to this constant
export type menuItems = 'about' | 'blog' | 'contact' | '';
