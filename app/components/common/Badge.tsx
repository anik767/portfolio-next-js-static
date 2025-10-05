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
    primary: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    secondary: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    success: "text-green-400 bg-green-500/10 border-green-500/20",
    warning: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    info: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
  };

  return (
    <span className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
