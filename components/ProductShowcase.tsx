
import React from 'react';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'Beef',
    image: 'https://embed.widencdn.net/img/beef/lwh0bfs3nr/1120x840px/Butcher%201026.jpg?keep=c&u=nvwl20',
    link: '/offerings/beef',
    description: 'From rich, marbled cuts to lean trims, our beef selection is sourced from top-tier North American farms.'
  },
  {
    name: 'Chicken',
    image: 'https://thumbs.dreamstime.com/b/fresh-chicken-meat-wooden-board-top-view-83865597.jpg',
    link: '/offerings/chicken',
    description: 'Discover versatile and tender chicken, perfect for any dish. We offer a full range of white and dark meat options.'
  },
  {
    name: 'Turkey',
    image: 'https://t4.ftcdn.net/jpg/02/68/22/85/360_F_268228519_QyPhuIJrgdwE1bPvKeVS9aKHBHmBetou.jpg',
    link: '/offerings/turkey',
    description: 'Explore our lean and wholesome turkey selections, ideal for healthy meals and festive holiday feasts.'
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="bg-brand-light py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary tracking-tight">
            Our Premium Selection
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">
            Sourced from the best North American farms, delivered with care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <div key={category.name} className="group h-96 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-bold text-white tracking-wider">
                      {category.name}
                    </h3>
                    <div className="mt-4 h-1 w-16 bg-brand-accent"/>
                  </div>
                </div>
                
                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-brand-secondary p-8 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex h-full flex-col items-center justify-center">
                    <h3 className="text-3xl font-bold">{category.name}</h3>
                    <p className="my-4 text-base text-gray-300 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="mt-4 flex flex-col gap-3 w-full max-w-xs mx-auto">
                      <NavLink 
                        to={category.link} 
                        className="block w-full text-center bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-0.5"
                      >
                        View Selection
                      </NavLink>
                      <NavLink 
                        to="/contact"
                        className="block w-full text-center bg-brand-accent text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-0.5"
                      >
                        Get a Quote
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
            <NavLink 
                to="/offerings"
                className="inline-block bg-brand-primary text-white font-bold text-lg px-10 py-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
            >
                View All Our Offerings
            </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
