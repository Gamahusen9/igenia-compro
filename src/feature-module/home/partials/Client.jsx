import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Client = () => {
    const { t } = useTranslation();
    const [isLoaded, setIsLoaded] = useState(false);

    // Initialize AOS animation library
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });

        // Set a small timeout to ensure content is ready before animations
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Sample client data - replace with actual client logos
    const clients = [
        { id: 1, name: "Alibaba", logo: "/assets/client/alibaba.png" },
        { id: 2, name: "Bina Rumah Online", logo: "/assets/client/bro.png" },
        { id: 3, name: "BSI", logo: "/assets/client/bsi.png" },
        { id: 4, name: "E2Pay", logo: "/assets/client/e2pay.png" },
        { id: 5, name: "Evoteks", logo: "/assets/client/evoteks.png" },
        { id: 6, name: "Indonet", logo: "/assets/client/indonet.png" },
        { id: 7, name: "Rajabiller", logo: "/assets/client/rajabiller.png" },
        { id: 8, name: "Speed Cash", logo: "/assets/client/speedcash.png" },
        { id: 9, name: "Voltras", logo: "/assets/client/voltras.png" },
        { id: 10, name: "Winpay", logo: "/assets/client/winpay.png" },
        { id: 11, name: "Xendit", logo: "/assets/client/xendit.png" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                when: "beforeChildren",
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.2 }
        }
    };

    return (
        <LazyMotion features={domAnimation}>
            <section id="clients" className="py-12 overflow-hidden relative bg-white">
                {/* Animated Shapes/Particles */}
                <motion.div
                    className="absolute top-20 left-10 w-20 h-20 rounded-full bg-purple-200 opacity-10 pointer-events-none"
                    animate={{
                        y: [0, 30, -20, 0],
                        x: [0, 20, -10, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-20 right-10 w-24 h-24 rounded-lg bg-purple-300 opacity-10 pointer-events-none"
                    animate={{
                        y: [0, -40, 20, 0],
                        x: [0, -30, 15, 0],
                        rotate: [0, 45, -20, 0],
                        scale: [1, 0.9, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-pink-200 opacity-10 pointer-events-none"
                    animate={{
                        y: [0, 50, -30, 0],
                        x: [0, -20, 40, 0],
                        scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-lg bg-purple-400 opacity-5 pointer-events-none"
                    animate={{
                        y: [0, -20, 40, 0],
                        x: [0, 30, -15, 0],
                        rotate: [0, -30, 15, 0],
                        scale: [1, 0.8, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute top-1/3 left-2/3 w-20 h-20 rotate-45 bg-pink-300 opacity-10 pointer-events-none"
                    animate={{
                        y: [0, 40, -30, 0],
                        x: [0, -25, 15, 0],
                        rotate: [45, 90, 0, 45],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-10 relative"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-block relative">
                            {/* Building/business icon */}
                            <motion.div
                                className="absolute -top-10 -right-10 w-20 h-20 opacity-20"
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-purple-500">
                                    <path fill="currentColor" d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                                </svg>
                            </motion.div>

                            {/* Handshake/partners icon */}
                            <motion.div
                                className="absolute -bottom-10 -left-10 w-20 h-20 opacity-20"
                                animate={{
                                    rotate: -360,
                                    scale: [1, 1.15, 1]
                                }}
                                transition={{
                                    rotate: { duration: 35, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-purple-500">
                                    <path fill="currentColor" d="M11.65 3.46c.35-.15.7-.22 1.07-.2c.77.04 1.43.45 1.88 1c.45.55.68 1.23.68 1.92c0 .69-.23 1.36-.68 1.92l-1.2 1.47c-.44.52-1.09.93-1.85.97c-.19.02-.37 0-.56-.05c-.44-.11-.83-.34-1.15-.65L8.63 11c-.71-.82-1.14-1.86-1.14-3c0-1.13.43-2.17 1.13-2.96l1.31-1.21c.53-.38 1.25-.5 1.72-.37M16 5.58c0 .46.1.9.27 1.32l-1.9 2.31c.81.26 1.5.74 1.97 1.35c.72.92 1.02 2.14.69 3.34c-.33 1.2-1.35 2.09-2.58 2.3l-.03 3.8H9.5v-3h-2v-3H5v-3H1.76l1.9-2.35C3.89 9.89 4 10.19 4 10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.84-.68-1.52-1.53-1.5H3.25c.31-.79.84-1.5 1.53-2.12l1.8.62c.73.25 1.4.68 1.91 1.27l.46-.46c.35-.35.81-.6 1.32-.7c.5-.09 1.03-.05 1.51.12l1.21-1.48c.06-.07.11-.14.16-.22c-.28-.27-.51-.59-.66-.95c-.37-.88-.21-1.95.37-2.74c.58-.78 1.68-1.18 2.67-.92c.99.27 1.76 1.16 1.99 2.15c.23.99-.09 2.07-.86 2.75c.19.26.4.5.65.7c.4.34.91.56 1.45.56c.71 0 1.36-.35 1.79-.91c.42-.55.57-1.29.38-1.98c-.2-.69-.71-1.25-1.39-1.53c-.69-.28-1.48-.17-2.07.28c-.59.45-.92 1.14-.95 1.89c0 .26.04.51.11.75c-.52-.21-.97-.59-1.21-1.11c-.24-.51-.27-1.09-.08-1.6c.19-.52.56-.97 1.07-1.23c.51-.25 1.1-.29 1.62-.12c.53.18 1 .56 1.28 1.08c.27.51.33 1.1.16 1.64c.26.31.58.57.94.74c.88.45 1.96.37 2.79-.2c.84-.57 1.35-1.63 1.18-2.67c-.17-1.04-.95-1.91-1.95-2.25c-1-.33-2.15-.02-2.86.71c.41.41.73.91.9 1.46c.41 1.34-.07 2.88-1.09 3.86c-.92.88-2.36 1.31-3.67.92c-.65-.19-1.21-.57-1.65-1.08c-.33-.38-.57-.82-.71-1.29c.3.31.68.56 1.1.7c.71.24 1.5.12 2.11-.3c.61-.42 1-.98 1-1.49z" />
                                </svg>
                            </motion.div>

                            <h2
                                className="text-3xl md:text-4xl font-bold text-[#7A1CAC] mb-4 relative z-10"
                                data-aos="zoom-in"
                            >
                                {t('clientSection.title')}
                            </h2>
                        </div>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mx-auto"></div>
                    </motion.div>

                    {/* Clients Grid with conditional rendering to prevent flickering */}
                    {isLoaded && (
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8 items-center justify-center relative z-10"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                        >
                            {clients.map((client) => (
                                <motion.div
                                    key={client.id}
                                    className="flex flex-col items-center justify-center relative py-3"
                                    variants={itemVariants}
                                >
                                    <motion.img
                                        src={client.logo}
                                        alt={client.name}
                                        className="h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 object-contain"
                                        whileHover={{
                                            scale: 1.08,
                                            filter: "drop-shadow(0 4px 6px rgba(173, 73, 225, 0.2))"
                                        }}
                                        transition={{ duration: 0.3 }}
                                        style={{ willChange: "transform" }}
                                        loading="eager"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Loading placeholder (invisible once content is loaded) */}
                    {!isLoaded && (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8 items-center justify-center opacity-0">
                            {clients.map((client) => (
                                <div key={client.id} className="flex flex-col items-center justify-center py-3">
                                    <div className="h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"></div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </LazyMotion>
    );
};

export default Client;