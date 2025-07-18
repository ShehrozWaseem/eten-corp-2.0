
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from './IconComponents';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary text-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4 pr-4">
            {/* <h3 className="text-2xl font-semibold text-white">Eten Corporation</h3> */}
            <Logo/>
            <p className="text-gray-400 leading-relaxed">
              Your premier partner in the meat industry, committed to quality, freshness, and food safety.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-wider uppercase text-gray-300">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li><NavLink to="/" className="text-gray-400 hover:text-brand-primary transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="text-gray-400 hover:text-brand-primary transition-colors">About Us</NavLink></li>
              <li><NavLink to="/offerings" className="text-gray-400 hover:text-brand-primary transition-colors">Our Offerings</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-brand-primary transition-colors">Contact Us</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-wider uppercase text-gray-300">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-brand-accent" />
                <span className="text-gray-400">Toronto, ON, Canada &<br/> New York, NY, USA</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 flex-shrink-0 text-brand-accent" />
                <a href="tel:+1-800-555-ETEN" className="text-gray-400 hover:text-brand-primary transition-colors">+1 (800) 555-ETEN</a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 mr-3 flex-shrink-0 text-brand-accent" />
                <a href="mailto:info@etencorp.com" className="text-gray-400 hover:text-brand-primary transition-colors">info@etencorp.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-wider uppercase text-gray-300">Our Location</h3>
            <div className="mt-4 rounded-lg overflow-hidden border-2 border-gray-700/50">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369333.374823863!2d-79.65825736152342!3d43.718155650000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%2O%2C%20Canada!5e0!3m2!1sen!2sus!4v1695621495911!5m2!1sen!2sus"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Eten Corporation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;