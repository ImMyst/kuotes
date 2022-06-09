import KButton from '@components/ui/KButton/KButton';
import Link from 'next/link';

const KNavbar = (): JSX.Element => {
    console.log('yes');
    return (
        <div className="flex w-full items-center justify-between py-5 px-20">
            <Link href={'/'}>
                <a className="text-2xl font-bold">Kuotes</a>
            </Link>

            <div>
                <KButton shape="text">Se connecter</KButton>
            </div>
        </div>
    );
};

export default KNavbar;
