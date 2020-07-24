import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: any) => {
  return (
    <Layout>
      <SEO title="Page two"/>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to={`/${props.pageContext.langKey}`}>Go back to the homepage</Link>
    </Layout>
  );
}

export default SecondPage
