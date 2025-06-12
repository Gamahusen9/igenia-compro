import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import navLinks from '../core/data/list-navbar';
import languages from '../core/data/list-lang';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close language dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showLanguages && !event.target.closest('.language-selector')) {
                setShowLanguages(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showLanguages]);

    // Function to change language with animation
    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
        setShowLanguages(false);
    };

    // Get current language data
    const getCurrentLanguage = () => {
        return languages.find(lang => lang.code === i18n.language) || languages[0];
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#2E073F]/95 shadow-lg backdrop-blur-sm py-2'
                : 'bg-transparent py-4'
                }`}
            data-aos="fade-down"
            data-aos-duration="800"
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center"
                    >
                        <Link to="/" className="text-white flex items-center">
                            <img src="/assets/logo.png" alt="Igenia" className="h-20 w-auto rounded-md" />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`text-base font-medium transition-colors hover:text-[#AD49E1] ${scrolled ? 'text-white' : 'text-white'
                                            }`}
                                    >
                                        {t(link.title)}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>                        {/* Language Selector */}
                        <div className="relative language-selector">
                            <motion.button
                                onClick={() => setShowLanguages(!showLanguages)}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all ${showLanguages
                                    ? 'bg-[#7A1CAC]/70'
                                    : scrolled ? 'hover:bg-[#7A1CAC]/30' : 'hover:bg-[#2E073F]/40'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src={getCurrentLanguage().flag}
                                    alt={getCurrentLanguage().code}
                                    className="w-6 h-6 rounded-sm border border-white/20 object-cover shadow-sm"
                                />
                                <span className="text-white text-sm font-medium">{getCurrentLanguage().code.toUpperCase()}</span>
                                <svg
                                    className={`w-5 h-5 text-white transition-transform ${showLanguages ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </motion.button>

                            <AnimatePresence>
                                {showLanguages && (
                                    <motion.div
                                        className="absolute top-full right-0 mt-2 bg-[#2E073F]/95 backdrop-blur-md rounded-md shadow-lg overflow-hidden z-50 min-w-[140px] border border-[#7A1CAC]/20"
                                        initial={{ opacity: 0, y: -5, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -5, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {languages.map((lang) => (
                                            <motion.button
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`flex items-center space-x-3 w-full px-4 py-3 text-left transition-all ${i18n.language === lang.code
                                                    ? 'bg-[#7A1CAC] text-white'
                                                    : 'text-white hover:bg-[#7A1CAC]/50'
                                                    }`}
                                                whileHover={{ x: 3 }}
                                            >
                                                <img
                                                    src={lang.flag}
                                                    alt={lang.code}
                                                    className="w-5 h-5 rounded-sm border border-white/20 object-cover shadow-sm"
                                                />
                                                <span className="text-sm">{lang.name}</span>
                                                {i18n.language === lang.code && (
                                                    <motion.svg
                                                        className="w-5 h-5 text-white ml-auto"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </motion.svg>
                                                )}
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isOpen ? (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mt-4 py-4 bg-[#2E073F]/95 rounded-lg shadow-xl backdrop-blur-sm"
                    >
                        <div className="flex flex-col space-y-3 px-4">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    className="text-white hover:text-[#AD49E1] py-2 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t(link.title)}
                                </Link>
                            ))}                            {/* Mobile Language Selector */}
                            <div className="flex flex-col space-y-2 pt-3 border-t border-[#7A1CAC]/30">
                                <p className="text-white/70 text-xs uppercase tracking-wider mb-1">
                                    {t('select_language') || 'Select Language'}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((lang) => (
                                        <motion.button
                                            key={lang.code}
                                            onClick={() => {
                                                i18n.changeLanguage(lang.code);
                                                setIsOpen(false);
                                            }}
                                            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all ${i18n.language === lang.code
                                                ? 'bg-[#7A1CAC] text-white'
                                                : 'bg-[#2E073F]/50 text-gray-200 border border-[#7A1CAC]/30'
                                                }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <img
                                                src={lang.flag}
                                                alt={lang.code}
                                                className="w-5 h-5 rounded-sm object-cover border border-white/20 shadow-sm"
                                            />
                                            <span className="text-sm font-medium">{lang.name}</span>
                                            {i18n.language === lang.code && (
                                                <motion.svg
                                                    className="w-5 h-5 ml-1"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1, rotate: 360 }}
                                                    transition={{ duration: 0.3 }}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </motion.svg>
                                            )}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}