// Libs
import React from 'react';

export interface TitleProps {
  weight?: 'bold' | 'semibold' | 'regular' | 'light';
  size?: 'small' | 'normal' | 'footer' | 'medium' | 'l' | 'xl' | 'xxl';
  children: string | React.FC | React.ReactElement | React.ReactNode;
}
