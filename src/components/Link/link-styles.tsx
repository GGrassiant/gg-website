// Libs
import styled from 'styled-components';
import { Property } from 'csstype';

interface LinkProps {
  theme: string;
}

const customColor: { [key: string]: Property.Color } = {
  dark: 'var(---main-light)',
  light: '--main-dark',
};

export const LinkWrapper = styled.a<LinkProps>`
  font-family: var(--default-content-font);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-default);
  line-height: 13px;
  color: ${(props) => customColor[props.theme]};
  text-transform: capitalize;
  text-decoration: none;
  transition: all var(--default-transition-time) ease-in;

  svg {
    margin-left: 8px;
  }
`;
LinkWrapper.displayName = 'LinkWrapper';
