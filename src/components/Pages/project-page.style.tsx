// Libs
import { LocalizedLink } from 'gatsby-theme-i18n';
import styled from 'styled-components';

export const BackButton = styled(LocalizedLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7.5rem;
  font-size: var(--font-size-normal-alt);
  font-weight: 500;
  color: var(--color-reversetext);
`;
