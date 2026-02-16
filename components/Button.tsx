
import React from 'react';
import { ButtonVariant } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  icon?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.PRIMARY,
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight uppercase transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    [ButtonVariant.PRIMARY]: "bg-white text-black hover:bg-neutral-200 px-8 py-4 text-sm",
    [ButtonVariant.SECONDARY]: "bg-transparent border border-white/20 text-white hover:bg-white/5 px-8 py-4 text-sm",
    [ButtonVariant.GHOST]: "bg-transparent text-white/60 hover:text-white px-4 py-2 text-xs tracking-widest",
    [ButtonVariant.LINK]: "bg-transparent text-white p-0 hover:gap-3 gap-2 transition-all text-xs tracking-[0.2em]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {icon && <span className="material-symbols-outlined ml-2 text-[18px]">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
