const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            id
            node_locale
            shortDescription
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    return reporter.panicOnBuild('Error while running GraphQL query.');
  }

  const ProjectTemplate = path.resolve('src/templates/Project/Project.tsx');

  return result.data.allContentfulProject.edges.forEach(({ node }) => {
    const lang = `${node.node_locale}/`;
    let pagePath;
    if (node.node_locale === 'en') {
      pagePath = `projects/${node.slug}`;
    } else {
      pagePath = `${lang}projects/${node.slug}`;
    }

    createPage({
      path: pagePath,
      component: ProjectTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
