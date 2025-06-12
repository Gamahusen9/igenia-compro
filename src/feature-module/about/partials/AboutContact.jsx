import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutContact = () => {
    const { t } = useTranslation();

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
                        {t('aboutPage.contactTitle', 'Get In Touch')}
                    </span>
                </h2>

                <div className="w-32 h-1.5 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mx-auto mb-8"></div>

                <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                    {t('aboutPage.contactDescription', 'Have questions about our company or services? We\'d love to hear from you!')}
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
                <motion.div
                    className="group bg-gradient-to-br from-[#230b36]/80 to-[#1a0b29]/60 p-6 rounded-xl border border-purple-900/30 shadow-lg shadow-purple-900/20 flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5 }}
                >
                    <div className="mb-4 p-3 rounded-full bg-[#7A1CAC]/30 group-hover:bg-[#7A1CAC]/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#AD49E1]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{t('aboutPage.emailTitle', 'Email Us')}</h3>
                    <a href="mailto:info@igenia.id" className="text-[#AD49E1] hover:text-[#c77ae6] transition-colors">info@igenia.id</a>
                </motion.div>

                <motion.div
                    className="group bg-gradient-to-br from-[#230b36]/80 to-[#1a0b29]/60 p-6 rounded-xl border border-purple-900/30 shadow-lg shadow-purple-900/20 flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ y: -5 }}
                >
                    <div className="mb-4 p-3 rounded-full bg-[#7A1CAC]/30 group-hover:bg-[#7A1CAC]/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#AD49E1]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{t('aboutPage.addressTitle', 'Visit Us')}</h3>
                    <address className="text-gray-300 text-center not-italic">
                        Jl. Mayjen Sungkono No.89, Surabaya<br />
                        East Java, Indonesia
                    </address>
                </motion.div>

                <motion.div
                    className="group bg-gradient-to-br from-[#230b36]/80 to-[#1a0b29]/60 p-6 rounded-xl border border-purple-900/30 shadow-lg shadow-purple-900/20 flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -5 }}
                >
                    <div className="mb-4 p-3 rounded-full bg-[#7A1CAC]/30 group-hover:bg-[#7A1CAC]/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#AD49E1]" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{t('aboutPage.phoneTitle', 'Call Us')}</h3>
                    <a href="tel:+6282123456789" className="text-[#AD49E1] hover:text-[#c77ae6] transition-colors">+62 821-2345-6789</a>
                </motion.div>
            </div>

            <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7A1CAC] to-[#AD49E1] rounded-full hover:from-[#8A2CDA] hover:to-[#C159FF] transition-all duration-300 shadow-md hover:shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 text-white font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {t('aboutPage.contactButton', 'Contact Us')}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </motion.a>
            </motion.div>
        </div>
    );
};

export default AboutContact;
