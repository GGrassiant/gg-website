// Libs
import React from 'react';
import { useIntl } from 'react-intl';
import { AiOutlineArrowRight } from 'react-icons/ai';

// Components
import CTA from '../index';

const GetToKnowMe: React.FC = () => {
  const intl = useIntl();
  const translatedCta = intl.formatMessage(
    { id: 'get to know me' },
    { breakingLine: '<br/>' },
  );
  return (
    <CTA link="about">
      <p dangerouslySetInnerHTML={{ __html: translatedCta }} />
      <AiOutlineArrowRight />
    </CTA>
  );
};

export default GetToKnowMe;
