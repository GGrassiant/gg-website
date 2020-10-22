// Libs
import React from 'react';

// Styles
import styles from './page-wrappers.module.scss';

const withPadding: (WC: React.FC<any>) => React.FC<any> = (
  WrappedComponent,
) => (props) => (
  <div className={styles.wrapper}>
    <WrappedComponent {...props} />
  </div>
);

export default withPadding;
