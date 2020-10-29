// Libs
import React from 'react';

// Utils
import { LinkProps } from './index-types';

// Styles
import { LinkWrapper } from './link-styles';

const Link: React.FC<LinkProps> = (props) => {
  const { children, theme = 'dark', href } = props;
  return (
    <LinkWrapper theme={theme} target="_blank" href={href}>
      {children}
    </LinkWrapper>
  );
};

export default Link;
