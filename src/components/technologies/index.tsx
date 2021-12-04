import { ContentBox } from '../contentBox';

import styles from './styles.module.scss';

export function Technologies() {
  const techno = [
    'CSS',
    'SCSS',
    'Javascript',
    'Typescript',
    'ReactJS',
    'React Native',
    'HTML',
    'PHP',
    'Firebase',
    'MYSQL',
    'GIT',
    'GITHUB',
  ];

  return (
    <ContentBox>
      <div className={styles.container}>
        <h2 className={styles.title}>Tecnologias</h2>

        <div className={styles.technologiesContainer}>
          {techno.map((technology) => (
            <p className={styles.technology}>{technology.toUpperCase()}</p>
          ))}
        </div>
      </div>
    </ContentBox>
  );
}