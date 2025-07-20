import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { productsData, Product, ProductCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';

const categories: { key: ProductCategory; label: string, image: string, description: string }[] = [
    { key: 'Beef', label: 'Beef', image: '/images/cow_prod.png', description: "Rich, flavorful, and sourced from top-tier farms." },
    { key: 'Chicken', label: 'Chicken', image: '/images/chk_prod.png', description: "Versatile and tender, perfect for any dish." },
    { key: 'Turkey', label: 'Turkey', image: '/images/turkey_prod.png', description: "Lean, wholesome, and ideal for healthy meals." },
];

const OfferingsPage: React.FC = () => {
  const { category: categoryParam } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const selectedCategory = useMemo((): ProductCategory | null => {
    if (!categoryParam) return null;
    const foundCategory = categories.find(c => c.key.toLowerCase() === categoryParam.toLowerCase());
    return foundCategory ? foundCategory.key : null;
  }, [categoryParam]);

  const otherCategories = useMemo(() => {
    if (!selectedCategory) return [];
    return categories.filter(c => c.key !== selectedCategory);
  }, [selectedCategory]);
  

  const productsForCategory = useMemo(() => {
    if (!selectedCategory) return [];
    return productsData.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategorySelect = (category: ProductCategory) => {
    navigate(`/offerings/${category.toLowerCase()}`);
  };
  
  const handleBackToCategories = () => {
    navigate('/offerings');
  }

  const renderGroup = (title: string, products: Product[]) => (
    products.length > 0 && (
      <div key={title} className="mb-12 animate-fade-in">
        <h2 className="text-3xl font-bold text-brand-secondary mb-8 border-b-2 border-brand-primary pb-2">
          {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={setModalProduct} />
          ))}
        </div>
      </div>
    )
  );
  
  const renderProductGrid = () => {
    if (!selectedCategory) return null;

    if (selectedCategory === 'Beef') {
      return renderGroup('Cuts by Weight Classification', productsForCategory);
    }

    if (selectedCategory === 'Chicken' || selectedCategory === 'Turkey') {
      const whiteMeat = productsForCategory.filter(p => p.type === 'White Meat');
      const darkMeat = productsForCategory.filter(p => p.type === 'Dark Meat');
      return (
        <>
          {renderGroup('White Meat', whiteMeat)}
          {renderGroup('Dark Meat', darkMeat)}
        </>
      )
    }
    
    return renderGroup(`${selectedCategory} Selections`, productsForCategory);
  };
  
  if (!selectedCategory) {
    return (
        <div className="bg-brand-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
                        Our Offerings
                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"></span>
                    </h1>
                    <p className="mt-12 max-w-3xl mx-auto text-xl text-brand-gray leading-relaxed">
                        Select a category to explore our comprehensive selection of premium, ethically sourced meats.
                    </p>
                </div>
                <div className="flex flex-col gap-8">
                  {categories.map(({ key, label, image, description }) => (
                      <div key={key} className="group relative block h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                          <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent transition-opacity duration-300" />
                          <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-16 pointer-events-none">
                              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-wider">{label}</h2>
                              <p className="text-white/90 mt-4 text-lg max-w-md">{description}</p>
                              <div className="mt-6 h-1.5 w-20 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"/>
                          </div>
                          {/* Clickable Overlay to ensure consistent click behavior */}
                          <div
                            onClick={() => handleCategorySelect(key)}
                            className="absolute inset-0 z-20 cursor-pointer"
                            aria-label={`Select category ${label}`}
                            role="button"
                          />
                      </div>
                  ))}
                </div>
            </div>
        </div>
    )
  }

  return (
    <div className={`bg-white min-h-screen`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-slide-in-from-left">
        <div className="mb-12">
            <button onClick={handleBackToCategories} className="text-brand-primary font-semibold hover:underline flex items-center group">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to All Categories
            </button>
            <div className="text-center mt-4">
                 <h1 className="text-5xl font-extrabold text-brand-secondary tracking-tight">
                    {selectedCategory}
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">
                    Browse our {selectedCategory.toLowerCase()} cuts to find the perfect match.
                </p>
            </div>
        </div>
        
        <div>
            {productsForCategory.length > 0 ? renderProductGrid() : (
                <div className="text-center py-16">
                    <h3 className="text-2xl font-semibold text-brand-secondary">No products found.</h3>
                    <p className="text-brand-gray mt-2">Check back soon for our premium cuts.</p>
                </div>
            )}
        </div>
      </div>

       {otherCategories.length > 0 && (
          <section className="bg-brand-light py-10 md:py-10">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-center text-brand-secondary tracking-tight mb-12">
                      Explore Other Categories
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                      {otherCategories.map(({ key, label, image }) => (
                          <NavLink
                              to={`/offerings/${key.toLowerCase()}`}
                              key={key}
                              className="group relative block h-64 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                          >
                              <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                              <div className="relative z-10 flex flex-col justify-end h-full p-6">
                                  <h3 className="text-4xl font-bold text-white tracking-wider">{label}</h3>
                                  <div className="mt-3 h-1 w-16 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                              </div>
                          </NavLink>
                      ))}
                  </div>
              </div>
          </section>
      )}

       <div className="sticky bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-white to-transparent">
         <div className="container mx-auto flex justify-center">
            <NavLink
              to="/contact"
              className="px-8 py-4 text-lg font-bold text-white bg-brand-accent rounded-full shadow-2xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Request a Quote
            </NavLink>
         </div>
      </div>
      {modalProduct && <QuickViewModal product={modalProduct} onClose={() => setModalProduct(null)} />}
    </div>
  );
};

export default OfferingsPage;
