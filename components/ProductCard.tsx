import React from 'react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
    return (
        <div 
            className="relative group flex items-center justify-center p-4 h-24 bg-gray-50 rounded-xl shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-brand-secondary border border-gray-200"
            onClick={() => onQuickView(product)}
        >
            {/* Tooltip */}
            <div className="absolute bottom-full mb-3 w-72 p-4 bg-brand-dark text-white text-left rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 transform group-hover:-translate-y-1">
                <h4 className="font-bold text-base border-b border-brand-accent/50 pb-1 mb-2">{product.name}</h4>
                <p className="text-sm text-gray-300 mb-2">{product.description}</p>
                <p className="text-sm"><span className="font-semibold text-brand-accent">Usage:</span> {product.usage}</p>
                {/* Tooltip Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-brand-dark"></div>
            </div>

            {/* Card Content */}
            <h3 className="text-base sm:text-lg font-bold text-brand-secondary text-center transition-colors group-hover:text-white">
                {product.name}
            </h3>
        </div>
    );
};

export default ProductCard;