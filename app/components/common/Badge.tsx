'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'emerald' | 'outline' | 'cyanblue' | 'lime' | 'sunset' | 'dark' | 'elegant' | 'fuchsia' | 'sky' | 'ocean' | 'rose';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge = ({
  children,
  variant = 'emerald',
  size = 'md',
  className = ''
}: BadgeProps) => {
  const baseClasses = "inline-flex items-center font-semibold rounded-full backdrop-blur-sm border shadow-sm";
  
  const sizeClasses = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-2"
  };

  const variantClasses: Record<string, string> = {
    emerald: 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-700 border-emerald-400/50 shadow-emerald-500/20',
    outline: 'bg-blue-50/50 text-blue-700 border-blue-400/50 border-b-2 shadow-blue-500/20',
    cyanblue: 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-700 border-cyan-400/50 shadow-cyan-500/20',
    lime: 'bg-lime-50/50 text-lime-700 border-lime-500/60 shadow-lime-400/40',
    sunset: 'bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 text-purple-700 border-pink-400/50 shadow-pink-500/20',
    dark: 'bg-gray-800/90 text-white border-gray-600/60 shadow-gray-800/40',
    elegant: 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-700 border-amber-400/50 shadow-amber-500/20',
    fuchsia: 'bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 text-fuchsia-700 border-fuchsia-400/50 shadow-fuchsia-500/20',
    sky: 'bg-gradient-to-r from-sky-500/20 to-blue-500/20 text-sky-700 border-sky-400/50 shadow-sky-500/20',
    ocean: 'bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-700 border-teal-400/50 shadow-teal-500/20',
    rose: 'bg-rose-50/50 text-rose-700 border-rose-300/50 shadow-rose-500/20',
  };

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
