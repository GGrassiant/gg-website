// Libs
import styled from 'styled-components';

// Styles
import { theme } from '../../utils/constants';

export const FunnyFaceWrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 0;
  transform: translate(-100%, -5rem);
  transition: all ${theme.transition.medium} ease-in-out;
  transition-delay: ${theme.transition.default};
  width: 15rem;

  img {
    border-radius: 50%;
  }
`;
FunnyFaceWrapper.displayName = 'FunnyFaceWrapper';

export const SpeechBubbleWrapper = styled.div`
  position: fixed;
  height: 5rem;
  width: 5rem;
  bottom: 3rem;
  left: 8rem;
  opacity: 0;
  transition: opacity ${theme.transition.medium} ease-in-out;
  transform: translate(1rem, -5rem);
`;
SpeechBubbleWrapper.displayName = 'SpeechBubbleWrapper';

export const SpeechBubbleContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  width: 10rem;
  border-radius: 10px;
`;
SpeechBubbleWrapper.displayName = 'SpeechBubbleWrapper';

export const SpeechBubbleTip = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  img {
    transform: translate(-5.8rem, -1.5rem);
  }
`;
SpeechBubbleTip.displayName = 'SpeechBubbleTip';

export const SpeechBubbleParagraph = styled.p`
  color: ${theme.fontColor.projectTextColor};
`;
SpeechBubbleParagraph.displayName = 'SpeechBubbleParagraph';
