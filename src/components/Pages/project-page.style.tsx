// Libs
import { LocalizedLink } from 'gatsby-theme-i18n';
import styled from 'styled-components';

// Styles
import { theme } from '../../utils/constants';

export const BackButton = styled(LocalizedLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7.5rem;
  font-size: ${theme.fontSizes.normalAlt};
  font-weight: 500;
  color: var(--color-reversetext);
`;
