// Libs
import React from 'react';

// Utils
import { generateRandomFooterCta } from '../utils/typescript.utils';
import { WithLayoutProps } from '../Hoc/hoc.types';

// Components
import GetToKnowMe from '../components/CTA/footer-cta/GetToKnowMe';
import withLayout from '../Hoc/PageWrapper/WithLayout';

const ContactPage: React.FC<WithLayoutProps> = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      paddingTop: '5rem',
    }}
  >
    Coucou About Page
  </div>
);

const fullHeight = true;
const ctaContent = {
  title: generateRandomFooterCta(),
  component: () => <GetToKnowMe />,
};

export default withLayout(ContactPage, fullHeight, ctaContent);
