'use client';

import { ReactNode } from 'react';
import  Text  from './Text';

interface Column {
  key: string;
  title: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, record: any) => ReactNode;
}

interface TableProps {
  columns: Column[];
  data: any[];
  className?: string;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'emerald' | 'outline' | 'cyanblue' | 'lime' | 'sunset' | 'dark' | 'elegant' | 'fuchsia' | 'sky' | 'ocean' | 'rose';
}

const Table = ({
  columns,
  data,
  className = '',
  striped = true,
  hoverable = true,
  bordered = false,
  size = 'md',
  variant = 'emerald'
}: TableProps) => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const paddingClasses = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4'
  };

  const getTableContainerClasses = () => {
    switch (variant) {
      case 'outline':
        return 'rounded-lg shadow-md overflow-hidden border-b-4 border-blue-500';
      case 'cyanblue':
        return 'rounded-xl shadow-lg overflow-hidden border-2 border-cyan-500/20';
      case 'lime':
        return 'rounded-xl shadow-2xl shadow-lime-400/20 overflow-hidden border-2 border-lime-400/50';
      case 'sunset':
        return 'rounded-xl shadow-2xl overflow-hidden border-2 border-purple-500/30';
      case 'dark':
        return 'rounded-xl shadow-2xl overflow-hidden border-2 border-gray-700';
      case 'elegant':
        return 'rounded-xl shadow-xl overflow-hidden border-2 border-amber-500/30';
      case 'rose':
        return 'rounded-lg shadow-md overflow-hidden border-2 border-rose-200';
      case 'fuchsia':
        return 'rounded-2xl shadow-xl overflow-hidden border-2 border-fuchsia-500/30';
      case 'sky':
        return 'rounded-2xl shadow-lg overflow-hidden border-2 border-sky-300/40';
      case 'ocean':
        return 'rounded-3xl shadow-xl overflow-hidden border-2 border-teal-500/30';
      case 'emerald':
      default:
        return 'rounded-xl shadow-lg overflow-hidden border-2 border-emerald-500/20';
    }
  };

  const getHeaderClasses = () => {
    switch (variant) {
      case 'outline':
        return 'bg-blue-50 text-blue-700 border-b-4 border-blue-500 shadow-sm';
      case 'cyanblue':
        return 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md';
      case 'lime':
        return 'bg-gradient-to-r from-lime-400 to-green-500 text-white border-b-2 border-lime-500 shadow-lg shadow-lime-400/30';
      case 'sunset':
        return 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg';
      case 'dark':
        return 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg';
      case 'elegant':
        return 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md';
      case 'rose':
        return 'bg-rose-50 text-rose-700 border-b-2 border-rose-300 shadow-sm';
      case 'fuchsia':
        return 'bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white shadow-lg';
      case 'sky':
        return 'bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-md';
      case 'ocean':
        return 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg';
      case 'emerald':
      default:
        return 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md';
    }
  };

  const getRowClasses = (index: number) => {
    const baseClasses = 'transition-all duration-200';
    
    switch (variant) {
      case 'outline':
        return `${baseClasses} ${striped && index % 2 === 0 ? 'bg-blue-50/30' : 'bg-white'} ${hoverable ? 'hover:bg-blue-100/50 hover:shadow-sm' : ''}`;
      case 'cyanblue':
        return `${baseClasses} ${striped && index % 2 === 0 ? 'bg-cyan-50/30' : 'bg-white'} ${hoverable ? 'hover:bg-cyan-100/50 hover:shadow-md' : ''}`;
      case 'lime':
        return `${baseClasses} ${striped && index % 2 === 0 ? 'bg-lime-50/30' : 'bg-white'} ${hoverable ? 'hover:bg-lime-100 hover:shadow-md hover:shadow-lime-400/20' : ''}`;
      case 'sunset':
        return `${baseClasses} ${striped && index % 2 === 0 ? 'bg-purple-50/30' : 'bg-white'} ${hoverable ? 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:shadow-md' : ''}`;
      case 'dark':
        return `${baseClasses} ${striped && index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'} ${hoverable ? 'hover:bg-gray-700 hover:shadow-lg' : ''} text-white`;
      case 'elegant':
        return `${baseClasses} ${striped && index % 2 === 0 ? 'bg-amber-50/30' : 'bg-white'} ${hoverable ? 'hover:bg-amber-100/50 hover:shadow-md' : ''}`;
      case 'rose':
        return `${baseClasses} ${striped && index % 2 === 0 ? 'bg-rose-50/50' : 'bg-white'} ${hoverable ? 'hover:bg-rose-100/50 hover:shadow-sm' : ''}`;
      case 'fuchsia':
        return `${baseClasses} ${striped && index % 2 === 0 ? 'bg-fuchsia-50/30' : 'bg-white'} ${hoverable ? 'hover:bg-fuchsia-100/50 hover:shadow-md' : ''}`;
      case 'sky':
        return `${baseClasses} ${striped && index % 2 === 0 ? 'bg-sky-50/30' : 'bg-white'} ${hoverable ? 'hover:bg-sky-100 hover:shadow-sm' : ''}`;
      case 'ocean':
        return `${baseClasses} ${striped && index % 2 === 0 ? 'bg-teal-50/30' : 'bg-white'} ${hoverable ? 'hover:bg-teal-100/50 hover:shadow-md' : ''}`;
      case 'emerald':
      default:
        return `${baseClasses} ${striped && index % 2 === 0 ? 'bg-emerald-50/30' : 'bg-white'} ${hoverable ? 'hover:bg-emerald-100/50 hover:shadow-md' : ''}`;
    }
  };

  const getCellTextColor = () => {
    if (variant === 'dark') {
      return 'text-white';
    }
    return 'text-gray-700';
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <div className={getTableContainerClasses()}>
        <table className="w-full">
          {/* Header */}
          <thead className={getHeaderClasses()}>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`
                    ${paddingClasses[size]}
                    ${sizeClasses[size]}
                    font-bold tracking-wide
                    ${bordered ? 'border-r border-white/20 last:border-r-0' : ''}
                    ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}
                  `}
                  style={{ width: column.width }}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {data.map((record, index) => (
              <tr
                key={index}
                className={`
                  ${getRowClasses(index)}
                  ${bordered ? 'border-b border-gray-200 last:border-b-0' : ''}
                `}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`
                      ${paddingClasses[size]}
                      ${sizeClasses[size]}
                      ${getCellTextColor()}
                      font-medium
                      ${bordered ? 'border-r border-gray-200 last:border-r-0' : ''}
                      ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}
                    `}
                  >
                    {column.render ? column.render(record[column.key], record) : record[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
