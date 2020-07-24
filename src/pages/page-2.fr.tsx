// Libs
import React from 'react';
import { Link } from 'gatsby';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage: React.FC<any> = (props) => {
  const {
    pageContext: { langKey },
  } = props;
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to={`/${langKey}`}>Go back to the homepage</Link>
    </Layout>
  );
};

export default SecondPage;
