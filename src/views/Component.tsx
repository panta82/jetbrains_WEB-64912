import React from 'react';

import styles from './Component.module.scss';
import { css } from '../lib/tools';

export const Component: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={css(styles.this, className)}>TODO</div>;
};
