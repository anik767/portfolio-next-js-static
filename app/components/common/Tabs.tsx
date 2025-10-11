'use client';

import { ReactNode, useState } from 'react';
import  Text  from './Text';

interface TabItem {
  key: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveKey?: string;
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Tabs = ({
  items,
  defaultActiveKey,
  className = '',
  variant = 'default',
  size = 'md',
  fullWidth = false
}: TabsProps) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || items[0]?.key);

  const sizeClasses = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-3',
    lg: 'text-lg px-6 py-4'
  };

  const getTabClasses = (item: TabItem) => {
    const isActive = activeKey === item.key;
    const baseClasses = `${sizeClasses[size]} font-medium transition-all duration-200 ${
      item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    }`;

    switch (variant) {
      case 'pills':
        return `${baseClasses} rounded-full ${
          isActive
            ? 'bg-blue-500 text-white'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }`;
      case 'underline':
        return `${baseClasses} border-b-2 ${
          isActive
            ? 'border-blue-500 text-blue-600'
            : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
        }`;
      default:
        return `${baseClasses} border-b-2 ${
          isActive
            ? 'border-blue-500 text-blue-600'
            : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
        }`;
    }
  };

  const getTabListClasses = () => {
    const baseClasses = 'flex';
    if (fullWidth) {
      return `${baseClasses} w-full`;
    }
    return baseClasses;
  };

  const activeContent = items.find(item => item.key === activeKey)?.content;

  return (
    <div className={className}>
      {/* Tab List */}
      <div className={`${getTabListClasses()} ${variant === 'pills' ? 'bg-gray-100 p-1 rounded-lg' : 'border-b border-gray-200'}`}>
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => !item.disabled && setActiveKey(item.key)}
            className={getTabClasses(item)}
            disabled={item.disabled}
          >
            <Text variant="body" fontFamily="poppins" weight="medium">
              {item.label}
            </Text>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeContent}
      </div>
    </div>
  );
};

export default Tabs;
