import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { blogPosts } from "../../../core/data/list-blog";

const Blog = () => {
    const { t } = useTranslation();
    const [hoveredCard, setHoveredCard] = useState(null);

    // Initialize AOS animation library
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });
    }, []);

    // Format date to Indonesian style: Day, date month year
    const formatDate = (dateString) => {
        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 10 }
        },
        hover: {
            scale: 1.03,
            boxShadow: "0px 8px 24px rgba(173,73,225,0.15)",
            transition: { type: "spring", stiffness: 400, damping: 10 }
        }
    };

    // Limit to maximum 3 blog posts
    const limitedBlogPosts = blogPosts.slice(0, 3);

    return (
        <section id="blog" className="min-h-screen flex flex-col justify-center py-12 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-8 flex-grow flex flex-col justify-center">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 relative"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-block relative">
                        {/* News/Blog icon */}
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
                                <path fill="currentColor" d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H5c-.55 0-1-.45-1-1V6h16v12c0 .55-.45 1-1 1zm-3-5H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm-4 3H8c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1zm4-9H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z" />
                            </svg>
                        </motion.div>

                        {/* Text/article icon */}
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
                                <path fill="currentColor" d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
                            </svg>
                        </motion.div>                        <h2
                            className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10"
                            data-aos="zoom-in"
                        >
                            {t('blogSection.title')}
                        </h2>                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mx-auto"></div>
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        {t('blogSection.subtitle')}
                    </p>
                </motion.div>

                {/* Blog Posts Grid */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8 flex-grow max-w-5xl mx-auto w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {limitedBlogPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            className="relative"
                            variants={itemVariants}
                        >
                            <Link to={`/blog/${post.slug}`} className="block h-full">
                                <motion.div
                                    className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden h-full flex flex-col border border-purple-500/20 relative"
                                    variants={cardVariants}
                                    whileHover="hover"
                                    onHoverStart={() => setHoveredCard(post.id)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                >
                                    {/* Image Section with hover effect - reduced height */}
                                    <div className="relative w-full h-40 overflow-hidden group cursor-pointer">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${hoveredCard === post.id ? 'scale-110' : 'scale-100'
                                                }`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                        {/* Category Badge */}
                                        <span className="absolute bottom-3 left-3 text-xs font-medium text-white bg-[#AD49E1]/80 px-2 py-1 rounded-full">
                                            {post.category}
                                        </span>

                                        {/* Read More Overlay on Image Hover */}
                                        <AnimatePresence>
                                            {hoveredCard === post.id && (
                                                <motion.div
                                                    className="absolute inset-0 bg-[#AD49E1]/30 flex items-center justify-center"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <motion.span
                                                        className="bg-white text-[#AD49E1] font-medium py-2 px-4 rounded-md"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        {t('blogSection.readMore')}
                                                    </motion.span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Content Section - reduced padding */}
                                    <div className="p-4 flex flex-col flex-grow relative z-10">
                                        {/* Background pattern */}
                                        <div className="absolute top-0 left-0 w-full h-full opacity-5">
                                            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-purple-500/30"></div>
                                            <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-purple-700/30"></div>
                                        </div>

                                        <div className="relative z-10">
                                            <h3 className="text-lg font-semibold text-[#AD49E1] mb-2 line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-300 mb-3 text-sm line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                        </div>

                                        <div className="mt-auto relative z-10">
                                            <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                                                <span>{post.author}</span>
                                                <span>{formatDate(post.date)}</span>
                                            </div>
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
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button - made more prominent */}
                <motion.div
                    className="flex justify-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <Link to="/blog">
                        <motion.button
                            className="bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] text-white py-3.5 px-10 rounded-full font-medium shadow-lg shadow-purple-500/20"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 20px rgba(173, 73, 225, 0.5)"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {t('blogSection.viewAll')}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;