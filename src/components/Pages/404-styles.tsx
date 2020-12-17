// Libs
import styled from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';

export const FOFWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - ${theme.layout.footerHeightSm});
  padding-top: ${theme.layout.headerHeight};
  font-family: ${theme.fonts.defaultFont};

  @media (min-width: ${breakPoints.md}) {
    height: calc(100% - ${theme.layout.footerHeightMd});
  }
`;
FOFWrapper.displayName = 'FOFWrapper';

export const FOFWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
FOFWrapperContent.displayName = ' FOFWrapperContent';

export const FOFImageWrapper = styled.div`
  border-radius: 10%;
  overflow: hidden;
  height: 20rem;
  max-width: 30rem;

  img {
    object-fit: cover;
  }
`;
FOFImageWrapper.displayName = 'FOFImageWrapper';
