import React, { useState } from 'react';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = ['All', 'Weddings', 'Corporate', 'Parties'];

    // Using different aspect ratios for masonry effect
    const portfolioItems = [
        { id: 1, category: 'Weddings', src: "https://images.unsplash.com/photo-1519225448526-0cb85873dde1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-64" },
        { id: 2, category: 'Corporate', src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-96" },
        { id: 3, category: 'Parties', src: "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-72" },
        { id: 4, category: 'Weddings', src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-80" },
        { id: 5, category: 'Corporate', src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-64" },
        { id: 6, category: 'Parties', src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-96" },
        { id: 7, category: 'Weddings', src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-72" },
        { id: 8, category: 'Corporate', src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-80" },
        { id: 9, category: 'Parties', src: "https://images.unsplash.com/photo-1514525253440-b393452e3383?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-64" },
    ];

    const filteredItems = filter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    return (
        <div className="pt-20">
            <Section>
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-5xl font-serif font-bold text-primary mb-4">Our Portfolio</h1>
                    <p className="text-gray-600">A curated collection of our finest events.</p>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center space-x-4 mb-12 flex-wrap gap-y-4">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${filter === cat
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="break-inside-avoid relative group overflow-hidden rounded-sm shadow-md cursor-pointer"
                                onClick={() => setSelectedImage(item)}
                            >
                                <img
                                    src={item.src}
                                    alt={`Portfolio ${item.category}`}
                                    loading="lazy"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-serif text-xl tracking-widest border-b-2 border-accent pb-1">VIEW</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </Section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            src={selectedImage.src}
                            alt={selectedImage.category}
                            className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        />
                        <div className="absolute bottom-6 left-0 w-full text-center">
                            <span className="text-white font-serif text-xl tracking-widest border-b-2 border-accent pb-1">
                                {selectedImage.category}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Portfolio;
