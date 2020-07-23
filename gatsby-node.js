const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: '/',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/en'
  });

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
    }`
  );

  if (result.errors) {
    return reporter.panicOnBuild(`Error while running GraphQL query.`);
  }

  const ProjectTemplate = path.resolve(`src/templates/Project/Project.tsx`);

  result.data.allContentfulProject.edges.forEach(({ node }) => {
    const lang = `${node.node_locale}/`;
    const pagePath = `${lang}project/${node.slug}`;

    createPage({
      path: pagePath,
      component: ProjectTemplate,
      context: {
        id: node.id,
      },
    })
  })
};
