
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '../components/IconComponents';

declare global {
  interface Window {
    emailjs: any;
  }
}

const ContactPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [productInquiry, setProductInquiry] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const product = searchParams.get('product');
        const inquiry = searchParams.get('inquiry');
        if (product) {
            setProductInquiry(`I'm interested in a quote for: ${product}`);
        }
        if (inquiry) {
            setProductInquiry(`I'm interested in learning more about the: ${inquiry}`);
        }
    }, [searchParams]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        
        setError('');
        setLoading(true);

        window.emailjs.sendForm("service_0zux2j8", "template_ut2i5nk", formRef.current)
          .then(
            () => {
              setFormSubmitted(true);
            },
            (err: any) => {
              setError('Message failed to send. Please try again later.');
              console.error('EmailJS Error:', err);
            }
          )
          .finally(() => {
            setLoading(false);
          });
    };

    if (formSubmitted) {
        return (
            <div className="bg-white py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
                    <div className="max-w-2xl mx-auto">
                        <svg className="h-16 w-16 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-secondary sm:text-5xl">Thank You!</h1>
                        <p className="mt-6 text-lg leading-8 text-brand-gray">
                            Your message has been sent successfully. Our team will get back to you shortly.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    
    const inputClasses = "block w-full rounded-lg border-gray-300 py-4 px-4 text-base placeholder-gray-500 shadow-sm focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/50 transition-shadow duration-200";

    return (
        <div className="relative bg-white">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="mx-auto max-w-lg">
                        <h2 className="text-2xl font-bold tracking-tight text-brand-secondary sm:text-3xl">Get in Touch</h2>
                        <p className="mt-3 text-lg leading-6 text-brand-gray">
                           We're here to help. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
                        </p>
                        <dl className="mt-8 text-base text-brand-gray space-y-6">
                            <div className="flex gap-4">
                                <dt className="flex-shrink-0">
                                    <MapPinIcon className="h-6 w-6 text-brand-accent" />
                                </dt>
                                <dd>Toronto, ON, Canada &<br/> New York, NY, USA</dd>
                            </div>
                            <div className="flex gap-4 items-center">
                                <dt className="flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-brand-accent" />
                                </dt>
                                <dd><a href="tel:+1-437-980-6750" className="hover:text-brand-primary">+1 437-980-6750</a></dd>
                            </div>
                            <div className="flex gap-4 items-center">
                                <dt className="flex-shrink-0">
                                    <EnvelopeIcon className="h-6 w-6 text-brand-accent" />
                                </dt>
                                <dd><a href="mailto:info@etencorp.com" className="hover:text-brand-primary">info@etencorp.com</a></dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="full-name" className="sr-only">Full name</label>
                                <input type="text" name="full-name" id="full-name" autoComplete="name" required className={inputClasses} placeholder="Full name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input id="email" name="email" type="email" autoComplete="email" required className={inputClasses} placeholder="Email" />
                            </div>
                             <div>
                                <label htmlFor="company" className="sr-only">Company</label>
                                <input type="text" name="company" id="company" autoComplete="organization" className={inputClasses} placeholder="Company (optional)" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                <input type="text" name="phone" id="phone" autoComplete="tel" className={inputClasses} placeholder="Phone (optional)" />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className={inputClasses}
                                    placeholder="Message"
                                    value={productInquiry}
                                    onChange={(e) => setProductInquiry(e.target.value)}
                                />
                            </div>
                            <div>
                                <button type="submit" disabled={loading} className="inline-flex w-full justify-center rounded-md border border-transparent bg-brand-primary py-4 px-6 text-lg font-medium text-white shadow-sm hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transition-colors disabled:bg-brand-gray disabled:cursor-not-allowed">
                                    {loading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </div>
                             {error && <p className="text-red-500 text-center">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;