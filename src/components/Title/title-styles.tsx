// Libs
import styled from 'styled-components';
import { Property } from 'csstype';

interface TitleWrapperProps {
  readonly size: string;
  readonly weight: string;
}

const customFontSize: { [key: string]: Property.FontSize } = {
  xxl: '165px',
  xl: '140px',
  l: '100px',
  normal: '16px',
  small: '12px',
};

const customFontWeight: { [key: string]: Property.FontWeight } = {
  bold: 700,
  semibold: 600,
  regular: 400,
  light: 300,
};

export const TitleWrapper = styled.p<TitleWrapperProps>`
  font-family: Piazzolla, serif;
  font-size: ${(props) => customFontSize[props.size]};
  font-weight: ${(props) => customFontWeight[props.weight]};
`;
TitleWrapper.displayName = 'TitleWrapper';
