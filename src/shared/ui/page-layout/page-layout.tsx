import React from 'react';
import styles from './page-layout.module.scss';
import clsx from 'clsx';

export const PageLayout = ({ children, className }: React.PropsWithChildren & {className?: string}) => {
  return (
    <div className={clsx(styles.layout, className)}>
      {children}
    </div>
  );
};
