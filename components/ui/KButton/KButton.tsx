import { classNames } from '@utils/class-names';
import Link from 'next/link';
import { ButtonColorVariant, ButtonSizeVariant, IButtonProps } from './KButton.type';

const KButton = (props: IButtonProps): JSX.Element => {
    const { variant = 'primary', size = 'medium', className, url, isDisabled, children, ...rest } = props;

    const buttonComponent = (): JSX.Element =>
        url ? (
            <Link href={url}>
                <button
                    className={classNames(
                        'block rounded-md text-white',
                        ButtonColorVariant[variant],
                        ButtonSizeVariant[size],
                        className
                    )}
                    disabled={isDisabled}
                    {...rest}
                >
                    {children}
                </button>
            </Link>
        ) : (
            <button
                className={classNames(
                    'block rounded-md text-white',
                    ButtonColorVariant[variant],
                    ButtonSizeVariant[size],
                    className
                )}
                disabled={isDisabled}
                {...rest}
            >
                {children}
            </button>
        );

    return buttonComponent();
};

export default KButton;
