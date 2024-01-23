import React from 'react';

import styles from './Widget61.module.scss';
import { css } from '../../lib/tools';
import { Component } from '../Component';

export const Widget61: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={css(styles.this, className)}>
    <Component />
  </div>;
};
