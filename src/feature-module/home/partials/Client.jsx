import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Client = () => {
    const { t } = useTranslation();
    const [isLoaded, setIsLoaded] = useState(false);
    const [hovered, setHovered] = useState(null);
    const [isPaused, setIsPaused] = useState(false); // Track if carousel should be paused
    const [firstRowClients, setFirstRowClients] = useState([]);
    const [secondRowClients, setSecondRowClients] = useState([]);

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

    // Function to shuffle array (Fisher-Yates algorithm)
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Initialize client arrays once on component mount
    useEffect(() => {
        // Create the first row clients - shuffle once and create unique IDs
        const row1 = [...shuffleArray(clients), ...shuffleArray(clients)].map((client, index) => ({
            ...client,
            uniqueId: `row1-${client.id}-${index}`
        }));

        // Create the second row clients - different shuffle and unique IDs
        const row2 = [...shuffleArray(clients), ...shuffleArray(clients)].map((client, index) => ({
            ...client,
            uniqueId: `row2-${client.id}-${index}`
        }));

        setFirstRowClients(row1);
        setSecondRowClients(row2);
    }, []); // Empty dependency array means this only runs once on mount

    // Handle mouse enter for entire carousel
    const handleMouseEnter = (clientId) => {
        setHovered(clientId);
        setIsPaused(true); // Pause the animation
    };

    // Handle mouse leave for entire carousel
    const handleMouseLeave = () => {
        setHovered(null);
        setIsPaused(false); // Resume the animation
    };

    // Animation variants

    return (
        <section className="py-24 overflow-hidden relative bg-white">
            {/* Enhanced decorative elements for white background */}
            <motion.div
                className="absolute top-40 left-20 w-32 h-32 bg-gradient-to-r from-purple-50 to-gray-100 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute bottom-20 right-40 w-40 h-40 bg-gradient-to-r from-gray-100 to-purple-50 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 8,
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-purple-600">
                                <path fill="currentColor" d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                            </svg>
                        </motion.div>

                        {/* Connection/network icon - relates to partnerships/clients */}
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-purple-600">
                                <path fill="currentColor" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12.07 6.57l-1.14-.9A4.948 4.948 0 0 1 18 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 .95-.27 1.82-.74 2.57l1.14.9A5.947 5.947 0 0 0 24 9c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 1.54.59 2.95 1.53 4.02a5.995 5.995 0 0 0-3.06 0A5.933 5.933 0 0 0 12 9c0-3.31-2.69-6-6-6S0 5.69 0 9c0 1.47.55 2.78 1.43 3.8l1.14-.9A4.93 4.93 0 0 1 2 9c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5c-.47 0-.94-.07-1.4-.21a5.994 5.994 0 0 0-2.13 2.21A6.019 6.019 0 0 0 6 22c2.24 0 4.27-1.22 5.33-3.2 2.82-.93 4.86-3.66 4.86-6.8 0-1-.21-1.96-.59-2.83.99-.99 1.59-2.34 1.59-3.83 0-.6-.09-1.18-.24-1.74C18.48 3.21 20.14 3 22 3v-1C19.67 2 17.5 2.33 16 3c-2.6-1.15-5.65-.69-7.71 1.34C6.21 3.49 3.99 3.27 2 4v1c1.73-.83 3.68-1 5.5-.32l.11-.07C6.74 5.97 6 7.41 6 9c0 1.49.6 2.84 1.59 3.83-.38.87-.59 1.83-.59 2.83 0 3.14 2.03 5.87 4.86 6.8A6.014 6.014 0 0 0 12 22c2.99 0 5.52-2.16 6-5h-1c-.43 2.25-2.42 4-4.75 4-1.8 0-3.39-1-4.24-2.48A6.003 6.003 0 0 0 6 20a6.1 6.1 0 0 0 1.5-.2l-.96-.96A4.807 4.807 0 0 1 5 19c-2.76 0-5-2.24-5-5a4.98 4.98 0 0 1 1.07-3.07l-1.14-.9A5.968 5.968 0 0 0 0 14c0 3.31 2.69 6 6 6 1.54 0 2.94-.58 4-1.54.91-.82 1.53-1.93 1.77-3.17A4.9 4.9 0 0 0 12 16c.28 0 .55-.03.81-.08.35 1.35 1.07 2.53 2.04 3.4.18.18.39.32.59.48A8.46 8.46 0 0 1 12 21v1c1.93 0 3.68-.78 4.95-2.05a9.95 9.95 0 0 0 2.86-5.72c-1.17.42-2.44.77-3.74.93-.17 1.56-1.5 2.8-3.08 2.8-1.7 0-3.09-1.39-3.09-3.09s1.39-3.09 3.09-3.09c1.58 0 2.91 1.24 3.08 2.8a23.3 23.3 0 0 0 3.4-.8A22.81 22.81 0 0 0 23 12.41h-1c-.08 1.17-.23 2.31-.46 3.39-.94-.21-1.85-.5-2.73-.85.14-.47.23-.97.23-1.49 0-2.84-2.3-5.14-5.14-5.14-2.84 0-5.14 2.3-5.14 5.14S11.06 18.6 13.9 18.6c.52 0 1.01-.09 1.49-.23.2.36.41.72.65 1.05A5.93 5.93 0 0 1 13.9 20c-3.35 0-6.06-2.7-6.06-6.06s2.71-6.06 6.06-6.06 6.06 2.71 6.06 6.06c0 1.16-.33 2.24-.9 3.16.69.46 1.42.87 2.16 1.22.22-.49.41-.99.57-1.5.46.06.93.09 1.39.09 1.94 0 3.74-.58 5.28-1.6A6.012 6.012 0 0 0 24 14c0-3.31-2.69-6-6-6-1.27 0-2.49.38-3.5 1.07A5.988 5.988 0 0 0 13 9c0-1.09.29-2.16.79-3.11A4.963 4.963 0 0 1 18 7c1.94 0 3.64-1.1 4.5-2.73-.46-.07-.92-.1-1.39-.1C19.6 4.16 18.3 5 17 5c-1.6 0-3.05-.67-4.07-1.74C11.9 2.47 10.5 2 9 2c-2.21 0-4.07 1.47-4.66 3.47-.65-.24-1.44-.47-2.34-.47-.57 0-1.14.09-1.69.23C1.73 6.04 3 7.85 3 10c0 1.9-.87 3.59-2.23 4.7l1.14.9A5.976 5.976 0 0 0 6 16c2.62 0 4.88-1.86 5.4-4.4.86.55 1.88.9 2.97.99a7.074 7.074 0 0 0-1.92 3.46c-1.04.5-2.21.78-3.45.78A6.026 6.026 0 0 1 3 10.87 5.99 5.99 0 0 1 9 5c2.49 0 4.63 1.52 5.51 3.68 1.13-2.13 3.38-3.57 5.99-3.57 3.73 0 6.76 3.02 6.76 6.75 0 3.74-3.03 6.76-6.76 6.76-.82 0-1.6-.15-2.33-.42.09.73.32 1.42.65 2.03.53.09 1.08.15 1.64.15 4.47 0 8.1-3.63 8.1-8.1 0-4.47-3.63-8.1-8.1-8.1-3.19 0-5.94 1.84-7.27 4.51.26-.98.77-1.86 1.47-2.59A7.056 7.056 0 0 0 9 6.77 7.08 7.08 0 0 0 2 13.7c0 3.9 3.18 7.05 7.09 7.05 2.34 0 4.43-1.13 5.73-2.88-.32-.65-.55-1.35-.64-2.08a5.05 5.05 0 0 1-5.09 4.93c-2.8 0-5.06-2.26-5.06-5.06S6.29 10.6 9.09 10.6c1.72 0 3.24.86 4.15 2.17.43-1.05 1.04-1.99 1.8-2.76A6.985 6.985 0 0 0 9.09 8.56c-3.91 0-7.09 3.18-7.09 7.09s3.18 7.09 7.09 7.09c2.66 0 4.98-1.46 6.19-3.63-.35-.68-.6-1.43-.72-2.22-.73 1.63-2.35 2.76-4.26 2.76-2.57 0-4.65-2.08-4.65-4.65s2.08-4.65 4.65-4.65c1.91 0 3.54 1.14 4.26 2.78.12-.79.36-1.54.7-2.22-1.21-2.18-3.53-3.66-6.19-3.66-3.91 0-7.09 3.18-7.09 7.09s3.18 7.09 7.09 7.09c3.92 0 7.09-3.18 7.09-7.09 0-.07-.01-.15-.01-.22.31.56.7 1.07 1.16 1.5.01.03.01.07.01.1 0 4.47-3.63 8.1-8.1 8.1s-8.1-3.63-8.1-8.1 3.63-8.1 8.1-8.1c3.19 0 5.94 1.84 7.27 4.51-.7-.81-1.2-1.8-1.46-2.89A7.098 7.098 0 0 0 8 6.78V7c4.29.12 7.73 3.64 7.73 7.95 0 4.39-3.56 7.95-7.95 7.95-4.39 0-7.95-3.56-7.95-7.95 0-4.39 3.56-7.95 7.95-7.95.65 0 1.28.08 1.88.23.35-.95.85-1.83 1.46-2.61-.39-.05-.78-.08-1.17-.1a17.6 17.6 0 0 0-2.17-.02 6.85 6.85 0 0 0-.83 0c-.38.02-.76.05-1.14.1.24.29.46.59.68.91.88-.17 1.79-.27 2.72-.27 5.25 0 9.66 3.48 11.14 8.24 1.48-4.76 5.89-8.24 11.14-8.24.62 0 1.22.05 1.82.14C21.58 2.77 18.62 1 15 1c-3.62 0-6.58 1.77-8.48 4.57.6-.09 1.2-.14 1.82-.14 2.64 0 5.03 1.03 6.82 2.71-.55-.23-1.11-.4-1.7-.5-.32-.34-.66-.66-1.02-.95a7.934 7.934 0 0 0-4.97-1.76c-4.33 0-7.91 3.32-8.29 7.57.76-3.42 3.8-5.99 7.44-5.99 4.18 0 7.57 3.39 7.57 7.57s-3.39 7.57-7.57 7.57c-4.18 0-7.57-3.39-7.57-7.57 0-.13.01-.25.01-.38a8.5 8.5 0 0 0-.31 2.25c0 4.7 3.8 8.5 8.5 8.5 4.7 0 8.5-3.8 8.5-8.5 0-4.7-3.8-8.5-8.5-8.5-3.47 0-6.46 2.08-7.8 5.06.74-3.07 3.52-5.35 6.82-5.35 3.87 0 7.01 3.14 7.01 7.01s-3.14 7.01-7.01 7.01-7.01-3.14-7.01-7.01c0-.23.01-.45.03-.67A7.985 7.985 0 0 0 5.68 17.7c1.77 2.63 4.73 4.35 8.11 4.35 5.42 0 9.83-4.41 9.83-9.83S19.21 2.39 13.79 2.39c-2.58 0-4.93 1-6.69 2.61 1.39-.86 3.01-1.37 4.75-1.37 4.96 0 8.99 4.04 8.99 9s-4.04 9-8.99 9-8.99-4.04-8.99-9c0-2.62 1.14-4.97 2.94-6.61A12.317 12.317 0 0 0 3.47 9.24c.69 5.43 5.31 9.62 10.9 9.62 6.07 0 11-4.93 11-11s-4.93-11-11-11c-5.17 0-9.51 3.57-10.68 8.37.55-5.1 4.84-9.07 10.09-9.07 5.62 0 10.18 4.56 10.18 10.18s-4.56 10.18-10.18 10.18c-5.62 0-10.18-4.56-10.18-10.18 0-.08 0-.15.01-.23.01-.53.08-1.05.19-1.56-.34-.01-.68-.03-1.02-.03-4.49 0-8.22 3.33-8.83 7.67C2.4 6.44 7.07 2.04 12.63 2.04c6.08 0 11 4.93 11 11s-4.93 11-11 11c-6.07 0-11-4.93-11-11 0-.44.03-.87.08-1.29-1.73 2.57-2.75 5.63-2.75 8.92 0 8.84 7.16 16 16 16s16-7.16 16-16c0-8.84-7.16-16-16-16-6.49 0-12.06 3.86-14.58 9.41C2.04 8.87 5.25 5.04 9.64 5.04c5.05 0 9.14 4.09 9.14 9.14s-4.09 9.14-9.14 9.14-9.14-4.09-9.14-9.14c0-2.94 1.4-5.56 3.55-7.23-2.35 1.7-3.88 4.46-3.88 7.57 0 5.17 4.19 9.36 9.36 9.36s9.36-4.19 9.36-9.36-4.19-9.36-9.36-9.36c-3.11 0-5.87 1.53-7.57 3.88 1.67-2.15 4.29-3.55 7.23-3.55 5.05 0 9.14 4.09 9.14 9.14s-4.09 9.14-9.14 9.14c-4.39 0-8.05-3.09-8.94-7.22a9.142 9.142 0 0 1-.2 1.86c1.31 3.94 5 6.79 9.37 6.79 5.45 0 9.86-4.41 9.86-9.86S15.09 5 9.64 5c-4.32 0-7.99 2.77-9.33 6.64-.07.6-.11 1.21-.11 1.83 0 8.51 6.89 15.43 15.4 15.49-.19-.38-.36-.77-.51-1.17-7.36-.52-13.17-6.67-13.17-14.15 0-7.82 6.33-14.15 14.15-14.15s14.15 6.33 14.15 14.15S22.97 22.79 15.15 22.79c-.06 0-.12-.01-.18-.01-.03-.22-.07-.43-.13-.64.1 0 .21.01.31.01C23.03 22.15 30 15.11 30 6.34c0-8.77-7.03-15.87-15.75-16 8.59.31 15.45 7.38 15.45 16.04 0 8.87-7.19 16.06-16.06 16.06S-2.42 15.25-2.42 6.38c0-8.66 6.86-15.73 15.45-16.04C4.03-9.53-3-2.43-3 6.34s7.03 15.81 15.65 15.81c8.63 0 15.65-7.04 15.65-15.81S21.28-9.47 12.65-9.47C3.86-9.47-3-2.56-3 5.81s6.86 14.72 15.65 14.72" />
                            </svg>
                        </motion.div>                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#7A1CAC] mb-4 relative z-10"
                            data-aos="zoom-in"
                        >
                            {t('clientSection.title')}
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mx-auto"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        {t('clientSection.subtitle')}
                    </p>
                </motion.div>

                {/* Client Logo Carousel - Two rows with auto-scroll in opposite directions */}
                <AnimatePresence>
                    {isLoaded && firstRowClients.length > 0 && secondRowClients.length > 0 && (
                        <div className="overflow-hidden my-8">
                            {/* First row - scrolling right to left */}
                            <motion.div
                                className="flex py-4"
                                initial={{ x: 0 }}
                                animate={{ x: isPaused ? undefined : "-50%" }}
                                transition={{
                                    ease: "linear",
                                    duration: 30,
                                    repeat: Infinity,
                                }}
                            >
                                {firstRowClients.map((client) => (
                                    <div
                                        key={client.uniqueId}
                                        className="flex-shrink-0 px-4 relative group"
                                        onMouseEnter={() => handleMouseEnter(client.uniqueId)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="h-32 w-48 flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 relative overflow-hidden">
                                            {/* Hover effect background gradient */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-tr from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            />

                                            {/* Logo - enlarged */}
                                            <motion.img
                                                src={client.logo}
                                                alt={client.name}
                                                className="max-h-20 max-w-36 w-auto object-contain relative z-10 filter grayscale hover:grayscale-0 transition-all duration-300"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                                loading="lazy"
                                            />

                                            {/* Visual pulse effect on hover */}
                                            {hovered === client.uniqueId && (
                                                <motion.div
                                                    className="absolute inset-0 bg-purple-100 rounded-lg"
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ opacity: 0.5, scale: 1.2 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                            )}
                                        </div>
                                        {/* Client name tooltip */}
                                        <motion.div
                                            className="absolute -bottom-8 left-0 right-0 text-center text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium"
                                            initial={{ y: 10, opacity: 0 }}
                                            whileHover={{ y: 0, opacity: 1 }}
                                        >
                                            {client.name}
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Second row - scrolling left to right */}
                            <motion.div
                                className="flex py-4"
                                initial={{ x: "-50%" }}
                                animate={{ x: isPaused ? undefined : "0%" }}
                                transition={{
                                    ease: "linear",
                                    duration: 35,
                                    repeat: Infinity,
                                }}
                            >
                                {secondRowClients.map((client) => (
                                    <div
                                        key={client.uniqueId}
                                        className="flex-shrink-0 px-4 relative group"
                                        onMouseEnter={() => handleMouseEnter(client.uniqueId)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="h-32 w-48 flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 relative overflow-hidden">
                                            {/* Hover effect background gradient */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-tr from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            />

                                            {/* Logo - enlarged */}
                                            <motion.img
                                                src={client.logo}
                                                alt={client.name}
                                                className="max-h-20 max-w-36 w-auto object-contain relative z-10 filter grayscale hover:grayscale-0 transition-all duration-300"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                                loading="lazy"
                                            />

                                            {/* Visual pulse effect on hover */}
                                            {hovered === client.uniqueId && (
                                                <motion.div
                                                    className="absolute inset-0 bg-purple-100 rounded-lg"
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ opacity: 0.5, scale: 1.2 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                            )}
                                        </div>
                                        {/* Client name tooltip */}
                                        <motion.div
                                            className="absolute -bottom-8 left-0 right-0 text-center text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium"
                                            initial={{ y: 10, opacity: 0 }}
                                            whileHover={{ y: 0, opacity: 1 }}
                                        >
                                            {client.name}
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Call to action for potential clients */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >                    <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7A1CAC] to-[#AD49E1] rounded-lg hover:from-[#8A2CDA] hover:to-[#C159FF] text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                >
                        {t('clientSection.joinButton')}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Client;