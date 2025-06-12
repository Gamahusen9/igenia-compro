import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FaqHeader from './partials/FaqHeader';
import FaqSearch from './partials/FaqSearch';
import FaqAccordion from './partials/FaqAccordion';
import FaqContact from './partials/FaqContact';
import FaqCategories from './partials/FaqCategories';
import faqData from '../../core/data/list-faq';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function FaqLayout() {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFaqs, setFilteredFaqs] = useState(faqData);
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Filter FAQ berdasarkan pencarian dan kategori
    useEffect(() => {
        const filtered = faqData.filter(faq => {
            const matchesSearch =
                searchQuery === '' ||
                faq.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.description.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory =
                selectedCategory === 'all' ||
                // Di sini logika filter kategori bisa ditambahkan jika data FAQ memiliki properti kategori
                true;

            return matchesSearch && matchesCategory;
        });

        setFilteredFaqs(filtered);
    }, [searchQuery, selectedCategory]);

    // Handle pencarian
    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    // Handle perubahan kategori
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    // Animasi container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.5
            }
        }
    };

    return (
        <>
            <Navbar />

            {/* Main Content with Background */}
            <div className="min-h-screen bg-gradient-to-b from-[#1A0425] via-[#2E073F] to-[#1A0425] text-white">
                {/* Top Spacer for Fixed Navbar */}
                <div className="h-24"></div>

                {/* FAQ Container */}
                <motion.div
                    className="container mx-auto px-4 py-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <FaqHeader />

                    <FaqSearch onSearch={handleSearch} />

                    <FaqCategories
                        onCategorySelect={handleCategorySelect}
                        currentCategory={selectedCategory}
                    />

                    {filteredFaqs.length > 0 ? (
                        <FaqAccordion faqs={filteredFaqs} />
                    ) : (<motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-5xl mb-6">🔍</div>
                        <h3 className="text-xl font-medium mb-2">{t('faq.no_results_found')}</h3>
                        <p className="text-gray-400">
                            {t('faq.try_different_keywords')}
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="mt-6 px-6 py-2 bg-[#7A1CAC]/50 hover:bg-[#AD49E1] rounded-full transition-colors duration-300"
                        >
                            {t('faq.view_all_faq')}
                        </button>
                    </motion.div>
                    )}

                    <FaqContact />
                </motion.div>
            </div>

            <Footer />
        </>
    );
}