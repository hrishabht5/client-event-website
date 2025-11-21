import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-accent"
        >
            <div className="mb-6 text-primary">
                <Icon size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-primary">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </motion.div>
    );
};

export default ServiceCard;
