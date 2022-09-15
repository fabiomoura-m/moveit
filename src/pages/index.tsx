import type { NextPage } from 'next';
import { ExperienceBar } from '../componentes/ExperienceBar';
import { Profile } from '../componentes/Profile';

const Home: NextPage = () => {
    return (
        <div className="container">
            <ExperienceBar />
            <section>
                <div>
                    <Profile />
                </div>
                <div></div>
            </section>
        </div>
    );
};
export default Home;
