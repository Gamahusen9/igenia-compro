import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Client = () => {
    const { t } = useTranslation();
    const [activeClient, setActiveClient] = useState(null);
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
        { id: 1, name: "Company A", logo: "/assets/logo.png" },
        { id: 2, name: "Company B", logo: "/assets/logo.png" },
        { id: 3, name: "Company C", logo: "/assets/logo.png" },
        { id: 4, name: "Company D", logo: "/assets/logo.png" },
        { id: 5, name: "Company E", logo: "/assets/logo.png" },
        { id: 6, name: "Company F", logo: "/assets/logo.png" }
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
            <section id="clients" className="py-24 overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-8">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16 relative"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-block relative">
                            {/* Building/business icon */}
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
                                    <path fill="currentColor" d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                                </svg>
                            </motion.div>

                            {/* Handshake/partners icon */}
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
                                    <path fill="currentColor" d="M11.65 3.46c.35-.15.7-.22 1.07-.2c.77.04 1.43.45 1.88 1c.45.55.68 1.23.68 1.92c0 .69-.23 1.36-.68 1.92l-1.2 1.47c-.44.52-1.09.93-1.85.97c-.19.02-.37 0-.56-.05c-.44-.11-.83-.34-1.15-.65L8.63 11c-.71-.82-1.14-1.86-1.14-3c0-1.13.43-2.17 1.13-2.96l1.31-1.21c.53-.38 1.25-.5 1.72-.37M16 5.58c0 .46.1.9.27 1.32l-1.9 2.31c.81.26 1.5.74 1.97 1.35c.72.92 1.02 2.14.69 3.34c-.33 1.2-1.35 2.09-2.58 2.3l-.03 3.8H9.5v-3h-2v-3H5v-3H1.76l1.9-2.35C3.89 9.89 4 10.19 4 10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.84-.68-1.52-1.53-1.5H3.25c.31-.79.84-1.5 1.53-2.12l1.8.62c.73.25 1.4.68 1.91 1.27l.46-.46c.35-.35.81-.6 1.32-.7c.5-.09 1.03-.05 1.51.12l1.21-1.48c.06-.07.11-.14.16-.22c-.28-.27-.51-.59-.66-.95c-.37-.88-.21-1.95.37-2.74c.58-.78 1.68-1.18 2.67-.92c.99.27 1.76 1.16 1.99 2.15c.23.99-.09 2.07-.86 2.75c.19.26.4.5.65.7c.4.34.91.56 1.45.56c.71 0 1.36-.35 1.79-.91c.42-.55.57-1.29.38-1.98c-.2-.69-.71-1.25-1.39-1.53c-.69-.28-1.48-.17-2.07.28c-.59.45-.92 1.14-.95 1.89c0 .26.04.51.11.75c-.52-.21-.97-.59-1.21-1.11c-.24-.51-.27-1.09-.08-1.6c.19-.52.56-.97 1.07-1.23c.51-.25 1.1-.29 1.62-.12c.53.18 1 .56 1.28 1.08c.27.51.33 1.1.16 1.64c.26.31.58.57.94.74c.88.45 1.96.37 2.79-.2c.84-.57 1.35-1.63 1.18-2.67c-.17-1.04-.95-1.91-1.95-2.25c-1-.33-2.15-.02-2.86.71c.41.41.73.91.9 1.46c.41 1.34-.07 2.88-1.09 3.86c-.92.88-2.36 1.31-3.67.92c-.65-.19-1.21-.57-1.65-1.08c-.33-.38-.57-.82-.71-1.29c.3.31.68.56 1.1.7c.71.24 1.5.12 2.11-.3c.61-.42 1-.98 1-1.49z" />
                                </svg>
                            </motion.div>

                            <h2
                                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#AD49E1] to-white bg-clip-text text-transparent mb-4 relative z-10"
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
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-center relative z-10"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                        >
                            {clients.map((client) => (
                                <motion.div
                                    key={client.id}
                                    className="group flex flex-col items-center justify-center relative"
                                    variants={itemVariants}
                                    onHoverStart={() => setActiveClient(client.id)}
                                    onHoverEnd={() => setActiveClient(null)}
                                    layoutId={`client-${client.id}`}
                                >
                                    <motion.div
                                        className="relative p-4 rounded-xl bg-[#2E073F]/40 backdrop-blur-sm border border-[#471166]/30 hover:border-[#AD49E1]/50 transition-all duration-300 flex items-center justify-center w-full h-full"
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 10px 25px -5px rgba(173, 73, 225, 0.2)",
                                            borderColor: "rgba(173, 73, 225, 0.5)"
                                        }}
                                        style={{ willChange: "transform, opacity" }}
                                    >
                                        <motion.img
                                            src={client.logo}
                                            alt={client.name}
                                            className="h-16 w-16 object-contain drop-shadow-lg filter brightness-100 contrast-100"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ willChange: "transform" }}
                                            loading="eager"
                                        />

                                        <motion.div
                                            className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#471166]/30 to-[#AD49E1]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ zIndex: -1 }}
                                        />
                                    </motion.div>

                                    <AnimatePresence mode="wait">
                                        {activeClient === client.id && (
                                            <motion.span
                                                className="text-xs text-[#AD49E1] font-medium mt-3 tracking-wide"
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {client.name}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Loading placeholder (invisible once content is loaded) */}
                    {!isLoaded && (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-center opacity-0">
                            {clients.map((client) => (
                                <div key={client.id} className="p-4 rounded-xl bg-[#2E073F]/40 flex items-center justify-center">
                                    <div className="h-16 w-16"></div>
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