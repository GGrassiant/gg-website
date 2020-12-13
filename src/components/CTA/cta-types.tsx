// libs
import React from 'react';

// Utils
import { menuItems } from '../../../site';

export interface CTAProps {
  children: string | Array<string | React.ReactElement>;
  link?: menuItems;
  onClick?: () => void;
  rest?: string;
  animate?: boolean;
  animationDirection?: 'x' | 'y';
}
