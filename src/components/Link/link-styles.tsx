// Libs
import styled from 'styled-components';
import { Property } from 'csstype';

interface LinkProps {
  theme: string;
}

const customColor: { [key: string]: Property.Color } = {
  dark: '#FFF',
  light: '#2F2D2D',
};

export const LinkWrapper = styled.a<LinkProps>`
  font-family: Rubik, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 13px;
  color: ${(props) => customColor[props.theme]};
  text-transform: capitalize;
  text-decoration: none;
  transition: all 0.3s ease-in;

  svg {
    margin-left: 8px;
  }
`;
