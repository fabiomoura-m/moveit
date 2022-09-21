import type { NextPage } from 'next';
import { ChallengeBox } from '../componentes/ChallengeBox';
import { CompletedChallenges } from '../componentes/CompletedChallenges';
import { Countdown } from '../componentes/Countdown';
import { ExperienceBar } from '../componentes/ExperienceBar';
import { Profile } from '../componentes/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import Head from 'next/head';

interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}
const Home = (props: HomeProps) => {
    return (
        <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
        >
            <div className={styles.container}>
                <Head>
                    <title>Início | move.it</title>
                </Head>

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
        </ChallengesProvider>
    );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async ctx => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompletes: Number(challengesCompleted)
        }
    };
};
