// Libs
import React from 'react';
import { useIntl } from 'react-intl';
import { AiOutlineArrowRight } from 'react-icons/ai';

// Components
import CTA from '../index';

const LetsConnect: React.FC = () => {
  const intl = useIntl();
  return (
    <CTA link="contact" animate animationDirection="x">
      {intl.formatMessage({ id: 'contact me' })}
      <AiOutlineArrowRight />
    </CTA>
  );
};

export default LetsConnect;
