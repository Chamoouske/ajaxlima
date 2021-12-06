import { Profile } from '../../components/profile';
import { Links } from '../../components/links';
import { Technologies } from '../../components/technologies';
import { MyProjects } from '../../components/myProjects';

import styles from './styles.module.scss';

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <Profile />

        <Links />

        <Technologies />
      </div>

      <div className={styles.containerSocialMidia}>
        <MyProjects />
      </div>
    </div>
  );
}
