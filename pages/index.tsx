import KButton from '@components/ui/KButton/KButton';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <main className="flex w-full flex-1 flex-col items-center justify-center space-y-6 px-20 text-center">
                <h1 className="max-w-2xl text-3xl font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, porro?
                </h1>
                <div className="max-w-xl leading-7">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nesciunt reiciendis eligendi obcaecati
                    possimus ex minus, non eius porro quam hic nam enim, facilis iste libero accusamus animi?
                </div>
                <div className="flex justify-center">
                    <KButton url={'/signup'}>{'Commencer'}</KButton>
                </div>
            </main>
        </div>
    );
};

export default Home;
