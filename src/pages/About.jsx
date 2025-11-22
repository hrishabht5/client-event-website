import React from 'react';
import Section from '../components/Section';

const About = () => {
    return (
        <div className="pt-20">
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Our Team"
                            className="rounded-sm shadow-xl"
                        />
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Who We Are</h2>
                        <h3 className="text-4xl font-serif font-bold text-primary mb-6">Passion for Perfection</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Art Studio Prateek was founded on the belief that every event should be a masterpiece. We are a team of passionate planners, designers, and coordinators who live to create unforgettable moments.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our philosophy is simple: we listen, we plan, and we execute with flawless precision. We take the stress out of event planning so you can focus on what matters most – celebrating with your loved ones.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h3 className="text-3xl font-serif font-bold text-primary mb-12">Meet The Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah Jenkins", role: "Founder & Lead Planner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                            { name: "Michael Chen", role: "Creative Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                            { name: "Emma Wilson", role: "Event Coordinator", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
                        ].map((member, index) => (
                            <div key={index} className="bg-off-white p-6 rounded-sm text-center">
                                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-accent" />
                                <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                                <p className="text-accent text-sm uppercase tracking-wider">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default About;
