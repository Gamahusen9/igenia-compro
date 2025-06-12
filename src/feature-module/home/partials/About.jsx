import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const About = () => {
    const { t } = useTranslation(); return (
        <section className="py-24 overflow-hidden relative">

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Column - Logo Animation */}
                    <motion.div
                        className="w-full md:w-2/5 flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, type: "spring" }}
                    >
                        <div className="relative">
                            {/* Animated circles around logo */}
                            <motion.div
                                className="absolute inset-0 -z-10"
                                animate={{
                                    boxShadow: [
                                        "0 0 0 0 rgba(173, 73, 225, 0)",
                                        "0 0 0 20px rgba(173, 73, 225, 0.1)",
                                        "0 0 0 40px rgba(173, 73, 225, 0)",
                                    ]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3
                                }}
                            />

                            {/* The actual logo */}
                            <motion.div
                                className="relative p-3 rounded-2xl"
                                whileHover={{ scale: 1.05, rotate: 3 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <img
                                    src="/assets/logo.png"
                                    alt="Igenia Logo"
                                    className="h-60 w-auto rounded-xl"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2
                                className="text-2xl md:text-3xl font-bold text-white mb-2"
                                data-aos="fade-up"
                            >                <span className="bg-gradient-to-r from-[#AD49E1] to-white bg-clip-text text-transparent">
                                    {t('aboutSection.title', 'Tentang Igenia')}
                                </span>
                            </h2>

                            <div
                                className="w-24 h-1.5 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mb-6"
                                data-aos="fade-right"
                                data-aos-delay="300"
                            ></div>

                            <p
                                className="text-gray-300 mb-8 text-lg"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                {t('aboutSection.shortDescription', 'Igenia adalah perusahaan teknologi inovatif yang berfokus pada pengembangan solusi digital untuk membantu bisnis dalam transformasi digital. Dengan pengalaman mendalam dan teknologi terkini, kami siap menjadi partner sukses bisnis Anda.')}
                            </p>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2 bg-[#7A1CAC] hover:bg-[#AD49E1] text-white px-6 py-3 rounded-md shadow-lg shadow-purple-800/30 transition-all duration-300"
                                >
                                    {t('aboutSection.readMore', 'Selengkapnya')}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Interactive floating elements */}
            <div className="hidden lg:block">
                <motion.div
                    className="absolute top-24 left-[15%] w-8 h-8 rounded-full bg-[#AD49E1]/30"
                    animate={{
                        y: [0, 15, 0],
                        opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-[20%] w-6 h-6 rounded-full bg-[#7A1CAC]/30"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.7, 0.2]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/2 right-[10%] w-4 h-4 rounded-full bg-white/20"
                    animate={{
                        y: [0, 10, 0],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </section>
    );
};

export default About;