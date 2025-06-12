import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Component untuk menampilkan item FAQ dalam bentuk accordion
const FaqItem = ({ faq, isOpen, onToggle }) => {
    useTranslation();

    return (
        <motion.div
            className="border-b border-[#7A1CAC]/30 last:border-b-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <button
                className="w-full py-6 px-4 flex justify-between items-center text-left focus:outline-none"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg md:text-xl font-medium text-white">{faq.title}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 bg-[#7A1CAC]/50 text-white rounded-full p-1"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 px-4 text-gray-300 leading-relaxed">
                            {faq.description}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// Component utama untuk menampilkan semua FAQ dalam bentuk accordion
export default function FaqAccordion({ faqs }) {
    
    const [openIndex, setOpenIndex] = useState(0); // Default: item pertama terbuka

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="bg-[#2E073F]/90 backdrop-blur-sm rounded-xl shadow-xl p-2 divide-y divide-[#7A1CAC]/30">
            {faqs.map((faq, index) => (
                <FaqItem
                    key={faq.id}
                    faq={faq}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
}
