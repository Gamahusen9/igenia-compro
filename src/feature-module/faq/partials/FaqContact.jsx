import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function FaqContact() {
    const { t } = useTranslation();

    return (
        <motion.div
            className="bg-gradient-to-r from-[#2E073F] to-[#1A0425] rounded-2xl p-8 mt-20 shadow-xl border border-[#7A1CAC]/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6">                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {t('faq.still_have_questions')}
                </h3>
                    <p className="text-gray-300">
                        {t('faq.contact_us_message')}
                    </p>
                </div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-[#AD49E1] hover:bg-[#9B25D3] text-white font-medium transition-colors duration-300 shadow-lg"
                    >
                        <span>{t('faq.contact_us')}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}
