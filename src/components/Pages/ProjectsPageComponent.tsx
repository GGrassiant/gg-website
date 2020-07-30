// Libs
import React from 'react';

// Utils
// import { LocalizedLink } from 'gatsby-theme-i18n';

// Components
import withLayout from '../../Hoc/PageWrapper/WithLayout';
import SEO from '../seo';

const ProjectsPageComponent: React.FC<any> = (props) => {
  const { data, locale } = props;
  console.log(data, locale);
  return (
    <>
      <SEO title="Project page" />
      <div>Coucou Page Project Index</div>
    </>
  );
};

export default withLayout(ProjectsPageComponent);
