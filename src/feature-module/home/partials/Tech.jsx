import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { categories, technologies } from '../../../core/data/list-tech';

const Tech = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        AOS.init({
            duration: 500, // Faster animation duration
            once: true,
            easing: 'ease-out'
        });
    }, []);

    // Get translated category names - perbaikan key translation
    const translatedCategories = categories.map(category => ({
        ...category,
        name: t(`techSection.categories.${category.id}`)
    }));

    // Filter technologies based on the active category
    const filteredTechnologies = activeCategory === 'all'
        ? technologies
        : technologies.filter(tech => tech.category === activeCategory);

    // Perbaikan untuk translasi kategori
    const translatedTechnologies = filteredTechnologies.map(tech => {
        // Konversi dari kategori teknologi ke ID kategori yang sesuai
        const categoryId = categories.find(cat => cat.id === tech.category)?.id || tech.category;

        return {
            ...tech,
            // Gunakan ID kategori yang benar untuk terjemahan
            categoryDisplay: t(`techSection.categories.${categoryId}`)
        };
    });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 10 }
        }
    }; return (
        <section id="technologies" className="py-24 text-white relative overflow-hidden">
            {/* Enhanced purple-themed decorative elements */}

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 relative"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block relative">
                        {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10"
                            data-aos="zoom-in">
                            {t('techSection.title')}
                        </h2> */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-[#AD49E1] to-white bg-clip-text text-transparent">
                                {t('tecgSection.title', 'Teknologi Kami')}
                            </span>
                        </h2>

                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-white/80 to-purple-200 mx-auto mb-6"></div>
                    <p className="text-xl text-purple-100 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        {t('techSection.subtitle')}
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {translatedCategories.map((category, index) => (
                        <motion.button
                            key={category.id}
                            className={`px-5 py-2 rounded-full transition-all shadow-lg ${activeCategory === category.id
                                ? 'bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] text-white shadow-purple-500/30'
                                : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20'
                                }`}
                            onClick={() => setActiveCategory(category.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                                delay: index * 0.05 + 0.3
                            }}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Technologies Grid with immediate hover effect */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <AnimatePresence>
                        {translatedTechnologies.map((tech) => (
                            <motion.div
                                key={tech.id}
                                className="group relative bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center 
                                        border border-purple-500/10 overflow-hidden"
                                variants={itemVariants}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px -5px rgba(173, 73, 225, 0.25)",
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 10,
                                        duration: 0 // No delay on hover
                                    }
                                }}
                            >
                                {/* Decorative background for card */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#AD49E1]/10 to-transparent rounded-full blur-xl"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#7A1CAC]/10 to-transparent rounded-full blur-xl"></div>
                                </div>

                                {/* Animated glow effect on hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] rounded-lg blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                                {/* Tech icon with container */}
                                <div className="bg-[#3D1657]/50 rounded-full p-3 mb-4 relative z-10">
                                    <div className="h-14 w-14 flex items-center justify-center">
                                        <motion.img
                                            src={tech.iconSrc}
                                            alt={tech.name}
                                            className="max-h-full max-w-full transition-transform"
                                            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>

                                {/* Tech name */}
                                <h3 className="text-lg font-medium text-center text-white relative z-10">{tech.name}</h3>

                                {/* Category badge - now using translated category */}
                                <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-[#AD49E1]/20 text-purple-200 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {tech.categoryDisplay}
                                </span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom decorative accent */}
                <motion.div
                    className="mx-auto w-48 h-1 mt-16 bg-gradient-to-r from-transparent via-[#AD49E1]/50 to-transparent"
                    initial={{ opacity: 0, width: "20%" }}
                    whileInView={{ opacity: 1, width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                />
            </div>
        </section>
    );
};

export default Tech;