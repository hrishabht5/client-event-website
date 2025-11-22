import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'Wedding',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzRPE5Rrz8i5dOuqalPKJLkY3ySL5Y7ITkfaHPtii7nf3265Bq_wb1-7ua0RV6Bck2jPg/exec";

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formPayload = new FormData();
        // Send keys matching the user's specific headers (some have trailing spaces)
        formPayload.append('Name', formData.name);
        formPayload.append('Name ', formData.name); // Header has a trailing space

        formPayload.append('Email', formData.email);

        formPayload.append('Type', formData.type);
        formPayload.append('Type ', formData.type); // Header has a trailing space

        formPayload.append('Message', formData.message);
        // Date is handled by the script

        try {
            // Google Apps Script Web Apps often have CORS issues. 
            // 'no-cors' mode allows the request to go through but we can't read the response.
            // We assume success if no network error occurs.
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formPayload,
                mode: 'no-cors'
            });

            setStatus('success');
            setFormData({ name: '', email: '', type: 'Wedding', message: '' });
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center p-8 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="text-2xl font-serif font-bold text-green-800 mb-4">Thank You!</h3>
                <p className="text-green-700">Your message has been sent successfully. We will be in touch shortly.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 bg-green-700 text-white font-semibold rounded hover:bg-green-800 transition-colors"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white"
                        placeholder="your@email.com"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="type" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Event Type</label>
                <select
                    id="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white"
                >
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Private Party">Private Party</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">Message</label>
                <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white"
                    placeholder="Tell us about your event..."
                ></textarea>
            </div>

            {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded">
                    Something went wrong. Please try again later or contact us directly.
                </div>
            )}

            <div className="text-center">
                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`px-10 py-4 bg-primary text-white font-semibold uppercase tracking-widest hover:bg-accent transition-colors duration-300 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
