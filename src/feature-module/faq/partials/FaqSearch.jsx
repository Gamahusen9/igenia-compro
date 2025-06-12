import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function FaqSearch({ onSearch }) {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');

    // Handle search input changes
    const handleChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch(value);
    };

    // Handle search form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
        >
            <form onSubmit={handleSubmit} className="relative">
                <div className="relative">
                    <input
                        type="text"
                        placeholder={t('faq.search_faq_placeholder')}
                        value={searchQuery}
                        onChange={handleChange}
                        className="w-full bg-[#2E073F]/70 text-white border border-[#7A1CAC]/50 rounded-full py-4 px-6 pl-14 focus:outline-none focus:ring-2 focus:ring-[#AD49E1] focus:border-transparent transition-all duration-300 placeholder-gray-400 shadow-lg"
                    />
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#AD49E1]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
            </form>
        </motion.div>
    );
}
