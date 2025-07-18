
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = `relative px-3 py-2 text-sm font-semibold transition-colors duration-300 group`;

  const ActiveIndicator = () => (
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-brand-primary" />
  );

  const HoverIndicator = () => (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  );

  const NavLinks = ({isMobile = false}: {isMobile?: boolean}) => (
    <>
      <NavLink to="/" className={({isActive}) => `${navLinkClasses} ${isActive ? 'text-brand-secondary' : 'text-brand-gray hover:text-brand-secondary'}`} end onClick={() => isMobile && setIsOpen(false)}>
        {({ isActive }) => (
          <>
            Home
            {isActive ? <ActiveIndicator /> : <HoverIndicator />}
          </>
        )}
      </NavLink>
      <NavLink to="/about" className={({isActive}) => `${navLinkClasses} ${isActive ? 'text-brand-secondary' : 'text-brand-gray hover:text-brand-secondary'}`} onClick={() => isMobile && setIsOpen(false)}>
        {({ isActive }) => (
          <>
            About Us
            {isActive ? <ActiveIndicator /> : <HoverIndicator />}
          </>
        )}
      </NavLink>
      <NavLink to="/offerings" className={({isActive}) => `${navLinkClasses} ${isActive ? 'text-brand-secondary' : 'text-brand-gray hover:text-brand-secondary'}`} onClick={() => isMobile && setIsOpen(false)}>
        {({ isActive }) => (
          <>
            Our Offerings
            {isActive ? <ActiveIndicator /> : <HoverIndicator />}
          </>
        )}
      </NavLink>
      <NavLink to="/contact" className={({isActive}) => `${navLinkClasses} ${isActive ? 'text-brand-secondary' : 'text-brand-gray hover:text-brand-secondary'}`} onClick={() => isMobile && setIsOpen(false)}>
        {({ isActive }) => (
          <>
            Contact Us
            {isActive ? <ActiveIndicator /> : <HoverIndicator />}
          </>
        )}
      </NavLink>
    </>
  );

  return (
    <header className="bg-brand-light/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLinks />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray hover:text-brand-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <NavLinks isMobile={true}/>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;