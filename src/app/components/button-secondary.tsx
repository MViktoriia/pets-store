import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import clsx from 'clsx';

export interface ButtonSecondaryProps {
  disabled?: boolean;
}

export const ButtonSecondary: FC<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    ButtonSecondaryProps
> = ({ type, onClick, children, className, disabled }) => {
  
  return (
    <button
      className={clsx(
        `border border-solid rounded-[10px] text-base bg-white ${className} hover:text-orange transition-colors`,
        disabled && 'pointer-events-none text-gray-light border-gray-light',
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
