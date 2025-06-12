import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import listAboutValues from '../../../core/data/list-about-values';

const AboutValues = () => {
    const { t } = useTranslation();

    // Animation variants for staggered animations
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className="py-16 relative overflow-hidden">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-[#AD49E1] to-white bg-clip-text text-transparent">
                        {t('aboutPage.valuesTitle', 'Nilai-Nilai Kami')}
                    </span>
                </h2>

                <div className="w-32 h-1.5 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mx-auto mb-8"></div>

                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    {t('aboutPage.valuesDescription', 'Nilai-nilai yang kami junjung tinggi dalam setiap langkah kami untuk memberikan solusi terbaik bagi klien.')}
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {listAboutValues.map((value) => (
                    <motion.div
                        key={value.id}
                        className="bg-gradient-to-br from-[#230b36]/50 to-[#1a0b29]/50 p-8 rounded-xl border border-purple-900/20 shadow-lg shadow-purple-900/10 relative group"
                        variants={itemVariants}
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#AD49E1] via-[#7A1CAC] to-transparent transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-500"></div>

                        <div className="mb-6 w-16 h-16 rounded-lg bg-gradient-to-br from-[#AD49E1]/20 to-[#7A1CAC]/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {value.icon}
                            </svg>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">
                            {t(value.title, value.titleDefault)}
                        </h3>

                        <p className="text-gray-300">
                            {t(value.text, value.textDefault)}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default AboutValues;
