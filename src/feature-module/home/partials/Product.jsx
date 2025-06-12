import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import 'aos/dist/aos.css';
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaImage, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';
import getProductList from '../../../core/data/list-product';

const Product = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [imageErrors, setImageErrors] = useState({});
    const autoPlayTimerRef = useRef(null);

    // Get product data from imported function
    const products = getProductList();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        });
    }, []);

    // Calculate max index
    const maxIndex = Math.max(0, products.length - 1);

    // Navigate to previous item
    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    }, []);

    // Navigate to next item
    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    }, [maxIndex]);

    // State for auto-play progress
    const [autoPlayProgress, setAutoPlayProgress] = useState(0);
    const progressIntervalRef = useRef(null);

    // Auto advance carousel every 8 seconds, pause on hover
    useEffect(() => {
        const autoPlayDuration = 8000;
        const progressUpdateInterval = 50; // Update progress every 50ms for smooth animation

        // Clear any existing intervals
        if (autoPlayTimerRef.current) {
            clearTimeout(autoPlayTimerRef.current);
        }
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
        }

        if (!isHovering) {
            // Reset progress
            setAutoPlayProgress(0);

            // Start main auto-play timer
            autoPlayTimerRef.current = setTimeout(() => {
                setCurrentIndex(prev => {
                    const nextIdx = prev + 1;
                    return nextIdx > maxIndex ? 0 : nextIdx;
                });
            }, autoPlayDuration);

            // Start progress update interval
            progressIntervalRef.current = setInterval(() => {
                setAutoPlayProgress(prev => {
                    const newProgress = prev + (progressUpdateInterval / autoPlayDuration) * 100;
                    return newProgress >= 100 ? 0 : newProgress;
                });
            }, progressUpdateInterval);
        }

        return () => {
            if (autoPlayTimerRef.current) {
                clearTimeout(autoPlayTimerRef.current);
            }
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
            }
        };
    }, [maxIndex, isHovering, currentIndex]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [prevSlide, nextSlide]);

    // Touch event handlers
    const handleTouchStart = (e) => {
        const touchStart = e.touches[0].clientX;

        const handleTouchEnd = (e) => {
            const touchEnd = e.changedTouches[0].clientX;
            const diff = touchEnd - touchStart;

            // If swipe distance is significant
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    // Swiped right
                    prevSlide();
                } else {
                    // Swiped left
                    nextSlide();
                }
            }

            document.removeEventListener('touchend', handleTouchEnd);
        };

        document.addEventListener('touchend', handleTouchEnd);
    };

    const handleImageError = (productId) => {
        setImageErrors(prev => ({
            ...prev,
            [productId]: true
        }));
    };

    // Define liquid blob variants for animation - made smaller
    const blobVariants = {
        animate: {
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0, -5, 0],
            borderRadius: ["40% 60% 60% 40% / 60% 30% 70% 40%", "40% 60% 70% 30% / 50% 60% 40% 50%", "40% 60% 60% 40% / 60% 30% 70% 40%"],
            transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror"
            }
        }
    };

    // Second blob with different animation timing - made smaller
    const blob2Variants = {
        animate: {
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0, 10, 0],
            borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 40% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
            transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror"
            }
        }
    };

    // For device mockup floating animation - reduced movement
    const mockupVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        }
    };

    // Additional 3D perspective animation for device

    // Function to truncate text
    const truncateText = (text, maxLength) => {
        if (!text) return '';
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    // Add this CSS animation at the bottom of the component, before the return statement
    useEffect(() => {
        // Add floating mockup animation keyframe to document
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes floatingMockup {
                0% { transform: translate(0, 0) scale(1); }
                50% { transform: translate(0, -5px) scale(1.02); }
                100% { transform: translate(0, 0) scale(1); }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <section id="products" className="relative min-h-screen flex flex-col justify-center py-12 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1D0231] via-[#2E073F] to-[#120118] z-0"></div>
            <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-gradient-to-r from-[#AD49E1]/20 to-[#7A1CAC]/10 rounded-full blur-[100px] -z-0"></div>
            <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-gradient-to-r from-[#7A1CAC]/10 to-[#AD49E1]/20 rounded-full blur-[100px] -z-0"></div>

            {/* Main content container */}
            <div className="container mx-auto px-4 md:px-8 relative z-10 flex-grow flex flex-col justify-center">
                {/* Section Header - updated to match Blog.jsx */}
                <motion.div
                    className="text-center mb-32 relative" // Increased from mb-20 to mb-24
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-block relative">
                        {/* Animated gear icon - adjusted to match Blog.jsx */}
                        <motion.div
                            className="absolute -top-8 -right-8 w-16 h-16 opacity-30"
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-full h-full text-purple-300"
                            >
                                <path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
                            </svg>
                        </motion.div>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10"
                            data-aos="zoom-in"
                        >
                            {t('productsSection.title')}
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mx-auto"></div>
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        {t('productsSection.subtitle')}
                    </p>
                </motion.div>

                {/* Product Showcase - Main flex container - adjusted padding */}
                <div
                    className="flex-grow flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 py-2 mb-16"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onTouchStart={handleTouchStart}
                >
                    {/* Left Column - 3D Mockup with Liquid Shapes - enhanced with better spacing */}
                    <div className="w-full md:w-1/2 relative flex items-center justify-center h-full min-h-[350px]" data-aos="fade-right">
                        {/* Animated liquid blobs - repositioned as background */}
                        <motion.div
                            className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] bg-gradient-to-r from-[#AD49E1]/30 to-[#7A1CAC]/20 z-0"
                            variants={blobVariants}
                            animate="animate"
                        />

                        <motion.div
                            className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] bg-gradient-to-r from-[#7A1CAC]/20 to-[#8A2BE2]/30 z-0"
                            variants={blob2Variants}
                            animate="animate"
                        />

                        {/* Decorative elements */}
                        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-purple-500/20 rounded-full blur-lg z-0"></div>
                        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-blue-500/20 rounded-full blur-lg z-0"></div>

                        {/* Display product image directly on top of fluid animation */}
                        {(() => {
                            const product = products[currentIndex];
                            return (
                                <div className="relative z-20 mb-6">
                                    {!imageErrors[product.id] && product.faceImg ? (
                                        <motion.div
                                            className="relative"
                                            variants={mockupVariants}
                                            animate="animate"
                                        >
                                            {/* Product image */}
                                            <img
                                                src={product.faceImg}
                                                alt={product.title}
                                                className="max-w-[280px] md:max-w-[320px] lg:max-w-[380px] mx-auto object-contain relative z-10"
                                                onError={() => handleImageError(product.id)}
                                                style={{
                                                    animation: "floatingMockup 6s ease-in-out infinite",
                                                    backgroundColor: "transparent",
                                                    mixBlendMode: "normal",
                                                    border: "none",
                                                    outline: "none"
                                                }}
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            className="w-[280px] md:w-[320px] lg:w-[380px] aspect-video bg-gradient-to-br from-[#20052D] to-[#2E073F] rounded-lg flex items-center justify-center shadow-xl"
                                            variants={mockupVariants}
                                            animate="animate"
                                        >
                                            <div className="text-center p-4">
                                                <FaImage className="text-[#AD49E1] text-4xl mx-auto mb-3 animate-bounce-slow" />
                                                <div className="bg-[#AD49E1]/10 backdrop-blur-sm rounded-lg p-2">
                                                    <h3 className="text-sm font-bold text-white">{product.title}</h3>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            );
                        })()}

                        {/* Device type indicator badge - now positioned relative to the product image */}
                        <div className="absolute top-3 right-3 bg-[#2E073F]/80 backdrop-blur-sm text-xs text-white px-2 py-1 rounded shadow z-30">
                            {products[currentIndex].type === 'mobile' ?
                                t('productsSection.mobileApp') :
                                t('productsSection.webApp')}
                        </div>
                    </div>

                    {/* Right Column - Product Information - compact text */}
                    <div className="w-full md:w-1/2 text-left px-4" data-aos="fade-left">
                        <div className="space-y-4 max-w-lg">
                            {/* Project number badge - smaller */}
                            <div className="inline-block bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] px-2 py-1 rounded-full text-xs font-semibold text-white mb-1">
                                {t('productsSection.projectLabel')} {currentIndex + 1}/{products.length}
                            </div>

                            {/* Project title with animated underline - smaller and no wrapping */}
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white relative inline-block group whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                                {products[currentIndex].title}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] group-hover:w-full transition-all duration-700"></span>
                            </h3>

                            {/* Project brief description - truncated */}
                            <p className="text-gray-300 text-base leading-relaxed max-h-20 overflow-hidden">
                                {truncateText(products[currentIndex].description || t('productsSection.noDescription'), 120)}
                            </p>

                            {/* Tech stack badges - limited display */}
                            {products[currentIndex].techStack && products[currentIndex].techStack.length > 0 && (
                                <div className="pt-1">
                                    <p className="text-xs text-gray-400 mb-1">{t('productsSection.techStackLabel')}:</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {products[currentIndex].techStack.slice(0, 5).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-0.5 bg-[#2E073F] text-xs text-gray-300 rounded-full border border-purple-800/40 hover:border-purple-500/60 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {products[currentIndex].techStack.length > 5 && (
                                            <span className="px-2 py-0.5 bg-[#2E073F] text-xs text-gray-300 rounded-full border border-purple-800/40">
                                                +{products[currentIndex].techStack.length - 5} {t('productsSection.more')}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* CTA Button - smaller */}
                            <div className="pt-2">
                                <Link to={`/products/${products[currentIndex].id}`}>
                                    <button className="group relative bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] text-white px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_5px_15px_-5px_rgba(173,73,225,0.7)] overflow-hidden">
                                        {/* Button glow effect */}
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                                        <span>{t('productsSection.detailsButton')}</span>
                                        <FaArrowRight className="inline-block ml-1.5 group-hover:translate-x-1 transition-transform duration-300 text-xs" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Controls - with top spacing */}
                <div className="flex justify-between items-center mb-4">
                    {/* Previous/Next buttons - smaller */}
                    <div className="flex items-center gap-3">
                        <button
                            className={`group bg-[#2E073F]/80 hover:bg-[#AD49E1] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 ${currentIndex <= 0 ? 'opacity-50 cursor-not-allowed' : 'hover:animate-glow-pulse'}`}
                            onClick={prevSlide}
                            disabled={currentIndex <= 0}
                            aria-label="Previous product"
                        >
                            <FaChevronLeft className="text-sm" />

                            {/* Ripple effect */}
                            {currentIndex > 0 && (
                                <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"></span>
                            )}
                        </button>

                        <button
                            className={`group bg-[#2E073F]/80 hover:bg-[#AD49E1] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:animate-glow-pulse'}`}
                            onClick={nextSlide}
                            disabled={currentIndex >= maxIndex}
                            aria-label="Next product"
                        >
                            <FaChevronRight className="text-sm" />

                            {/* Ripple effect */}
                            {currentIndex < maxIndex && (
                                <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"></span>
                            )}
                        </button>
                    </div>

                    {/* Progress indicators - made more compact */}
                    <div className="flex-1 max-w-xs mx-3">
                        <div className="flex items-center gap-2">
                            {/* Progress bar */}
                            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] rounded-full"
                                    style={{
                                        width: `${autoPlayProgress}%`,
                                        transition: isHovering ? 'none' : 'width 0.1s linear'
                                    }}
                                ></div>
                            </div>

                            {/* Slide counter */}
                            <span className="text-xs text-gray-400 font-mono">
                                {currentIndex + 1}/{products.length}
                            </span>
                        </div>
                    </div>

                    {/* Dot indicators - smaller and fewer */}
                    <div className="hidden md:flex items-center gap-1.5">
                        {products.length <= 6 ?
                            products.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-[#AD49E1] scale-110' : 'bg-white/20 hover:bg-white/40'}`}
                                    onClick={() => setCurrentIndex(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                ></button>
                            )) :
                            // Show only first, current, last and few adjacent dots if many products
                            Array.from({ length: Math.min(5, products.length) }).map((_, idx) => {
                                let dotIndex;
                                if (products.length <= 5) {
                                    dotIndex = idx;
                                } else if (idx === 0) {
                                    dotIndex = 0; // First
                                } else if (idx === 4) {
                                    dotIndex = products.length - 1; // Last
                                } else {
                                    // Show dots around current position
                                    const offset = idx - 2;
                                    dotIndex = Math.max(1, Math.min(products.length - 2, currentIndex + offset));
                                }

                                return (
                                    <button
                                        key={dotIndex}
                                        className={`w-2 h-2 rounded-full transition-all ${dotIndex === currentIndex ? 'bg-[#AD49E1] scale-110' : 'bg-white/20 hover:bg-white/40'}`}
                                        onClick={() => setCurrentIndex(dotIndex)}
                                        aria-label={`Go to slide ${dotIndex + 1}`}
                                    ></button>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;