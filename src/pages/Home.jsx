import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const Home = () => {
    const heroImages = [
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2098&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2098&q=80",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2098&q=80"
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {/* Hero Slider */}
            <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                        style={{ backgroundImage: `url("${heroImages[currentImage]}")` }}
                    >
                        <div className="absolute inset-0 bg-black/40" />
                    </motion.div>
                </AnimatePresence>

                <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-lg md:text-xl uppercase tracking-[0.2em] mb-4 text-accent"
                    >
                        Exquisite Events & Weddings
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight"
                    >
                        Crafting Unforgettable <br /> Moments
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-wider text-sm font-semibold"
                        >
                            Start Planning
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Intro Section */}
            <Section>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Welcome to Luxe Events</h2>
                    <h3 className="text-4xl font-serif font-bold text-primary mb-6">Where Dreams Become Reality</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        We are a premier luxury event planning agency dedicated to creating breathtaking experiences. From intimate gatherings to grand celebrations, we handle every detail with precision and flair.
                    </p>
                    <Link to="/about" className="text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">
                        READ OUR STORY
                    </Link>
                </div>
            </Section>
        </>
    );
};

export default Home;
