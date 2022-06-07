import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Variant } from '@components/ui/KUITypes';

export const ButtonVariant: Record<Variant, string> = {
    [Variant.PRIMARY]: 'bg-primary text-slate-50 hover:bg-primary-hover focus:bg-primary-focus shadow-md shadow-primary/30',
    [Variant.MAGIC]: 'bg-magic text-slate-50 hover:bg-magic-hover focus:bg-magic-focus shadow-md shadow-magic/50'
};

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: Variant;
    isLink?: boolean;
    isDisabled?: boolean;
    className?: string;
    colorHover?: string;
    colorFocus?: string;
}
