import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
