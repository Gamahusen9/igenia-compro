import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function FaqCategories({ onCategorySelect, currentCategory }) {
    const { t } = useTranslation();

    // Kategori FAQ yang tersedia
    const categories = [
        { id: 'all', name: 'all_categories', icon: 'fas fa-th-large' },
        { id: 'company', name: 'company', icon: 'fas fa-building' },
        { id: 'services', name: 'services', icon: 'fas fa-cogs' },
        { id: 'products', name: 'products', icon: 'fas fa-box' },
        { id: 'support', name: 'support', icon: 'fas fa-headset' }
    ];

    return (
        <motion.div
            className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
        >
            {categories.map((category, index) => (
                <motion.button
                    key={category.id}
                    onClick={() => onCategorySelect(category.id)}
                    className={`px-5 py-3 rounded-full flex items-center transition-all duration-300 ${currentCategory === category.id
                        ? 'bg-[#AD49E1] text-white'
                        : 'bg-[#2E073F]/60 text-gray-300 hover:bg-[#7A1CAC]/50'
                        }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <i className={`${category.icon} mr-2`}></i>
                    <span>{t(`faq.${category.name}`)}</span>
                </motion.button>
            ))}
        </motion.div>
    );
}
