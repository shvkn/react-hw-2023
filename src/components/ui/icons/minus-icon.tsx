import classNames from 'classnames';
import React from 'react';

import styles from '@/components/ui/icons/icon.module.css';

export const MinusIcon: React.FC<IIconProps> = ({ size }) => {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      xmlns='http://www.w3.org/2000/svg'
      className={classNames(styles.icon, {
        [styles.sizeS]: size === 'S',
        [styles.sizeM]: size === 'M',
        [styles.sizeL]: size === 'L',
      })}
    >
      <path d='M10.5 6C10.5 6.09946 10.4605 6.19484 10.3902 6.26517C10.3198 6.33549 10.2245 6.375 10.125 6.375H1.875C1.77554 6.375 1.68016 6.33549 1.60984 6.26517C1.53951 6.19484 1.5 6.09946 1.5 6C1.5 5.90054 1.53951 5.80516 1.60984 5.73484C1.68016 5.66451 1.77554 5.625 1.875 5.625H10.125C10.2245 5.625 10.3198 5.66451 10.3902 5.73484C10.4605 5.80516 10.5 5.90054 10.5 6Z' />
    </svg>
  );
};
