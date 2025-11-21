import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const BudgetCalculator = () => {
    const [budget, setBudget] = useState('');
    const [breakdown, setBreakdown] = useState(null);

    const calculateBudget = () => {
        const total = parseFloat(budget);
        if (isNaN(total) || total <= 0) return;

        setBreakdown([
            { category: 'Venue & Catering', percentage: 50, amount: total * 0.50 },
            { category: 'Décor & Florals', percentage: 15, amount: total * 0.15 },
            { category: 'Photography & Videography', percentage: 10, amount: total * 0.10 },
            { category: 'Entertainment & Music', percentage: 10, amount: total * 0.10 },
            { category: 'Miscellaneous/Buffer', percentage: 15, amount: total * 0.15 },
        ]);
    };

    const handleInputChange = (e) => {
        setBudget(e.target.value);
        // Optional: Auto-calculate as user types if desired, but button is requested
        // calculateBudget(); 
    };

    return (
        <div className="bg-white p-8 shadow-lg border-t-4 border-accent max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6 text-primary">
                <Calculator size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-2 text-center">Event Budget Allocator</h3>
            <p className="text-gray-600 text-center mb-8">Estimate your event costs with our smart calculator.</p>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <input
                    type="number"
                    placeholder="Enter Total Budget (e.g. 50000)"
                    value={budget}
                    onChange={handleInputChange}
                    className="flex-grow px-4 py-3 border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-gray-50"
                />
                <button
                    onClick={calculateBudget}
                    className="px-8 py-3 bg-primary text-white font-semibold uppercase tracking-widest hover:bg-accent transition-colors duration-300"
                >
                    Calculate
                </button>
            </div>

            {breakdown && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {breakdown.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-off-white rounded-sm border-l-4 border-accent">
                            <div>
                                <span className="font-bold text-primary block">{item.category}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">{item.percentage}%</span>
                            </div>
                            <span className="font-serif text-xl text-primary">
                                ${item.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                    ))}
                    <div className="mt-6 text-center text-sm text-gray-500 italic">
                        *Estimates based on industry standards. Actual costs may vary.
                    </div>
                </div>
            )}
        </div>
    );
};

export default BudgetCalculator;
