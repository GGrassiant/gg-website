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

/**
 * Metadata coming from Gatsby
 */

export interface SiteMetaData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: {
        name: string;
      };
      menu: {
        slug: string;
        label: string;
      };
    };
  };
}
