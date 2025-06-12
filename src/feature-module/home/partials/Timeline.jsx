import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const Timeline = () => {
    const { t } = useTranslation();
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Timeline data - can be easily expanded by adding more entries to this array
    // To add a new entry:
    // 1. Add a new object with year, title, and description
    // 2. Add corresponding translations in the translation files
    // 3. The component will automatically handle alternating positions and styling
    const timelineEvents = [
        {
            year: '2023',
            title: t('timeline.2023.title', 'Pendirian Perusahaan'),
            description: t('timeline.2023.description', 'Didirikan dengan visi membawa inovasi teknologi ke Indonesia.')
        },
        {
            year: '2024',
            title: t('timeline.2024.title', 'Ekspansi Tim'),
            description: t('timeline.2024.description', 'Mengembangkan tim dengan talenta terbaik di industri.')
        },
        {
            year: '2025',
            title: t('timeline.2025.title', 'Pendanaan Besar'),
            description: t('timeline.2025.description', 'Mendapatkan pendanaan seri A untuk pengembangan produk baru.')
        },
        // To add more timeline events, follow this template:
        // {
        //     year: '2026',
        //     title: t('timeline.future.title', 'New Milestone'),
        //     description: t('timeline.future.description', 'Description of the new milestone or achievement.')
        // },
    ];

    // Handler for mouse down events (for drag scroll)
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    // Handler for touch start events
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    // Handler for mouse move events
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Handler for touch move events
    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // End dragging
    const handleDragEnd = () => {
        setIsDragging(false);
    };

    // Scroll to the left
    const scrollLeftHandler = () => {
        if (scrollContainerRef.current) {
            setIsScrolling(true);
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
            setTimeout(() => setIsScrolling(false), 500);
        }
    };

    // Scroll to the right
    const scrollRightHandler = () => {
        if (scrollContainerRef.current) {
            setIsScrolling(true);
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
            setTimeout(() => setIsScrolling(false), 500);
        }
    };

    // Check scroll position to update arrow visibility
    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 10);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    // Add scroll event listener
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', checkScroll);
            // Initial check
            checkScroll();
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', checkScroll);
            }
        };
    }, []);

    return (
        <section className="py-20 bg-[#2E073F] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#AD49E1] to-white bg-clip-text text-transparent mb-4"
                        data-aos="fade-up"
                    >
                        {t('timeline.title', 'Perjalanan Kami')}
                    </h2>

                    <p
                        className="text-gray-300 max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {t('timeline.subtitle', 'Lihat bagaimana kami bertumbuh dari waktu ke waktu dan mencapai milestone penting.')}
                    </p>

                    {/* Scroll instruction */}
                    <div
                        className="flex items-center justify-center mt-6 text-gray-400 text-sm"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        {t('timeline.instruction', 'Geser ke kanan dan kiri untuk melihat timeline')}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>

                <div className="relative">
                    {/* Left scroll button */}
                    {showLeftArrow && (
                        <motion.button
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#7A1CAC]/80 p-2 rounded-full shadow-lg shadow-purple-800/30 text-white backdrop-blur-sm"
                            onClick={scrollLeftHandler}
                            disabled={isScrolling}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.3 }}
                            aria-label="Scroll left"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                    )}

                    {/* Right scroll button */}
                    {showRightArrow && (
                        <motion.button
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#7A1CAC]/80 p-2 rounded-full shadow-lg shadow-purple-800/30 text-white backdrop-blur-sm"
                            onClick={scrollRightHandler}
                            disabled={isScrolling}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3 }}
                            aria-label="Scroll right"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    )}

                    {/* Timeline container */}                    <div
                        ref={scrollContainerRef}
                        className={`overflow-x-auto hide-scrollbar flex items-center py-14 px-6 space-x-14 min-h-[400px] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleDragEnd}
                        onScroll={checkScroll}
                    >{/* Central timeline line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#AD49E1] to-transparent"></div>

                        {/* Connector dots for better visual alignment with the new year position */}
                        <div className="absolute top-1/2 left-0 right-0 flex justify-center">
                            <div className="w-3 h-3 bg-[#AD49E1] rounded-full shadow-lg shadow-purple-800/50"></div>
                        </div>

                        {/* Create some empty space at the start */}
                        <div className="flex-shrink-0 w-20"></div>
                        {/* Timeline events */}
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 relative w-72"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Content boxes - alternating positions (top/bottom) */}
                                {index % 2 === 0 ? (
                                    <>
                                        {/* Top connector line */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-[#AD49E1] to-transparent top-0 bottom-1/2"></div>

                                        {/* Top content with year badge at top left */}
                                        <div className="bg-[#471166]/90 p-5 rounded-lg shadow-xl backdrop-blur-sm border border-[#7A1CAC]/30 mb-24 relative">
                                            {/* Year marker at top left of card */}
                                            <motion.div
                                                className="absolute -top-4 -left-4 z-20"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <div className="bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] text-white font-bold text-xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg shadow-purple-800/50 border-2 border-white/20">
                                                    {event.year}
                                                </div>
                                            </motion.div>

                                            <p className="mt-2 text-gray-300">{event.description}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* Bottom connector line */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-t from-[#AD49E1] to-transparent bottom-0 top-1/2"></div>

                                        {/* Bottom content with year badge at top left */}
                                        <div className="bg-[#471166]/90 p-5 rounded-lg shadow-xl backdrop-blur-sm border border-[#7A1CAC]/30 mt-24 relative">
                                            {/* Year marker at top left of card */}
                                            <motion.div
                                                className="absolute -top-4 -left-4 z-20"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <div className="bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] text-white font-bold text-xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg shadow-purple-800/50 border-2 border-white/20">
                                                    {event.year}
                                                </div>
                                            </motion.div>

                                            <p className="mt-2 text-gray-300">{event.description}</p>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        ))}

                        {/* Create some empty space at the end */}
                        <div className="flex-shrink-0 w-20"></div>
                    </div>
                </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-[#7A1CAC]/10 filter blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-[#AD49E1]/10 filter blur-3xl"></div>
        </section>
    );
};

export default Timeline;