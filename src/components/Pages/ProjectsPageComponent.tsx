// Libs
import React from 'react';

// Utils
import { LocalizedLink } from 'gatsby-theme-i18n';

// Components
import withLayout from '../../Hoc/PageWrapper/WithLayout';
import SEO from '../seo';

const ProjectsPageComponent: React.FC<any> = (props) => {
  const { data, locale } = props;
  const informationElements = data.allContentfulProject.group.find(
    (lang: any) => lang.fieldValue === locale,
  ).edges;

  const renderInformation = () =>
    informationElements.map((edge: any) => (
      <li key={edge.node.id}>
        <LocalizedLink to={`/projects/${edge.node.slug}`}>
          {edge.node.shortDescription}
        </LocalizedLink>
      </li>
    ));

  return (
    <>
      <SEO title="Project page" />
      <ul>{renderInformation()}</ul>
    </>
  );
};

export default withLayout(ProjectsPageComponent);
