import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ValueCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary/10 mx-auto">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-brand-secondary mt-6 text-center">{title}</h3>
        <p className="mt-4 text-brand-gray text-center leading-relaxed">{children}</p>
    </div>
);

const MeatSection = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="bg-brand-light rounded-2xl shadow-lg overflow-hidden border border-gray-200/50">
        <div className="p-8">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 text-brand-primary">
                    {icon}
                </div>
                <h3 className="text-3xl font-bold text-brand-secondary">{title}</h3>
            </div>
            <div className="mt-6 space-y-6">
                {children}
            </div>
        </div>
    </div>
);

const CutList = ({ title, items }: { title: string, items: string[] }) => (
    <div>
        <h4 className="text-xl font-semibold text-brand-secondary mb-3">{title}</h4>
        <ul className="space-y-2 pl-2">
            {items.map(item => (
                <li key={item} className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-brand-accent flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brand-gray">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const AboutPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
    <div className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/public/images/4.jpg')" }}>
            <div className="absolute inset-0 bg-brand-secondary/70" />
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight animate-fade-in">About Eten Corporation</h1>
                <p className="mt-4 text-xl text-white/90 max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Pioneering Quality and Reliability in the Meat Industry
                </p>
            </div>
        </section>

        {/* Our Story Section */}
        <section className={`py-20 md:py-28 transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate-slide-in-up' : 'opacity-0'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-brand-secondary tracking-tight">Our Story</h2>
                        <p className="mt-6 text-lg text-brand-gray leading-relaxed">
                            Founded on a passion for excellence, Eten Corporation has grown into a leading distributor of premium meats across Canada and the United States. We built our reputation on a simple promise: to provide our partners with the highest quality beef, chicken, and turkey, sourced from trusted North American farms that share our commitment to animal welfare and sustainable practices.
                        </p>
                        <p className="mt-4 text-lg text-brand-gray leading-relaxed">
                            We are more than just distributors; we are your partners in culinary success. We understand the demands of the food service industry and dedicate ourselves to providing reliable service, competitive pricing, and the finest products available.
                        </p>
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img src="https://media.gettyimages.com/id/1497186820/photo/close-up-shot-of-unrecognizable-butcher-wearing-protective-gloves-cutting-slices-of-meat-at.jpg?s=612x612&w=0&k=20&c=oTh7YEPBBU_93ibStrx5SL3uFdxh-9ee7gqw9PwbBiI=" alt="Butcher at work" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
        
        {/* Our Values Section */}
        <section className="bg-brand-light py-20 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-secondary tracking-tight">Our Core Values</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">The principles that guide every aspect of our business.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <ValueCard title="Uncompromising Quality" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}>
                        Every product undergoes meticulous inspection to ensure it meets our stringent standards for freshness, flavor, and food safety.
                   </ValueCard>
                   <ValueCard title="Integrity & Trust" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 22a12.02 12.02 0 009-1.056c.343-.17.674-.356.983-.553z" /></svg>}>
                        We operate with transparency and honesty, building lasting relationships with our clients and suppliers based on mutual respect.
                   </ValueCard>
                   <ValueCard title="Customer Partnership" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}>
                        We succeed when our clients succeed. We provide personalized service, custom orders, and responsive support to meet your unique needs.
                   </ValueCard>
                </div>
            </div>
        </section>

        {/* Our Products Section */}
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-secondary tracking-tight">Our Extensive Product Range</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">A diverse selection to meet the needs of any culinary professional.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Beef */}
                    <MeatSection title="Beef" icon={
                        <img src="/public/images/cow.svg" alt="Symbol" width="70" height="70" />
                    }>
                        <CutList title="Trim" items={["Lean beef cuts for healthier options."]} />
                        <CutList title="Cuts by Weight Classification" items={["50s", "60s", "65s", "80s", "85s", "95s"]} />
                    </MeatSection>

                    {/* Turkey */}
                    <MeatSection title="Turkey" icon={
                        <img src="/public/images/turkey.svg" alt="Symbol" width="70" height="70" />

                    }>
                        <CutList title="White Meat" items={["Breast", "Ground Turkey", "Turkey Tenders", "Bone-in Tom, Hen, & Breeder"]} />
                        <CutList title="Dark Meat" items={["Ground Turkey", "Drumsticks", "Bone-in Thighs", "Boneless, Skinless Thighs"]} />
                    </MeatSection>

                    {/* Chicken */}
                    <MeatSection title="Chicken" icon={
                        <img src="/public/images/chicken.svg" alt="Symbol" width="70" height="70" />

                    }>
                         <CutList title="White Meat" items={["Ground Chicken", "Mechanically Deboned Meat (MDM)", "Bone-in Breast", "Boneless, Skinless Breast", "Chicken Tenders"]} />
                        <CutList title="Dark Meat" items={["Ground Chicken", "MDM", "Bone-in Thigh", "Leg Meat", "Drumsticks"]} />
                    </MeatSection>
                </div>
            </div>
        </section>

         {/* CTA Section */}
        <section className="bg-brand-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h2 className="text-3xl font-bold text-white">Ready to Experience the Eten Difference?</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                    Explore our interactive product catalog or get in touch with our team to discuss your specific needs.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <NavLink to="/offerings" className="inline-block bg-brand-primary text-white font-bold text-lg px-8 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1">
                        View Our Offerings
                    </NavLink>
                    <NavLink to="/contact" className="inline-block bg-brand-accent text-white font-bold text-lg px-8 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1">
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </section>
    </div>
    );
};

export default AboutPage;