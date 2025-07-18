import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import { NavLink } from 'react-router-dom';
import ProductShowcase from '../components/ProductShowcase';

const HomePage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const QualityFeatureCard = ({ icon, title, children, delay }: { icon: React.ReactNode, title: string, children: React.ReactNode, delay: string }) => (
        <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform animate-slide-in-up`} style={{ animationDelay: delay }}>
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary/10 mx-auto mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-brand-secondary text-center mb-3">{title}</h3>
            <p className="text-brand-gray text-center leading-relaxed">{children}</p>
        </div>
    );

    const qualityFeatures = [
        {
            icon: (
                <svg className="h-8 w-8 text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Meticulous Inspection",
            description: "Every batch undergoes thorough inspection for freshness, flavor, and food safety before it reaches you."
        },
        {
            icon: (
                 <svg className="h-8 w-8 text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.148 7.25c-.246.354-.689.6-1.17.6h-7.5c-.443 0-.843-.246-1.062-.636A12.001 12.001 0 014.5 12.5c0-2.553.959-4.902 2.5-6.682a2.25 2.25 0 00-1.875-1.066H3.75A2.25 2.25 0 001.5 6.75v7.5c0 1.24 1.01 2.25 2.25 2.25h3.383c.375 0 .727-.163.972-.439a8.96 8.96 0 001.956-2.228" />
                </svg>
            ),
            title: "Ethical Sourcing",
            description: "We partner exclusively with trusted North American farms that adhere to strict animal welfare and sustainability standards."
        },
        {
            icon: (
                <svg className="h-8 w-8 text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
            ),
            title: "Unmatched Reliability",
            description: "Our tailored operations and competitive pricing ensure you receive the best products with dependable service every time."
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-brand-light overflow-x-hidden">
            <Carousel />
            
            <section className={`py-20 md:py-28 bg-white`}>
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={`max-w-4xl mx-auto text-center ${isVisible ? 'animate-slide-in-up' : ''}`}>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
                            Elevate Your Culinary Experience
                        </h2>
                        <p className="mt-6 text-lg text-brand-gray leading-relaxed">
                            Welcome to Eten Corporation, your premier partner in the meat industry. With years of expertise, we've earned trust as a supplier committed to quality. Operating in Canada and the United States, we specialize in distributing top-quality beef, chicken, and turkey, offering halal and non-halal options. Our extensive network of trusted farmers ensures a diverse range of premium meats sourced exclusively from North American farms.
                        </p>
                    </div>
                </div>
            </section>

            <section className={`py-20 md:py-28 bg-brand-light`}>
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary tracking-tight">
                        Our Commitment to Excellence
                      </h2>
                      <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-gray">
                        At Eten Corporation, quality is not just a promise; it's the foundation of our business. We ensure every product meets the highest standards through a rigorous, multi-faceted process.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {qualityFeatures.map((feature, index) => (
                             <QualityFeatureCard 
                                key={feature.title} 
                                title={feature.title} 
                                icon={feature.icon}
                                delay={`${index * 150}ms`}
                            >
                                {feature.description}
                             </QualityFeatureCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`py-20 md:py-28 bg-white`}>
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                         <div className={`rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 ${isVisible ? 'animate-slide-in-from-left' : ''}`}>
                            <img src="https://dolanfoods.com/wp-content/uploads/2023/07/Grass-Fed-beef-stew-scaled.jpeg" alt="Excellent customer service" className="w-full h-full object-cover" />
                        </div>
                        <div className={`${isVisible ? 'animate-slide-in-from-right' : ''}`}>
                            <h3 className="text-3xl font-bold text-brand-secondary mb-4">The Eten Partnership Advantage</h3>
                            <p className="text-brand-gray leading-relaxed text-lg mb-6">
                                Choose Eten for personalized service, industry insights, custom orders, and responsive support that feels like a true partnership. We're here to help you succeed.
                            </p>
                            <NavLink to="/contact" className="inline-block bg-brand-primary text-white font-bold px-8 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1">
                              Contact Us Today
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            
            <ProductShowcase />
        </div>
    );
};

export default HomePage;