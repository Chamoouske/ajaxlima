import styles from './styles.module.scss';

import Folder from '../../assets/folder.svg';
import Star from '../../assets/star.svg';
import GitBranch from '../../assets/git-branch.svg';

import { getCommits } from '../../services/github';
import { useState } from 'react';

export type RepositoryT = {
  id: string;
  name: string;
  url: string;
  language: string;
  forks: number;
  stargazers_count: number;
};

type PropsT = {
  repository: RepositoryT;
};

export function Repository({ repository }: PropsT) {
  const { id, name, url, language, forks, stargazers_count } = repository;
  const [commit, setCommit] = useState('');

  (async function () {
    const commits = await getCommits(url);
    const { commit } = commits[0];

    setCommit(commit.message);
  })();

  // console.log(repository);

  const colors: any = {
    TypeScript: '#2b7489',
    JavaScript: '#f1e05a',
    'C#': '#178600',
    PHP: '#4F5D95',
    HTML: '#e34c26',
  };

  return (
    <div className={styles.container}>
      <div className={styles.repoNameContainer}>
        <img src={Folder} />

        <a className={styles.repoName} href={url} target="_blank">
          {name}
        </a>
      </div>

      <div className={styles.repoCommit}>
        <h3 className={styles.repoTexts}>{commit}</h3>
      </div>

      <div className={styles.repoStarForkLanguage}>
        <div className={styles.repoStarBranch}>
          <div className={styles.repoDetailStar}>
            <img src={Star} />

            <h3 className={styles.repoTexts}>{stargazers_count}</h3>
          </div>

          <div className={styles.repoDetailBranch}>
            <img src={GitBranch} />

            <h3 className={styles.repoTexts}>{forks}</h3>
          </div>
        </div>

        <div className={styles.repoDetailLang}>
          <span
            className={styles.repoLanguageColor}
            style={{ backgroundColor: colors[language] }}
          ></span>

          <h3 className={styles.repoTexts}>{language}</h3>
        </div>
      </div>
    </div>
  );
}
