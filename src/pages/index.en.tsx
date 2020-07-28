// // Libs
// import React from 'react';
// import { graphql, Link } from 'gatsby';
//
// // Components
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// import { useLocalization } from 'gatsby-theme-i18n';
// import { useIntl } from 'react-intl';
// import Layout from '../components/layout';
// import Image from '../components/image';
// import SEO from '../components/seo';
//
// const IndexPageEn: React.FC<any> = (props) => {
//   const intl = useIntl();
//   const { data } = props;
//   console.log(data);
//   const { locale, config, defaultLang } = useLocalization();
//   return (
//     <Layout>
//       <SEO title="Home" />
//       <h1>Hi people</h1>
//       <p>Welcome to your new Gatsby site.</p>
//       <p>Now go build something great.</p>
//       <div>Current locale: {locale}</div>
//       <div>Current defaultLang: {defaultLang}</div>
//       <h1>{intl.formatMessage({ id: 'helloWorld' })}</h1>
//       <pre>{JSON.stringify(config, null, 2)}</pre>
//       <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
//         <Image />
//       </div>
//       <Link to="/en/page-2/">Go to page 2</Link> <br />
//     </Layout>
//   );
// };
//
// export default IndexPageEn;
//
// export const query = graphql`
//   query {
//     allContentfulProject(filter: { node_locale: { eq: "en" } }) {
//       edges {
//         node {
//           title
//         }
//       }
//     }
//   }
// `;
