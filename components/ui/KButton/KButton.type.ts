import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { TColorVariant, TSizeVariant, TShapeVariant } from '@components/ui/KUITypes';

export const ButtonColorVariant: Record<TColorVariant, string> = {
    primary: `bg-primary text-slate-100
    shadow-md shadow-primary/50
    transition ease-in-out duration-300
    focus:shadow-sm focus:bg-primary-focus focus:ring-2 focus:ring-primary
    hover:bg-primary-hover`,

    magic: `bg-magic text-slate-100
    shadow-md shadow-magic/50
    transition ease-in-out duration-300
    focus:shadow-sm focus:bg-magic-focus focus:ring-2 focus:ring-magic
    hover:bg-magic-hover`
};

export const ButtonSizeVariant: Record<TSizeVariant, string> = {
    small: 'text-xs',
    medium: 'px-6 py-3',
    large: ''
};

export const ButtonShapeVariant: Record<TShapeVariant, string> = {
    default: '',
    text: 'bg-transparent shadow-none hover:bg-primary/20 focus:bg-primary/20'
};

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: TColorVariant;
    size?: TSizeVariant;
    url?: string;
    shape?: TShapeVariant;
    isDisabled?: boolean;
    className?: string;
    colorHover?: string;
    colorFocus?: string;
}
