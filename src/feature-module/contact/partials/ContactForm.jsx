import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
    const { t } = useTranslation();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formState.name || !formState.email || !formState.message) {
            return;
        }

        // Simulasi pengiriman pesan
        setIsSubmitted(true);
        setTimeout(() => {
            setFormState({ name: "", email: "", message: "" });
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
        >
            <motion.form
                className="bg-gradient-to-br from-[#2E073F]/80 to-[#1A0425] p-7 rounded-xl shadow-lg border border-purple-900 relative flex flex-col"
                onSubmit={handleSubmit}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h3 className="text-xl font-bold text-white mb-7">{t('contact.form.title') || t('contact.title')}</h3>

                <AnimatePresence>
                    {isSubmitted ? (
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center bg-[#2E073F] bg-opacity-95 rounded-xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="text-center p-8">
                                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-1">{t('contact.form.thankYou')}</h4>
                                <p className="text-gray-300">{t('contact.form.messageReceived')}</p>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                <div className="space-y-8 flex flex-col h-full">
                    <motion.div
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        variants={itemVariants}
                    >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{t('contact.form.name')}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded bg-[#1A0425]/60 text-white focus:outline-none focus:ring-2 focus:ring-[#AD49E1] border border-purple-800 shadow-sm transition-all duration-300 hover:border-[#AD49E1]"
                            required
                        />
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        variants={itemVariants}
                    >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{t('contact.form.email')}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded bg-[#1A0425]/60 text-white focus:outline-none focus:ring-2 focus:ring-[#AD49E1] border border-purple-800 shadow-sm transition-all duration-300 hover:border-[#AD49E1]"
                            required
                        />
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        variants={itemVariants}
                        className="flex-grow"
                    >
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{t('contact.form.message')}</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleInputChange}
                            className="w-full h-full min-h-[80px] p-3 rounded bg-[#1A0425]/60 text-white focus:outline-none focus:ring-2 focus:ring-[#AD49E1] border border-purple-800 shadow-sm transition-all duration-300 hover:border-[#AD49E1]"
                            style={{ resize: "none" }}
                            required
                        />
                    </motion.div>

                    <motion.div
                        className="relative mt-6 pt-6 border-t border-purple-900/30"
                        variants={itemVariants}
                    >
                        <motion.button
                            type="submit"
                            className="w-full bg-[#7A1CAC] hover:bg-[#AD49E1] text-white font-semibold py-3.5 rounded transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {t('contact.form.sendButton')}
                        </motion.button>
                    </motion.div>
                </div>
            </motion.form>
        </motion.div>
    );
}