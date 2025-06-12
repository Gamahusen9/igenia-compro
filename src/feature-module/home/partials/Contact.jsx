import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const { t } = useTranslation();
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isHovered, setIsHovered] = useState(false);

    // Initialize AOS animation library
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log('Form submitted:', formState);
        // Reset form
        setFormState({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-24 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 relative"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-block relative">
                        {/* Email icon - relates to contact */}
                        <motion.div
                            className="absolute -top-8 -right-8 w-16 h-16 opacity-30"
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
                                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z" />
                            </svg>
                        </motion.div>

                        {/* Phone icon - also relates to contact */}
                        <motion.div
                            className="absolute -bottom-8 -left-8 w-16 h-16 opacity-30"
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
                                <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.32.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                        </motion.div>

                        <h2
                            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#AD49E1] to-white bg-clip-text text-transparent mb-4 relative z-10"
                            data-aos="zoom-in"
                        >
                            {t('contactSection.title')}
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mx-auto"></div>
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        {t('contactSection.description')}
                    </p>
                </motion.div>

                {/* Form Content */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto border border-purple-500/20 relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-5">
                        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-purple-500/30"></div>
                        <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-purple-700/30"></div>
                    </div>

                    <motion.form
                        className="grid gap-6 relative z-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                variants={itemVariants}
                            >
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleInputChange}
                                    placeholder={t('contactSection.namePlaceholder')}
                                    className="w-full p-3 rounded bg-[#2E073F] text-white focus:outline-none focus:ring-2 focus:ring-[#AD49E1] border border-[#471166] transition-all duration-300 hover:border-[#AD49E1]"
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                variants={itemVariants}
                            >
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleInputChange}
                                    placeholder={t('contactSection.emailPlaceholder')}
                                    className="w-full p-3 rounded bg-[#2E073F] text-white focus:outline-none focus:ring-2 focus:ring-[#AD49E1] border border-[#471166] transition-all duration-300 hover:border-[#AD49E1]"
                                />
                            </motion.div>
                        </div>
                        <motion.div
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            variants={itemVariants}
                        >
                            <textarea
                                name="message"
                                value={formState.message}
                                onChange={handleInputChange}
                                placeholder={t('contactSection.messagePlaceholder')}
                                rows={4}
                                className="w-full p-3 rounded bg-[#2E073F] text-white focus:outline-none focus:ring-2 focus:ring-[#AD49E1] border border-[#471166] transition-all duration-300 hover:border-[#AD49E1]"
                            />
                        </motion.div>
                        <motion.div
                            className="relative"
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                            variants={itemVariants}
                        >
                            <motion.button
                                type="submit"
                                className="w-full bg-[#AD49E1] text-white font-semibold py-3 rounded transition-all duration-300 shadow-lg relative z-10 overflow-hidden"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                {t('contactSection.sendButton')}
                            </motion.button>
                            <motion.div
                                className="absolute inset-0 bg-[#7A1CAC] rounded"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: isHovered ? 1 : 0,
                                    opacity: isHovered ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                style={{ zIndex: 0 }}
                            />
                        </motion.div>
                    </motion.form>

                    {/* Animated decorative elements */}
                    <motion.div
                        className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full opacity-30"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-20"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;