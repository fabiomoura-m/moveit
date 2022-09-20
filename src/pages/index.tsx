import type { NextPage } from 'next';
import { ChallengeBox } from '../componentes/ChallengeBox';
import { CompletedChallenges } from '../componentes/CompletedChallenges';
import { Countdown } from '../componentes/Countdown';
import { ExperienceBar } from '../componentes/ExperienceBar';
import { Profile } from '../componentes/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <ExperienceBar />

            <CountdownProvider>
                <section>
                    <div>
                        <Profile />
                        <CompletedChallenges />
                        <Countdown />
                    </div>
                    <div>
                        <ChallengeBox />
                    </div>
                </section>
            </CountdownProvider>
        </div>
    );
};
export default Home;
