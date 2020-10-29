// Libs
import styled from 'styled-components';
import { Property } from 'csstype';

interface CTAWrapperProps {
  readonly size: string;
  readonly theme: string;
}

const customSize: { [key: string]: Property.Height } = {
  large: '200px',
  medium: '175px',
  small: '100px',
};

const customRadius: { [key: string]: Property.BorderRadius } = {
  large: '100px',
  medium: '87.5px',
  small: '50px',
};

const customBackgroundColor: { [key: string]: Property.BackgroundColor } = {
  dark: '#FFF',
  light: '#2F2D2D',
};

const customColor: { [key: string]: Property.BackgroundColor } = {
  dark: '#2F2D2D',
  light: '#FFF',
};

export const CTAWrapper = styled.div<CTAWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => customSize[props.size]};
  width: ${(props) => customSize[props.size]};
  border-radius: ${(props) => customRadius[props.size]};
  background-color: ${(props) => customBackgroundColor[props.theme]};
  transition: all 0.3s ease-in;

  p {
    margin-bottom: 0;
    font-family: Piazzolla, serif;
    font-weight: 500;
    font-size: 25px;
    line-height: 26px;
    color: ${(props) => customColor[props.theme]};
    text-align: center;

    svg {
      display: block;
      margin: 0 auto;
    }
  }
`;
CTAWrapper.displayName = 'CTAWrapper';
