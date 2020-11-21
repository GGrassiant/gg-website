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
  height: ${({ cta }) => (cta ? '100%' : 'initial')};
  overflow: hidden;
`;

export const PermanentFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 1rem var(--layout-offset);
  background-color: rgba(164, 164, 164, 0.1);
  font-family: Rubik, sans-serif;
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-default);

  @media (min-width: ${breakPoints.breakPointMd}) {
    flex-direction: row;
    align-items: flex-start;
    height: 10rem;
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

    a {
      font-size: inherit;
    }
  }

  &:before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 0;
    height: 1px;
    width: calc(100% - var(--layout-offset));
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    @media (min-width: ${breakPoints.breakPointMd}) {
      left: 4rem;
      width: calc(100% - var(--layout-offset) * 2);
    }

    @media (min-width: $breakpoint-xl + $layout-offset + 0.25rem) {
      left: 0;
      margin-left: calc((100vw - ${breakPoints.breakPointXl}) * 0.5);
    }
  }
`;
