import React from 'react';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import BudgetCalculator from '../components/BudgetCalculator';
import { Calendar, Star, Music, Gift, Users, GlassWater } from 'lucide-react';

const Services = () => {
    const weddingServices = [
        {
            title: "Full Service Planning",
            description: "Comprehensive planning from start to finish. We handle budget management, vendor selection, design, and day-of coordination.",
            icon: Calendar
        },
        {
            title: "Partial Planning",
            description: "For couples who have started the process but need professional guidance to bring it all together.",
            icon: Star
        },
        {
            title: "Day-of Coordination",
            description: "Ensure your wedding day runs smoothly so you can relax and enjoy every moment.",
            icon: Music
        }
    ];

    const corporateServices = [
        {
            title: "Corporate Galas",
            description: "Impress your stakeholders with a sophisticated and well-executed gala event.",
            icon: Users
        },
        {
            title: "Product Launches",
            description: "Create a buzz around your new product with an innovative and engaging launch event.",
            icon: Gift
        },
        {
            title: "Holiday Parties",
            description: "Celebrate your team's success with a memorable holiday party.",
            icon: GlassWater
        }
    ];

    return (
        <div className="pt-20">
            <Section background="off-white">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl font-serif font-bold text-primary mb-4">Our Services</h1>
                    <p className="text-gray-600">Bespoke planning for life's most important moments.</p>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Weddings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {weddingServices.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Corporate & Social</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {corporateServices.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index + 3} />
                        ))}
                    </div>
                </div>

                {/* Planning Tools Section */}
                <div id="planning-tools" className="pt-12 border-t border-gray-200">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Planning Tools</h2>
                        <h3 className="text-4xl font-serif font-bold text-primary">Budget Calculator</h3>
                    </div>
                    <BudgetCalculator />
                </div>
            </Section>
        </div>
    );
};

export default Services;
