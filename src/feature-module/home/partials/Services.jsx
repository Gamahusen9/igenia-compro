import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import getServiceCategories from '../../../core/data/list-services';

const Services = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const carouselRef = useRef(null);

    // Initialize AOS animation library
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });
    }, []);

    // Get services data from imported function
    const serviceCategories = getServiceCategories(t);

    // Calculate how many items to show based on screen size
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Handle slide navigation
    const totalSlides = serviceCategories.length;
    const maxIndex = Math.max(0, totalSlides - itemsToShow);

    const nextSlide = () => {
        setActiveIndex(prev => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setActiveIndex(prev => Math.max(prev - 1, 0));
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            nextSlide();
        }

        if (touchStart - touchEnd < -50) {
            prevSlide();
        }
    };

    // Animation variants for items
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            transition: { type: "spring", stiffness: 300, damping: 10 }
        }
    };

    // Auto-rotation effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (activeIndex < maxIndex) {
                nextSlide();
            } else {
                setActiveIndex(0);
            }
        }, 6000);
        return () => clearInterval(interval);
    }, [activeIndex, maxIndex]);

    return (
        <section id="services" className="py-24 overflow-hidden relative bg-white">
            {/* Decorative elements for white background */}
            <motion.div
                className="absolute top-0 left-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 to-gray-100 blur-xl opacity-60"
                animate={{
                    y: [10, -10, 10],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute top-20 right-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-50 to-gray-200 blur-xl opacity-50"
                animate={{
                    y: [5, -5, 5],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
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
                        {/* Gear icon - relates to services/solutions */}
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
                                <path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
                            </svg>
                        </motion.div>

                        {/* Tools/wrench icon - also relates to services */}
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
                                <path fill="currentColor" d="m13.78 15.5l-2.44-2.44l4.95-4.95l2.44 2.44l-4.95 4.95m2.04-9.61a1 1 0 0 0-1.45.05l-1.83 2.07l.74.74l-1.25 1.25l-.74-.74l-2.1 2.15a1 1 0 0 0-.06 1.4l-3.19 3.19c-.83.83-.83 2.17 0 3 .41.42.96.63 1.5.63s1.09-.21 1.5-.63l3.19-3.19a1 1 0 0 0 1.35-.11l2.15-2.15l-.73-.73l1.25-1.25l.73.73l2.07-1.83c.38-.38.38-1.01 0-1.39l-2.08-2.13Z" />
                            </svg>
                        </motion.div>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#7A1CAC] mb-4 relative z-10"
                            data-aos="zoom-in"
                        >
                            {t('servicesSection.title')}
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mx-auto"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        {t('servicesSection.subtitle')}
                    </p>
                </motion.div>

                {/* Multi-item Carousel */}
                <div className="relative">
                    {/* Carousel container */}
                    <div
                        ref={carouselRef}
                        className="overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${activeIndex * (100 / itemsToShow)}%)` }}
                        >
                            {serviceCategories.map((category, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0`}
                                    style={{ width: `${100 / itemsToShow}%`, padding: '0 12px' }}
                                >
                                    <motion.div
                                        className="bg-gradient-to-br from-white to-gray-100 rounded-xl border border-gray-200 shadow-lg h-full p-6"
                                        variants={itemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        whileHover="hover"
                                        viewport={{ once: true }}
                                    >
                                        {/* Centered icon */}
                                        <div className="flex justify-center mb-6">
                                            <span className="text-purple-600 bg-purple-50 p-5 rounded-full shadow-inner inline-block">
                                                <div className="text-4xl md:text-5xl">
                                                    {category.icon}
                                                </div>
                                            </span>
                                        </div>

                                        {/* Category title */}
                                        <h3 className="text-xl md:text-2xl font-bold text-purple-800 mb-4 text-center">
                                            {category.title}
                                        </h3>

                                        {/* Services displayed as tags/pills */}
                                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                                            {category.services.slice(0, 4).map((service, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full flex items-center text-sm"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                >
                                                    <span className="mr-1.5">{service.icon}</span>
                                                    <span>{service.name}</span>
                                                </motion.div>
                                            ))}
                                            {category.services.length > 4 && (
                                                <motion.div
                                                    className="bg-purple-200 text-purple-800 px-3 py-1.5 rounded-full text-sm"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                >
                                                    +{category.services.length - 4}
                                                </motion.div>
                                            )}
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Navigation Controls */}
                    {activeIndex > 0 && (
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-purple-700 p-2 rounded-full shadow-md z-10"
                            aria-label="Previous services"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {activeIndex < maxIndex && (
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-purple-700 p-2 rounded-full shadow-md z-10"
                            aria-label="Next services"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    {/* Dots indicator */}
                    {itemsToShow === 1 && (
                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-purple-600' : 'bg-gray-300'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}

                    {itemsToShow > 1 && (
                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-purple-600' : 'bg-gray-300'
                                        }`}
                                    aria-label={`Go to slide group ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Services;