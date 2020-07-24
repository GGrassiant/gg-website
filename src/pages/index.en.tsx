// Libs
import React from "react"
import { graphql, Link } from "gatsby"

// Components
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPageEn = (props: any) => {
  console.log(props.data);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/en/page-2/">Go to page 2</Link> <br />
    </Layout>
  );
}

export default IndexPageEn;

export const query = graphql`
  query {
    allContentfulProject(filter: {node_locale: {eq: "en"}}) {
      edges {
        node {
          title
        }
      }
    }
  }
`;
