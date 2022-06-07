import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { TColorVariant } from '@components/ui/KUITypes';

export const ButtonVariant: Record<TColorVariant, string> = {
    primary: 'bg-primary text-slate-50 hover:bg-primary-hover focus:bg-primary-focus shadow-md shadow-primary/30',
    magic: 'bg-magic text-slate-50 hover:bg-magic-hover focus:bg-magic-focus shadow-md shadow-magic/50'
};

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: TColorVariant;
    isLink?: boolean;
    isDisabled?: boolean;
    className?: string;
    colorHover?: string;
    colorFocus?: string;
}
