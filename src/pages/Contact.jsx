import React from 'react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20">
            <Section background="off-white">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl font-serif font-bold text-primary mb-4">Get in Touch</h1>
                    <p className="text-gray-600">We'd love to hear about your upcoming event.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 shadow-lg border-t-4 border-accent">
                            <h3 className="text-xl font-serif font-bold text-primary mb-6">Contact Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="text-accent mt-1" />
                                    <p className="text-gray-600">Vijay nagar indore M.P.</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone className="text-accent" />
                                    <p className="text-gray-600">8962727445</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Mail className="text-accent" />
                                    <p className="text-gray-600">artstudioprateek@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 shadow-lg border-t-4 border-accent">
                            <h3 className="text-xl font-serif font-bold text-primary mb-6">Office Hours</h3>
                            <p className="text-gray-600 mb-2"><span className="font-bold">Mon - Fri:</span> 9:00 AM - 6:00 PM</p>
                            <p className="text-gray-600"><span className="font-bold">Sat - Sun:</span> By Appointment</p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-white p-8 shadow-lg">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send Us a Message</h3>
                        <ContactForm />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
