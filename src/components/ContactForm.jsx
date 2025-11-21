import React from 'react';

const ContactForm = () => {
    return (
        <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white"
                        placeholder="your@email.com"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="type" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Event Type</label>
                <select
                    id="type"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white"
                >
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Private Party</option>
                    <option>Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Message</label>
                <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white"
                    placeholder="Tell us about your event..."
                ></textarea>
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    className="px-10 py-4 bg-primary text-white font-semibold uppercase tracking-widest hover:bg-accent transition-colors duration-300"
                >
                    Send Inquiry
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
