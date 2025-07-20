import React from 'react';
import { NavLink } from 'react-router-dom';

const orderIdeas = [
  {
    title: 'BBQ Essentials',
    description: 'Everything you need for the perfect grill-out. Features a mix of our best steaks, burgers, and chicken.',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6b5f46b54?q=80&w=1920&auto=format&fit=crop',
    link: '/contact?inquiry=BBQ%20Essentials%20Pack',
  },
  {
    title: 'Family Meal Pack',
    description: 'A versatile selection for a week of delicious family dinners, including ground beef, chicken breasts, and thighs.',
    image: 'https://images.unsplash.com/photo-1617093621453-f73b0636586e?q=80&w=1920&auto=format&fit=crop',
    link: '/contact?inquiry=Family%20Meal%20Pack',
  },
  {
    title: 'Lean & Clean Prep',
    description: 'High-protein, lean cuts like turkey breast, filet mignon, and chicken tenders for your weekly meal prep.',
    image: 'https://images.unsplash.com/photo-1543353071-873f67a4e08a?q=80&w=1920&auto=format&fit=crop',
    link: '/contact?inquiry=Lean%20and%20Clean%20Prep%20Pack',
  }
];

const PlanYourOrder: React.FC = () => {
  return (
    <section className="bg-brand-light py-12 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary tracking-tight">
            Plan Your Order
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">
            Get inspired by our curated selections or build your own custom order.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {orderIdeas.map(idea => (
            <div key={idea.title} className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                <div className="relative h-64">
                    <img src={idea.image} alt={idea.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-brand-secondary mb-3">{idea.title}</h3>
                    <p className="text-brand-gray flex-grow">{idea.description}</p>
                    <NavLink 
                        to={idea.link}
                        className="mt-6 inline-block text-center bg-brand-secondary text-white font-semibold py-3 px-6 rounded-lg shadow-sm hover:bg-brand-primary transition-all duration-300"
                    >
                        Inquire About This Pack
                    </NavLink>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanYourOrder;