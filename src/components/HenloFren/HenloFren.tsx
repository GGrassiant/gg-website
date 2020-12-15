// Libs
import React from 'react';

// Styles
import {
  FunnyFaceWrapper,
  SpeechBubbleWrapper,
  SpeechBubbleContent,
  SpeechBubbleTip,
  SpeechBubbleParagraph,
} from './henlofren-styles';
import BubbleTipSvg from '../../images/bubble-tip.svg';

// Component
import Image from '../Image/image';

const HenloFren: React.FC = () => {
  return (
    <>
      <FunnyFaceWrapper>
        <Image />
      </FunnyFaceWrapper>
      <SpeechBubbleWrapper>
        <SpeechBubbleContent>
          <SpeechBubbleTip>
            <img src={BubbleTipSvg} alt="speech-bubble" />
          </SpeechBubbleTip>
          <SpeechBubbleParagraph>Henlo frens</SpeechBubbleParagraph>
        </SpeechBubbleContent>
      </SpeechBubbleWrapper>
    </>
  );
};

export default HenloFren;
