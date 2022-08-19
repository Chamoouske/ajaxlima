import { ContentBox } from '../contentBox';

import styles from './styles.module.scss';

type ExperienceT = {
  local: string;
  timeCourse: string;
  occupation: string;
};

export function Experience() {
  const experiences: ExperienceT[] = [
    {
      local: 'Petruz',
      timeCourse: '07/2021 - 07/2022',
      occupation: 'Infrastructure intern',
    },
  ];

  return (
    <ContentBox>
      <div className={styles.container}>
        <h2 className={styles.title}>Experiências</h2>

        <div className={styles.experiencesContainer}>
          {experiences.map((experience: ExperienceT, i: any) => (
            <div className={styles.experience} key={i}>
              <li>
                {experience.local}
                <div>
                  <span>{experience.timeCourse}</span>
                  <span>{experience.occupation}</span>
                </div>
              </li>
            </div>
          ))}
        </div>
      </div>
    </ContentBox>
  );
}
