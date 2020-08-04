// Libs
import React from 'react';

// Utils
import { WithLayoutProps } from '../../Hoc/hoc.types';

// Components
import withLayout from '../../Hoc/PageWrapper/WithLayout';
import SEO from '../seo';

const ProjectPageComponent: React.FC<WithLayoutProps> = (props) => {
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
