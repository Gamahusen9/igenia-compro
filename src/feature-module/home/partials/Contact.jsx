import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const { t } = useTranslation();

    // Initialize AOS animation library
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });
    }, []);

    return (
        <section id="contact" className="py-16 overflow-hidden relative flex flex-col justify-center">
            {/* Decorative elements */}
            <motion.div
                className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-purple-50 to-white blur-3xl opacity-60"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-white to-purple-50 blur-3xl opacity-50"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            <div className="container mx-auto px-4 md:px-8 flex flex-col justify-center text-center">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10 relative"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-block relative">
                        {/* Email icon - relates to contact */}
                        <motion.div
                            className="absolute -top-6 -right-6 w-12 h-12 opacity-30"
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-purple-300">
                                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                            </svg>
                        </motion.div>

                        {/* Phone icon - also relates to contact */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 w-12 h-12 opacity-30"
                            animate={{
                                rotate: -360,
                                scale: [1, 1.15, 1]
                            }}
                            transition={{
                                rotate: { duration: 35, repeat: Infinity, ease: "linear" },
                                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-purple-300">
                                <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                        </motion.div>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10"
                            data-aos="zoom-in"
                        >
                            Informasi & Bisnis Inkuiri
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mx-auto"></div>
                </motion.div>

                {/* Main Content - Simple Button */}
                <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="mt-6 mb-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <a
                            href="mailto:contact@igenia.id"
                            className="inline-block bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] text-white py-3 px-8 rounded-full font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
                        >
                            {t('contact.title')}
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;