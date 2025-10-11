'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'accent' | 'PurpleLight' | 'Emerald' | 'Neutral' | 'cyan' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = ''
}: BadgeProps) => {
  const baseClasses = "inline-flex items-center font-semibold rounded-full backdrop-blur-sm border";
  
  const sizeClasses = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-2"
  };

  const variantClasses: Record<string, string> = {
    primary:'bg-blue-500/10 text-blue-500 border-blue-400/40',
    secondary:'bg-orange-300/10 text-orange-500 border-orange-200/40',
    PurpleLight:'bg-purple-300/10 text-purple-500 border-purple-200/40',
    Emerald:'bg-emerald-500/10 text-emerald-600 border-emerald-400/40',
    Neutral:'bg-neutral-500/10 text-neutral-600 border-neutral-400/40',
    cyan:'bg-cyan-500/10 text-cyan-600 border-cyan-400/40',
    perple:'bg-violet-500/10 text-violet-600 border-violet-400/40',
    success:'bg-emerald-500/10 text-emerald-500 border-emerald-400/40',
    warning:'bg-rose-500/10 text-rose-500 border-rose-400/40',
    info:'bg-gray-500/10 text-gray-500 border-gray-400/40',
    accent:'bg-orange-400/10 text-orange-400 border-orange-300/40',
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
