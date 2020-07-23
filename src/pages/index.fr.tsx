import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }: any) => {
  console.log(data);
  return (
    <Layout>
  <SEO title="Home" />
  <h1>French Version</h1>
  <p>Lolz</p>
  <p>Les copains</p>
  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
  </div>
  <Link to="/page-2/">Go to page 2</Link> <br />
  <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
</Layout>
)}

export default IndexPage

export const query = graphql`
  query {
    allContentfulProject(filter: {node_locale: {eq: "fr"}}) {
      edges {
        node {
          title
        }
      }
    }
  }
`;
