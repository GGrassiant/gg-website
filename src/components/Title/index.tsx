/* eslint no-unused-vars: 0 */
// Libs
import React from 'react';

// Utils
import styled from 'styled-components';
import { TitleProps } from './title-types';

// Styles
import {
  TitleWrapperXXL,
  TitleWrapperXL,
  TitleWrapperLarge,
  TitleWrapperNormal,
  TitleWrapperSmall,
} from './title-styles';

const Test = styled.div`
  font-family: var(--default-title-font);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-xl);
`;

// eslint-disable-next-line react/destructuring-assignment
const Title = (props: any) => <Test>{props.children}</Test>;

export default Title;
