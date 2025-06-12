import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import getServiceCategories from '../../../core/data/list-services';

const Services = () => {
    const { t } = useTranslation();

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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 10 }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            transition: { type: "spring", stiffness: 400, damping: 10 }
        }
    };

    return (<section id="services" className="py-24 overflow-hidden relative">

        <div className="container mx-auto px-4 md:px-8">
            {/* Section Header */}
            <motion.div
                className="text-center mb-16 relative"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7 }}
            >                <div className="inline-block relative">
                    {/* Gear icon - relates to services/solutions */}
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
                            <path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
                        </svg>
                    </motion.div>

                    {/* Tools/wrench icon - also relates to services */}
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
                            <path fill="currentColor" d="m13.78 15.5l-2.44-2.44l4.95-4.95l2.44 2.44l-4.95 4.95m2.04-9.61a1 1 0 0 0-1.45.05l-1.83 2.07l.74.74l-1.25 1.25l-.74-.74l-2.1 2.15a1 1 0 0 0-.06 1.4l-3.19 3.19c-.83.83-.83 2.17 0 3 .41.42.96.63 1.5.63s1.09-.21 1.5-.63l3.19-3.19a1 1 0 0 0 1.35-.11l2.15-2.15l-.73-.73l1.25-1.25l.73.73l2.07-1.83c.38-.38.38-1.01 0-1.39l-2.08-2.13Z" />
                        </svg>
                    </motion.div>
                    <h2
                        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#AD49E1] to-white bg-clip-text text-transparent mb-4 relative z-10"
                        data-aos="zoom-in"
                    >
                        {t('servicesSection.title')}
                    </h2>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mx-auto"></div>
                <p className="text-gray-300 mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                    {t('servicesSection.subtitle')}
                </p>
            </motion.div>

            {/* Service Categories */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {serviceCategories.map((category) => (
                    <motion.div
                        key={category.id}
                        className="relative"
                        variants={itemVariants}                    >                            <motion.div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full border border-purple-500/20 relative overflow-hidden"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            {/* Background pattern */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-purple-500/30"></div>
                                <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-purple-700/30"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-6">                                    <div className="text-4xl p-3 bg-purple-900/30 rounded-full mr-4">
                                    {category.icon}
                                </div>
                                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                </div>

                                <ul className="space-y-3 relative z-10">
                                    <AnimatePresence>
                                        {category.services.map((service, index) => (<motion.li
                                            key={index}
                                            className="flex items-center text-gray-300 hover:text-white transition-colors"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                delay: index * 0.1
                                            }}
                                        >
                                            <span className="text-purple-400 mr-3 bg-purple-900/20 p-2 rounded-md">
                                                {service.icon}
                                            </span>
                                            <span>{service.name}</span>
                                        </motion.li>
                                        ))}
                                    </AnimatePresence>
                                </ul>
                            </div>

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
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>               
        </div>
    </section>
    );
};

export default Services;