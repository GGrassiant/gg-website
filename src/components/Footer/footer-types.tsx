// Libs
import React from 'react';

export interface FooterProps {
  ctaContent?: {
    title: string;
    component: React.FC<any>;
    projectPage?: boolean;
  };
}
