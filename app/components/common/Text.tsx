'use client';

import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'small';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: 'primary' | 'secondary' | 'pink' | 'muted' | 'white' | 'black' | 'gray';
  gradient?: 'pink' | 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'cyan' | 'yellow' | 'custom';
  gradientDirection?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl';
  fontFamily?: 'sans' | 'poppins' | 'playfair' | 'rajdhani' | 'mono';
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  id?: string;
  style?: React.CSSProperties;
}

const Text = ({ 
  children, 
  variant = 'body',
  size,
  weight,
  color = 'primary',
  gradient,
  gradientDirection = 'to-r',
  fontFamily = 'sans',
  align = 'left',
  className = '',
  as,
  id,
  style
}: TextProps) => {
  // Default size mapping based on variant
  const defaultSizes = {
    h1: '6xl',
    h2: '5xl', 
    h3: '4xl',
    h4: '3xl',
    h5: '2xl',
    h6: 'xl',
    body: 'base',
    caption: 'sm',
    small: 'xs'
  };

  // Default weight mapping based on variant
  const defaultWeights = {
    h1: 'black',
    h2: 'extrabold',
    h3: 'bold',
    h4: 'bold',
    h5: 'semibold',
    h6: 'semibold',
    body: 'normal',
    caption: 'medium',
    small: 'normal'
  };

  const finalSize = size || defaultSizes[variant];
  const finalWeight = weight || defaultWeights[variant];
  const Component = as || (variant.startsWith('h') ? variant : 'p');

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl'
  } as const;

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  } as const;

  const colorClasses = {
    primary: 'text-white',
    secondary: 'text-gray-300',
    pink: 'text-pink-400',
    muted: 'text-gray-400',
    white: 'text-white',
    black: 'text-black',
    gray: 'text-gray-500'
  } as const;

  const gradientClasses = {
    pink: 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600',
    blue: 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600',
    purple: 'bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600',
    green: 'bg-gradient-to-r from-green-400 via-green-500 to-green-600',
    orange: 'bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600',
    red: 'bg-gradient-to-r from-red-400 via-red-500 to-red-600',
    cyan: 'bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600',
    yellow: 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600',
    custom: ''
  } as const;

  const gradientDirectionClasses = {
    'to-r': 'bg-gradient-to-r',
    'to-l': 'bg-gradient-to-l',
    'to-t': 'bg-gradient-to-t',
    'to-b': 'bg-gradient-to-b',
    'to-tr': 'bg-gradient-to-tr',
    'to-tl': 'bg-gradient-to-tl',
    'to-br': 'bg-gradient-to-br',
    'to-bl': 'bg-gradient-to-bl'
  } as const;

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  } as const;

  const fontFamilyClasses = {
    sans: 'font-sans',
    poppins: 'font-poppins',
    playfair: 'font-playfair',
    rajdhani: 'font-rajdhani',
    mono: 'font-mono'
  } as const;

  const baseClasses = "transition-colors duration-200";
  
  // Determine if we should use gradient or solid color
  const isGradient = gradient && gradient !== 'custom';
  const gradientClass = isGradient ? gradientClasses[gradient as keyof typeof gradientClasses] : '';
  const directionClass = isGradient ? gradientDirectionClasses[gradientDirection] : '';
  const colorClass = isGradient ? '' : colorClasses[color];
  
  const finalClassName = `${baseClasses} ${sizeClasses[finalSize as keyof typeof sizeClasses]} ${weightClasses[finalWeight as keyof typeof weightClasses]} ${colorClass} ${alignClasses[align]} ${fontFamilyClasses[fontFamily]} ${className}`;
  
  const gradientClassName = isGradient ? `${directionClass} ${gradientClass} bg-clip-text text-transparent` : '';

  return (
    <Component id={id} className={`${finalClassName} ${gradientClassName}`} style={style}>
      {children}
    </Component>
  );
};

export default Text;
