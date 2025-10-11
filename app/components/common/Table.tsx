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
}

const Table = ({
  columns,
  data,
  className = '',
  striped = true,
  hoverable = true,
  bordered = false,
  size = 'md'
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

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className={`w-full ${bordered ? 'border border-gray-200' : ''}`}>
        {/* Header */}
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`
                  ${paddingClasses[size]}
                  ${sizeClasses[size]}
                  font-semibold text-gray-700
                  ${bordered ? 'border border-gray-200' : ''}
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
                ${striped && index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                ${hoverable ? 'hover:bg-blue-50 transition-colors duration-150' : ''}
                ${bordered ? 'border-b border-gray-200' : ''}
              `}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`
                    ${paddingClasses[size]}
                    ${sizeClasses[size]}
                    text-gray-600
                    ${bordered ? 'border border-gray-200' : ''}
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
  );
};

export default Table;
