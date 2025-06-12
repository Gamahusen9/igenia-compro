import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function FaqHeader() {
    const { t } = useTranslation();

    return (
        <div className="text-center mb-16">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block"
            >                <h2 className="inline-block bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    {t('faq.frequently_asked_questions')}
                </h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 max-w-2xl mx-auto text-lg"
            >
                {t('faq.faq_description')}
            </motion.p>
        </div>
    );
}
