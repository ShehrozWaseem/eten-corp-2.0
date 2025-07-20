import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Product } from '../data/products';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  // Effect to handle 'Escape' key press for closing the modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden animate-modal-in"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-brand-primary transition-colors z-10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div> */}

        <div className="w-full md:w-1/2 p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold text-brand-secondary">{product.name}</h2>
          <p className="mt-4 text-brand-gray leading-relaxed">{product.description}</p>
          
          <div className="mt-6">
            <h4 className="font-semibold text-brand-secondary">Suggested Usage:</h4>
            <p className="text-brand-gray">{product.usage}</p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-brand-secondary">Storage Notes:</h4>
            <p className="text-brand-gray text-sm">{product.storageNotes}</p>
          </div>

          <div className="mt-8">
            <NavLink
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              className="w-full text-center block bg-brand-accent text-white font-bold text-lg px-8 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
              onClick={onClose}
            >
              Request a Quote for this Item
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;