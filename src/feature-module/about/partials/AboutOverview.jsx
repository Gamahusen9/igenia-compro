import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutOverview = () => {
    const { t } = useTranslation();

    return (
        <div className="py-16 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                {/* Logo Column */}
                <motion.div
                    className="w-full md:w-2/5"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="relative">
                        {/* Animated circles around logo */}
                        <motion.div
                            className="absolute inset-0 -z-10 rounded-full"
                            animate={{
                                boxShadow: [
                                    "0 0 0 0 rgba(173, 73, 225, 0)",
                                    "0 0 0 30px rgba(173, 73, 225, 0.1)",
                                    "0 0 0 60px rgba(173, 73, 225, 0)",
                                ]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4
                            }}
                        />

                        <motion.div
                            className="bg-gradient-to-br from-[#230b36]/30 to-[#7A1CAC]/20 p-8 rounded-2xl border border-purple-900/30 shadow-lg shadow-purple-900/20"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src="/assets/logo.png"
                                alt="Igenia Logo"
                                className="max-w-full h-auto rounded-xl mx-auto"
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Description Column */}
                <motion.div
                    className="w-full md:w-3/5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-[#AD49E1] to-white bg-clip-text text-transparent">
                            {t('aboutPage.companyTitle', 'PT Inovasi Generasi Indonesia')}
                        </span>
                    </h2>

                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mb-6"></div>

                    <p className="text-gray-300 text-lg mb-6">
                        {t('aboutPage.companyDescription', 'Igenia is an innovative technology company focused on developing digital solutions to help businesses in their digital transformation journey. Founded with a passion for technology and a vision to empower organizations through digital innovation, we combine technical expertise with creative thinking to deliver exceptional results.')}
                    </p>

                    <p className="text-gray-300 text-lg">
                        {t('aboutPage.companyDescription2', 'With deep experience and cutting-edge technology, we\'re ready to be your business success partner in navigating the ever-evolving digital landscape. Our team of skilled professionals is dedicated to helping your organization thrive in the digital era.')}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutOverview;
