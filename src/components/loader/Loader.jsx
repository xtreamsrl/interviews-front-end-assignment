import React from 'react';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.container}>
      <h2>Loading data...</h2>
    </div>
  );
};

export default Loader;
