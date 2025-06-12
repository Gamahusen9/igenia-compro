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
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        // Show success message
        setIsSubmitted(true);
        // Reset form
        setTimeout(() => {
            setFormState({ name: "", email: "", message: "" });
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <section id="contact" className="py-24 overflow-hidden relative bg-white">
            {/* Enhanced decorative elements for bottom section */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent -z-0"></div>

            <motion.div
                className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-gradient-to-br from-purple-50 to-white blur-3xl opacity-60"
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
                className="absolute top-40 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-white to-purple-50 blur-3xl opacity-50"
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
                            className="absolute -top-8 -right-8 w-16 h-16 opacity-50"
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-purple-600">
                                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                            </svg>
                        </motion.div>

                        {/* Phone icon - also relates to contact */}
                        <motion.div
                            className="absolute -bottom-8 -left-8 w-16 h-16 opacity-50"
                            animate={{
                                rotate: -360,
                                scale: [1, 1.15, 1]
                            }}
                            transition={{
                                rotate: { duration: 35, repeat: Infinity, ease: "linear" },
                                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-purple-600">
                                <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                        </motion.div>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#7A1CAC] mb-4 relative z-10"
                            data-aos="zoom-in"
                        >
                            {t('contactSection.title')}
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mx-auto"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        {t('contactSection.subtitle')}
                    </p>
                </motion.div>

                {/* Two Column Layout for Contact Info and Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                    {/* Contact Information Column */}
                    <motion.div
                        className="flex flex-col space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-lg border border-purple-100">
                            <h3 className="text-xl font-bold text-[#7A1CAC] mb-4">{t('contactSection.contactInfo')}</h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7A1CAC]" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">{t('contactSection.email')}</p>
                                        <a href="mailto:contact@igenia.id" className="text-[#7A1CAC] hover:text-[#AD49E1] transition-colors">
                                            contact@igenia.id
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7A1CAC]" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">{t('contactSection.phone')}</p>
                                        <a href="tel:+6282123456789" className="text-[#7A1CAC] hover:text-[#AD49E1] transition-colors">
                                            +62 821-2345-6789
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7A1CAC]" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">{t('contactSection.address')}</p>
                                        <p className="text-gray-700">
                                            Jl. Tebet Barat IV No.20<br />
                                            Jakarta Selatan, DKI Jakarta<br />
                                            Indonesia 12810
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="flex space-x-4 mt-8">
                                <motion.a
                                    href="#"
                                    className="bg-purple-100 p-3 rounded-lg text-[#7A1CAC] hover:bg-[#7A1CAC] hover:text-white transition-colors"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="bg-purple-100 p-3 rounded-lg text-[#7A1CAC] hover:bg-[#7A1CAC] hover:text-white transition-colors"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="bg-purple-100 p-3 rounded-lg text-[#7A1CAC] hover:bg-[#7A1CAC] hover:text-white transition-colors"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="bg-purple-100 p-3 rounded-lg text-[#7A1CAC] hover:bg-[#7A1CAC] hover:text-white transition-colors"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </motion.a>
                            </div>
                        </div>

                        {/* Map or Office Image */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-purple-100">
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1854623139563!2d106.8344973!3d-6.2382632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3bffcf4a443%3A0x3d1c736f7062cc4!2sJl.%20Tebet%20Barat%20IV%2C%20Tebet%2C%20Kecamatan%20Tebet%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1623222345678!5m2!1sen!2sid"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="iGenia Office Location"
                                    className="w-full"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.form
                            className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-xl shadow-lg border border-purple-100 relative"
                            onSubmit={handleSubmit}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h3 className="text-xl font-bold text-[#7A1CAC] mb-6">{t('contactSection.sendMessage')}</h3>

                            <AnimatePresence>
                                {isSubmitted ? (
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-95 rounded-xl"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="text-center p-8">
                                            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-800 mb-2">{t('contactSection.thankYou')}</h4>
                                            <p className="text-gray-600">{t('contactSection.messageReceived')}</p>
                                        </div>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>

                            <div className="space-y-6">
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
                                        className="w-full p-3 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#AD49E1] border border-purple-200 shadow-sm transition-all duration-300 hover:border-[#AD49E1]"
                                        required
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
                                        className="w-full p-3 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#AD49E1] border border-purple-200 shadow-sm transition-all duration-300 hover:border-[#AD49E1]"
                                        required
                                    />
                                </motion.div>
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
                                        rows={5}
                                        className="w-full p-3 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#AD49E1] border border-purple-200 shadow-sm transition-all duration-300 hover:border-[#AD49E1]"
                                        required
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
                                        className="w-full bg-[#7A1CAC] text-white font-semibold py-3 rounded transition-all duration-300 shadow-lg relative z-10 overflow-hidden"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        {t('contactSection.sendButton')}
                                    </motion.button>
                                    <motion.div
                                        className="absolute inset-0 bg-[#AD49E1] rounded"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{
                                            scale: isHovered ? 1 : 0,
                                            opacity: isHovered ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        style={{ zIndex: 0 }}
                                    />
                                </motion.div>
                            </div>
                        </motion.form>
                    </motion.div>
                </div>
            </div>

            {/* Gradient bottom transition to footer */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-gray-100 -z-10"></div>
        </section>
    );
};

export default Contact;