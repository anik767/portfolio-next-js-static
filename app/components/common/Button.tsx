'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  scrollTo?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'success';
  size?: 'sm' | 'md' | 'lg';
  Align?: 'left' | 'center' | 'right';
  color?: 'blue' | 'white' | 'pink' | 'purple' | 'gray' | 'black' | 'green' | 'red' | 'yellow' | 'indigo' | 'cyan';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({ 
  children, 
  onClick, 
  scrollTo,
  variant = 'primary', 
  size = 'md',
  Align = 'center',
  color = 'black',
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const AlignClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  };

  const baseClasses = "font-bold rounded-full transition-all duration-500 ease-out flex  items-center group text-lg backdrop-blur-sm cursor-pointer";
  
  const sizeClasses = {
    sm: "py-3 px-5 text-sm",
    md: "py-4 px-8 text-base",
    lg: "py-6 px-12 text-lg"
  };

  const variantClasses = {
    primary: "shadow-lg hover:shadow-xl transform hover:scale-105 border-2",    // Blue Sky theme
    secondary: "shadow-lg hover:shadow-xl transform hover:scale-105 border-2",  // Warm Sunset (Yellow) theme
    success: "shadow-lg hover:shadow-xl transform hover:scale-105 border-2",    // Fresh Green theme
    outline: "bg-transparent hover:bg-white/10 border-2"
  };
  
  // Get theme color style
  const getThemeStyle = (variant: string) => {
    switch(variant) {
      case 'primary':
        return { 
          backgroundColor: '#b9dcff',  // Blue Sky
          color: '#070f36',
          borderColor: '#8dc9f4'
        };
      case 'secondary':
        return { 
          backgroundColor: '#fff58c',  // Warm Sunset (Yellow)
          color: '#9c4e23',
          borderColor: '#9c4e23'
        };
      case 'success':
        return { 
          backgroundColor: '#c4ffb2',  // Fresh Green
          color: '#164c3b',
          borderColor: '#164c3b'
        };
      default:
        return {};
    }
  };

  // Tailwind-safe explicit color classes for outline variant
  const outlineColorClasses: Record<NonNullable<ButtonProps['color']>, string> = {
    blue:   "text-blue-500 border-blue-400/50 hover:border-blue-500",
    white:  "text-white border-white/80 hover:border-white",
    pink:   "text-pink-500 border-pink-400/50 hover:border-pink-500",
    purple: "text-purple-500 border-purple-400/50 hover:border-purple-500",
    gray:   "text-gray-200 border-gray-300/60 hover:border-gray-200",
    black:  "text-black border-black/40 hover:border-black",
    green:  "text-green-500 border-green-400/50 hover:border-green-500",
    red:    "text-red-500 border-red-400/50 hover:border-red-500",
    yellow: "text-yellow-500 border-yellow-400/50 hover:border-yellow-500",
    indigo: "text-indigo-500 border-indigo-400/50 hover:border-indigo-500",
    cyan:   "text-cyan-500 border-cyan-400/50 hover:border-cyan-500",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed hover:transform-none hover:scale-100" : "";

  const handleClick = () => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else if (onClick) {
      onClick();
    }
  };

  const themeStyle = getThemeStyle(variant);
  
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${variant === 'outline' ? outlineColorClasses[color] : ''} ${AlignClasses[Align as keyof typeof AlignClasses]} ${disabledClasses} ${className}`}
      style={themeStyle}
    >
      {children}
    </button>
  );
};

export default Button;
