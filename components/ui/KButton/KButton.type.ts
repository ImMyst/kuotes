import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { TColorVariant, TSizeVariant } from '@components/ui/KUITypes';
import { Url } from 'url';

export const ButtonColorVariant: Record<TColorVariant, string> = {
    primary: 'bg-primary text-slate-100 hover:bg-primary-hover focus:bg-primary-focus shadow-md shadow-primary/30',
    magic: 'bg-magic text-slate-100 hover:bg-magic-hover focus:bg-magic-focus shadow-md shadow-magic/50'
};

export const ButtonSizeVariant: Record<TSizeVariant, string> = {
    small: 'text-xs',
    medium: 'px-6 py-3',
    large: ''
};

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: TColorVariant;
    size?: TSizeVariant;
    url?: string;
    isDisabled?: boolean;
    className?: string;
    colorHover?: string;
    colorFocus?: string;
}
