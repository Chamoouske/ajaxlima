import { ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

export function ContentBox({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
