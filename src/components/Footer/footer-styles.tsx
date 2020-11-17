// Libs
import styled from 'styled-components';

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
  justify-content: space-between;
  width: 100%;
  height: 10rem;
  padding: 1rem var(--layout-offset);
  background-color: rgba(164, 164, 164, 0.1);

  font-family: Rubik, sans-serif;
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-default);

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
    left: 4rem;
    top: 0;
    height: 1px;
    width: calc(100% - var(--layout-offset) * 2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;
