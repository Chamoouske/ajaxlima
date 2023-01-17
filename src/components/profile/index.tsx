import { ImageProfile } from '../imageProfile';

import { ContentBox } from '../contentBox';

import styles from './styles.module.scss';

export function Profile() {
  return (
    <ContentBox>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <ImageProfile />
        </div>
        <p className={styles.name}>Ajax Lima de Matos</p>
        <p className={styles.functionDev}>Full-Stack Developer</p>
      </div>
    </ContentBox>
  );
}
