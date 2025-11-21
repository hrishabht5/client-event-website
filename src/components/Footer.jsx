import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-serif font-bold tracking-widest mb-2">LUXE EVENTS</h3>
                        <p className="text-gray-400 text-sm">Creating unforgettable moments.</p>
                    </div>

                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-accent transition-colors"><Mail size={20} /></a>
                    </div>

                    <div className="text-center md:text-right text-sm text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Luxe Events. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
