
import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from './IconComponents';
import Logo from './Logo';

// emailjs is loaded from a script tag in index.html, so we need to declare it.
declare global {
  interface Window {
    emailjs: any;
  }
}

const Footer: React.FC = () => {
  const [footerEmail, setFooterEmail] = useState('');
  const [footerMessage, setFooterMessage] = useState('');
  const [footerSubmitted, setFooterSubmitted] = useState(false);
  const [footerError, setFooterError] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);


  const handleFooterSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!formRef.current) return;

      setFooterError('');
      if (!footerEmail || !footerMessage) {
          setFooterError('Please fill out all fields.');
          return;
      }
      
      setLoading(true);
      window.emailjs.sendForm("service_0zux2j8", "template_ut2i5nk", formRef.current)
        .then(() => {
          setFooterSubmitted(true);
          setFooterEmail('');
          setFooterMessage('');
          setTimeout(() => {
              setFooterSubmitted(false);
          }, 5000);
        }, (err: any) => {
          setFooterError('Message failed to send. Please try again.');
          console.error('EmailJS Error:', err);
        })
        .finally(() => {
          setLoading(false);
        });
  };

  return (
    <footer className="bg-brand-secondary text-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4 pr-4">
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
                <a href="tel:+1-437-980-6750" className="text-gray-400 hover:text-brand-primary transition-colors">+1 437-980-6750</a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 mr-3 flex-shrink-0 text-brand-accent" />
                <a href="mailto:info@etencorp.com" className="text-gray-400 hover:text-brand-primary transition-colors">info@etencorp.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-wider uppercase text-gray-300">Quick Message</h3>
             <div className="mt-4">
              {footerSubmitted ? (
                <div className="flex items-center p-4 rounded-md bg-green-500/20 text-green-300">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Message sent! We'll be in touch.</span>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleFooterSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="footer-email" className="sr-only">Email</label>
                        <input type="email" name="email" id="footer-email" required
                            className="block w-full rounded-md border-gray-500 bg-brand-secondary px-4 py-2.5 text-brand-light placeholder-gray-400 focus:border-brand-primary focus:ring-brand-primary ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset"
                            placeholder="Your Email"
                            value={footerEmail}
                            onChange={(e) => setFooterEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="footer-message" className="sr-only">Message</label>
                        <textarea id="footer-message" name="message" rows={3} required
                            className="block w-full rounded-md border-gray-500 bg-brand-secondary px-4 py-2.5 text-brand-light placeholder-gray-400 focus:border-brand-primary focus:ring-brand-primary ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset"
                            placeholder="Your Message"
                            value={footerMessage}
                            onChange={(e) => setFooterMessage(e.target.value)}
                        ></textarea>
                    </div>
                    {footerError && <p className="text-sm text-red-400">{footerError}</p>}
                    <div>
                        <button type="submit" disabled={loading} className="w-full justify-center rounded-md border border-transparent bg-brand-primary py-2.5 px-4 text-base font-medium text-white shadow-sm hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-secondary transition-colors disabled:bg-brand-primary/60 disabled:cursor-not-allowed">
                             {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : 'Send Message'}
                        </button>
                    </div>
                </form>
              )}
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