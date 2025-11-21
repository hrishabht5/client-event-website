import React from 'react';

const Section = ({ id, className = '', children, background = 'white' }) => {
    const bgClass = background === 'off-white' ? 'bg-background' : 'bg-white';

    return (
        <section id={id} className={`py-20 md:py-32 ${bgClass} ${className}`}>
            <div className="container mx-auto px-6">
                {children}
            </div>
        </section>
    );
};

export default Section;
