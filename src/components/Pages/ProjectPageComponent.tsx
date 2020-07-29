// Libs
import React from 'react';

// Components
import withLayout from '../../Hoc/PageWrapper/WithLayout';
import SEO from '../seo';

const ProjectPageComponent: React.FC<any> = (parentProps) => {
  const { props } = parentProps;
  const {
    data: {
      contentfulProject: { title },
    },
  } = props;

  return (
    <>
      <SEO title="Project page" />
      <div>Coucou, {title}</div>
    </>
  );
};

export default withLayout(ProjectPageComponent);
