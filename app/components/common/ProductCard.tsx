'use client';

import { ReactNode } from 'react';
import Badge from './Badge';
import Button from './Button';
import Text from './Text';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  badgeVariant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'accent';
  onAddToCart?: () => void;
  onViewDetails?: () => void;
  className?: string;
  children?: ReactNode;
}

const ProductCard = ({
  title,
  description,
  price,
  image,
  badge,
  badgeVariant = 'primary',
  onAddToCart,
  onViewDetails,
  className = '',
  children
}: ProductCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${className}`}>
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={badgeVariant} size="sm">
              {badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <Text 
          variant="h3" 
          size="lg" 
          fontFamily="rajdhani" 
          color="black" 
          weight="bold"
          className="mb-2"
        >
          {title}
        </Text>
        
        <Text 
          variant="body" 
          fontFamily="poppins" 
          color="gray" 
          className="mb-4 line-clamp-2"
        >
          {description}
        </Text>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <Text 
            variant="h3" 
            size="xl" 
            fontFamily="rajdhani" 
            color="black" 
            weight="bold"
            className="text-green-600"
          >
            {price}
          </Text>
        </div>

        {/* Custom Content */}
        {children}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="primary"
            size="sm"
            onClick={onAddToCart}
            className="flex-1"
          >
            Add to Cart
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onViewDetails}
            className="flex-1"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
