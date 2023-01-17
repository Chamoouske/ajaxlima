import { Links } from '../../components/links';
import { Profile } from '../../components/profile';
import { Experience } from '../../components/experience';
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

        <Experience />
      </div>

      <div className={styles.containerSocialMedia}>
        <MyProjects />
      </div>
    </div>
  );
}
