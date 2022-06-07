import { classNames } from '@utils/class-names';
import { Variant } from '@components/ui/KUITypes';
import { ButtonVariant, IButtonProps } from './KButton.type';

const KButton = (props: IButtonProps) => {
    const { variant = Variant.PRIMARY, className, isDisabled, children, ...rest } = props;

    return (
        <button
            className={classNames('shadow-md` block rounded-md px-6 py-3 text-white', ButtonVariant[variant])}
            disabled={isDisabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default KButton;
