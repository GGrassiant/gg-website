// Libs
import React from 'react';

// Utils
import { TitleProps } from './title-types';

// Styles
import { TitleWrapper } from './title-styles';

const Title: React.FC<TitleProps> = (props) => {
  const { size = 'normal', weight = 'regular', children } = props;

  return (
    <TitleWrapper size={size} weight={weight}>
      {children}
    </TitleWrapper>
  );
};

export default Title;
