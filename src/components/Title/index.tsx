// Libs
import React from 'react';

// Utils
import { TitleProps } from './title-types';

// Styles
import {
  TitleWrapperXXL,
  TitleWrapperXL,
  TitleWrapperLarge,
  TitleWrapperMedium,
  TitleWrapperNormal,
  TitleWrapperSmall,
} from './title-styles';

const Title: React.FC<TitleProps> = (props) => {
  const { size = 'normal', weight = 'regular', children } = props;

  let wrapper;
  switch (size) {
    case 'small':
      wrapper = (
        <TitleWrapperSmall weight={weight}>{children}</TitleWrapperSmall>
      );
      break;
    case 'normal':
      wrapper = (
        <TitleWrapperNormal weight={weight}>{children}</TitleWrapperNormal>
      );
      break;
    case 'medium':
      wrapper = (
        <TitleWrapperMedium weight={weight}>{children}</TitleWrapperMedium>
      );
      break;
    case 'l':
      wrapper = (
        <TitleWrapperLarge weight={weight}>{children}</TitleWrapperLarge>
      );
      break;
    case 'xl':
      wrapper = <TitleWrapperXL weight={weight}>{children}</TitleWrapperXL>;
      break;
    case 'xxl':
      wrapper = <TitleWrapperXXL weight={weight}>{children}</TitleWrapperXXL>;
      break;
    default:
      wrapper = (
        <TitleWrapperNormal weight={weight}>{children}</TitleWrapperNormal>
      );
  }

  return wrapper;
};

export default Title;
