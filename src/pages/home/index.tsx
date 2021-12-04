import { Profile } from '../../components/profile';
import { Links } from '../../components/links';

import styles from './styles.module.scss';

export function Home() {
  return (
    <div className={styles.container}>
      <Profile />
      <Links />
    </div>
  );
}
