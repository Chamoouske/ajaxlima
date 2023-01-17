import { ContentBox } from '../contentBox';

import MapPin from '../../assets/map-pin.svg';
import Instagram from '../../assets/instagram.svg';
import Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
import Mail from '../../assets/mail.svg';

import styles from './styles.module.scss';

export function Links() {
    return (
        <ContentBox>
            <div className={styles.content}>
                <p className={styles.textLink}>
                    <img src={MapPin} />
                    Brasil
                </p>

                <p className={styles.textLink}>
                    <img src={Github} />
                    <a href="https://github.com/Chamoouske" target="_blank">
                        Chamoouske
                    </a>
                </p>

                <p className={styles.textLink}>
                    <img src={Instagram} />
                    <a
                        href="https://www.instagram.com/ajaxlima/"
                        target="_blank"
                    >
                        Instagram
                    </a>
                </p>

                <p className={styles.textLink}>
                    <img src={Linkedin} />
                    <a
                        href="https://www.linkedin.com/in/AjaxLima"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                </p>

                <p className={styles.textLink}>
                    <img src={Mail} />
                    <a href="mailto:ajaxlima94@gmail.com" target="_blank">
                        ajaxlima94@gmail.com
                    </a>
                </p>
            </div>
        </ContentBox>
    );
}
