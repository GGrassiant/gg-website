// Libs
import React from 'react';
import { useIntl } from 'react-intl';

// Utils
// import { LocalizedLink } from 'gatsby-theme-i18n';
// import * as siteMetaData from '../../utils/siteMetaData';
import { WithLayoutProps } from '../../Hoc/hoc.types';
// import { Edge } from '../../../pages';
// import { ensure } from '../../utils/typescript.utils';

// Components
import withLayout from '../../Hoc/PageWrapper/WithLayout';
import SEO from '../seo';

const ProjectsPageComponent: React.FC<WithLayoutProps> = (props) => {
  console.log(props);
  const intl = useIntl();
  // const { data, locale } = props;
  // const informationElements: Array<Edge> = ensure(
  //   data?.allContentfulProject.group.find((lang) => lang.fieldValue === locale),
  // ).edges;

  // const renderInformation = (): Array<React.ReactElement> =>
  //   informationElements.map(
  //     (edge): React.ReactElement => (
  //       <li key={edge.node.id}>
  //         <LocalizedLink to={`${siteMetaData.menu[1].slug}${edge.node.slug}`}>
  //           {edge.node.shortDescription}
  //         </LocalizedLink>
  //       </li>
  //     ),
  //   );

  return (
    <>
      <SEO title="Project page" />
      <p style={{ marginTop: '1rem' }}>
        {intl.formatMessage({
          id: 'Come Back',
        })}
      </p>
    </>
  );
};

const fullHeight = true;

export default withLayout(ProjectsPageComponent, fullHeight);
