// Libs
import React from 'react';

// Utils
import { ProjectPageComponentProps } from '../../../pages';

// Components
import withLayout from '../../Hoc/PageWrapper/WithLayout';
import SEO from '../seo';

const ProjectPageComponent: React.FC<ProjectPageComponentProps> = (props) => {
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
