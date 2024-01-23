import React from 'react';

import styles from './Widget59.module.scss';
import { css } from '../../lib/tools';
import { Component } from '../Component';

export const Widget59: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={css(styles.this, className)}>
    <Component />
  </div>;
};
