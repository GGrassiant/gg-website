import React, { useEffect } from "react";
import { graphql, Link, navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return "en";
  }

  const lang = navigator && navigator.language && navigator.language.split("-")[0];
  if (!lang) return "en";

  switch (lang) {
    case "fr":
      return "fr";
    default:
      return "en";
  }
};

const IndexPage = () => {
  useEffect(() => {
    const urlLang = getRedirectLanguage();

    navigate(`/${urlLang}`);
  }, []);

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
    </Layout>);
};

export default IndexPage;

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
