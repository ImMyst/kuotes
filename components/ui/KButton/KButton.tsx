import { classNames } from '@utils/class-names';
import { ButtonVariant, IButtonProps } from './KButton.type';

const KButton = (props: IButtonProps) => {
    const { variant = 'primary', className, isDisabled, children, ...rest } = props;

    return (
        <button
            className={classNames('block rounded-md px-6 py-3 text-white', ButtonVariant[variant], className)}
            disabled={isDisabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default KButton;
