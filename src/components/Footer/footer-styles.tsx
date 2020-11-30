// Libs
import styled from 'styled-components';

// Utils
import { breakPoints } from '../../utils/constants';

interface FooterWrapperProps {
  cta?: boolean;
}

export const FooterWrapper = styled.div<FooterWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PermanentFooter = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  background-color: rgba(164, 164, 164, 0.1);

  @media (min-width: ${breakPoints.breakPointMd}) {
    height: 7rem;
  }
`;

export const PermanentFooterContent = styled.div`
  position: absolute;
  top: 0;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - var(--layout-offset));
  max-width: ${breakPoints.breakPointXl};
  height: 100%;
  padding: 1rem 0;
  font-family: Rubik, sans-serif;
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-default);
  border-top: 1px solid var(--color-divider);

  @media (min-width: ${breakPoints.breakPointMd}) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: ${breakPoints.breakPointLg}) {
    font-size: var(--font-size-normal);
  }

  // TODO: Why + 4px??? ¯\\_(ツ)_/¯
  @media (min-width: calc(${breakPoints.breakPointXl} + ${breakPoints.layoutOffset} + 4px)) {
    left: 0;
    margin-left: calc((100vw - ${breakPoints.breakPointXl}) * 0.5);
  }

  .links-wrapper {
    @media (max-width: ${breakPoints.breakPointMd}) {
      display: flex;
      width: 100%;
    }
  }

  p {
    line-height: 13px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 15%;

    @media (min-width: ${breakPoints.breakPointLg}) {
      width: 17%;
    }

    a {
      font-size: inherit;
    }
  }
`;
