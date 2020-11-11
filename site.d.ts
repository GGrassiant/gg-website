/**
 * Projects coming from the headless CMS
 * Contentful
 */
export interface ContentfulProject {
  title: string;
  slug: string;
  shortDescription: string;
  id: string;
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
export const menuItems = ['projects', 'about'] as const;
