'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = ''
}: BadgeProps) => {
  const baseClasses = "inline-block font-semibold rounded-full backdrop-blur-sm border";
  
  const sizeClasses = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3"
  };

  const variantClasses = {
    primary: "border-[#164c3b]/30",     // Fresh Green theme
    secondary: "border-[#9c4e23]/30",   // Warm Sunset (Yellow) theme
    success: "border-[#9c4e23]/30",     // Warm Sunset (Yellow) theme
    warning: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    info: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
  };
  
  // Get theme color style
  const getThemeStyle = (variant: string) => {
    switch(variant) {
      case 'primary':
        return { 
          backgroundColor: '#c4ffb240', 
          color: '#164c3b' 
        };
      case 'secondary':
      case 'success':
        return { 
          backgroundColor: '#fff58c40', 
          color: '#9c4e23' 
        };
      default:
        return {};
    }
  };

  const themeStyle = getThemeStyle(variant);
  
  return (
    <span 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      style={themeStyle}
    >
      {children}
    </span>
  );
};

export default Badge;
