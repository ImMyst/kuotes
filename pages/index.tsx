import KButton from '@components/ui/KButton/KButton';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div className="flex w-full flex-1 flex-col items-center justify-center space-y-6 px-20 text-center">
            <h1 className="max-w-2xl text-5xl font-bold">Regroupe tes citations préférées au même endroit.</h1>
            <div className="max-w-xl text-lg font-light leading-7 text-gray-400">
                kuotes te permet d'ajouter des citations et des messages et de les partager avec tout le monde. Tu es maître
                de tes citations, et tu peux les partager avec tes amis pour en faire profiter tout le monde.
            </div>
            <div className="flex justify-center">
                <KButton url={'/signup'}>{'Commencer'}</KButton>
            </div>
        </div>
    );
};

export default Home;
