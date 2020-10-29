// Libs
import React from 'react';

// Utils
import { LinkProps } from './index-types';

// Styles
import { LinkWrapper } from './link-styles';
import styles from '../../pages/index.module.scss';

const Link: React.FC<LinkProps> = (props) => {
  const { children, theme = 'dark', href } = props;
  return (
    <LinkWrapper theme={theme} target="_blank" href={href}>
      <p className={styles.testlolx}>{children}</p>
    </LinkWrapper>
  );
};

export default Link;
