import { useEffect, useState } from 'react';
import { ContentBox } from '../contentBox';

import styles from './styles.module.scss';

import { RepositoryT, Repository } from '../repository'; // types of repositories vars

import { getRepositories } from '../../services/github';

export function MyProjects() {
  const [repositories, setRepositories] = useState<any>([]);

  useEffect(() => {
    (async function () {
      const repos: any = await getRepositories();

      setRepositories([...repos]);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <ContentBox>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>My Projects</h1>
        </div>
      </ContentBox>

      <div className={styles.projectsContainer}>
        {repositories.map((repository: RepositoryT) => (
          <ContentBox>
            <div key={repository.id}>
              <Repository repository={repository} />
            </div>
          </ContentBox>
        ))}
      </div>
    </div>
  );
}
