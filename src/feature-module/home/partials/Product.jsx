import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import 'aos/dist/aos.css';
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaImage } from 'react-icons/fa';
import getProductList from '../../../core/data/list-product';

const Product = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [imageErrors, setImageErrors] = useState({});
    const autoPlayTimerRef = useRef(null);
    const carouselRef = useRef(null);

    // Get product data from imported function
    const products = getProductList();

    // Calculate how many slides to show based on screen size
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        });

        // Function to update slides to show based on window width
        const updateSlidesToShow = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1); // Show 1 on mobile
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2); // Show 2 on tablets
            } else {
                setSlidesToShow(3); // Show 3 on desktop
            }
        };

        // Initial update
        updateSlidesToShow();

        // Update on resize
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    // Calculate max index based on slides to show
    const maxIndex = Math.max(0, products.length - slidesToShow);

    // Navigate to previous item
    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    }, []);

    // Navigate to next item
    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    }, [maxIndex]);    // State for auto-play progress
    const [, setAutoPlayProgress] = useState(0);
    const progressIntervalRef = useRef(null);

    // Auto advance carousel every 5 seconds, pause on hover
    useEffect(() => {
        const autoPlayDuration = 5000;
        const progressUpdateInterval = 50; // Update progress every 50ms for smooth animation

        // Clear any existing intervals
        if (autoPlayTimerRef.current) {
            clearInterval(autoPlayTimerRef.current);
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
    };    // 3D effect removed

    return (
        <section id="products" className="py-24 overflow-hidden relative">
            {/* Enhanced decorative elements for purple theme */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-[#AD49E1]/30 to-[#7A1CAC]/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-[#7A1CAC]/20 to-[#AD49E1]/30 rounded-full blur-3xl -z-0"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 relative">
                    <div className="inline-block relative">
                        {/* Animated gear icon */}
                        <motion.div
                            className="absolute -top-8 -right-8 w-16 h-16 opacity-40"
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
                        </motion.div>                        <h2
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
                </div>

                {/* Product Multi-Item Carousel */}                <div
                    className="relative max-w-7xl mx-auto"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10 px-2 sm:px-6">
                        <div className={`group relative ${currentIndex <= 0 ? 'opacity-50' : 'opacity-100'}`}>
                            <button
                                className={`bg-[#7A1CAC]/80 hover:bg-[#AD49E1] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm pointer-events-auto transition-all hover:scale-110 active:scale-95 ${currentIndex <= 0 ? 'cursor-not-allowed' : 'hover:animate-glow-pulse'}`}
                                onClick={prevSlide}
                                aria-label="Previous products"
                                disabled={currentIndex <= 0}
                            >
                                <FaChevronLeft className={`text-sm sm:text-base transition-transform duration-300 ${currentIndex > 0 ? 'group-hover:-translate-x-1' : ''}`} />

                                {/* Ripple effect */}
                                {currentIndex > 0 && (
                                    <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"></span>
                                )}
                            </button>

                            {/* Previous slide preview */}
                            {currentIndex > 0 && (
                                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-[#2E073F]/90 backdrop-blur-sm border border-purple-500/10 rounded-lg p-2 w-32 scale-0 origin-left opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hidden lg:block">
                                    <div className="text-xs text-purple-200 font-medium truncate">
                                        {products[currentIndex - 1].title}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className={`group relative ${currentIndex >= maxIndex ? 'opacity-50' : 'opacity-100'}`}>
                            <button
                                className={`bg-[#7A1CAC]/80 hover:bg-[#AD49E1] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm pointer-events-auto transition-all hover:scale-110 active:scale-95 ${currentIndex >= maxIndex ? 'cursor-not-allowed' : 'hover:animate-glow-pulse'}`}
                                onClick={nextSlide}
                                aria-label="Next products"
                                disabled={currentIndex >= maxIndex}
                            >
                                <FaChevronRight className={`text-sm sm:text-base transition-transform duration-300 ${currentIndex < maxIndex ? 'group-hover:translate-x-1' : ''}`} />

                                {/* Ripple effect */}
                                {currentIndex < maxIndex && (
                                    <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"></span>
                                )}
                            </button>

                            {/* Next slide preview */}
                            {currentIndex < maxIndex && (
                                <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-[#2E073F]/90 backdrop-blur-sm border border-purple-500/10 rounded-lg p-2 w-32 scale-0 origin-right opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hidden lg:block">
                                    <div className="text-xs text-purple-200 font-medium truncate">
                                        {products[currentIndex + 1].title}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Carousel container */}
                    <div
                        ref={carouselRef}
                        className="overflow-hidden rounded-xl w-full mx-auto"
                        onTouchStart={handleTouchStart}
                    >                        <div
                        className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                            height: '400px' // Reduced height since we removed description and tech stack
                        }}
                    >{products.map((product) => (
                        <div
                            key={product.id}
                            className={`px-3 flex-shrink-0 transition-transform duration-300 ease-in-out`}
                            style={{ width: `${100 / slidesToShow}%` }}
                        >                            <div
                            className="h-full flex flex-col relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/20 to-purple-800/30 backdrop-blur-sm border border-purple-500/10 transform transition-all duration-500 hover:shadow-[0_6px_20px_-10px_rgba(173,73,225,0.6)] group"
                        >                                    {/* Decorative background elements - enhanced with animation */}
                                <div className="absolute top-0 right-0 h-24 w-24 bg-purple-600/20 rounded-full blur-xl group-hover:animate-float"></div>
                                <div className="absolute -bottom-3 -left-3 h-32 w-32 bg-purple-800/20 rounded-full blur-xl group-hover:animate-float-delay"></div>
                                <div className="absolute top-1/3 left-1/4 h-16 w-16 bg-blue-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-700 group-hover:animate-float"></div>{/* Image container */}
                                <div className="flex-grow relative overflow-hidden">                                    {/* Static background gradient (removed animation) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E073F]/90 via-[#2E073F]/50 to-transparent z-10"></div>

                                    {/* Animated decorative elements */}
                                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-purple-500/20 blur-xl group-hover:animate-float"></div>
                                    <div className="absolute bottom-10 left-6 w-12 h-12 rounded-full bg-blue-500/20 blur-lg group-hover:animate-float-delay"></div>

                                    {!imageErrors[product.id] && product.img ? (
                                        <div className="w-full h-full overflow-hidden">
                                            <img
                                                src={product.img}
                                                alt={product.title}
                                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                                                style={{ transformOrigin: 'center center' }}
                                                onError={() => handleImageError(product.id)}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#2E073F]/90 via-[#2E073F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-5"></div>
                                        </div>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3D0E59] to-[#2E073F]">
                                            <div className="text-center p-4">
                                                <FaImage className="text-[#AD49E1] text-4xl mx-auto mb-3 animate-bounce-slow" />
                                                <h3 className="text-xl font-bold text-white">{product.title}</h3>
                                            </div>
                                        </div>
                                    )}                                        {/* Content overlay */}                                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 z-20">
                                        <div className="transform transition-all duration-500 ease-out translate-y-0 group-hover:translate-y-[-10px]">
                                            {/* Title with glowing effect on hover */}
                                            <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-white group-hover:to-purple-300 transition-all duration-500">
                                                {product.title}
                                            </h3>

                                            {/* Button only */}
                                            <div className="relative mt-4">
                                                <Link to={`/products/${product.id}`}>
                                                    <button
                                                        className="relative bg-[#AD49E1] hover:bg-[#7A1CAC] text-white px-4 sm:px-5 py-2 rounded-full font-medium transition-all hover:scale-105 active:scale-95 inline-flex items-center shadow-[0_5px_15px_-5px_rgba(173,73,225,0.7)] overflow-hidden group/btn"
                                                    >
                                                        {/* Button glow effect */}
                                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>

                                                        <span>{t('productsSection.detailsButton')}</span>
                                                        <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                        </div>
                    </div>                    {/* Enhanced Interactive Indicators */}
                    <div className="flex flex-col items-center mt-8">
                        {/* Slide count indicator */}
                        <div className="text-gray-300 text-xs font-medium mb-3">
                            <span className="text-[#AD49E1] font-bold">{currentIndex + 1}</span> / {maxIndex + 1}
                        </div>

                        {/* Animated progress indicators */}
                        <div className="flex justify-center space-x-2 sm:space-x-3 w-full max-w-md relative">
                            {Array.from({ length: maxIndex + 1 }).map((_, index) => {
                                const isCurrent = index === currentIndex;
                                const isPast = index < currentIndex;
                                return (
                                    <div
                                        key={index}
                                        className="group relative cursor-pointer flex-1 max-w-16"
                                        onClick={() => setCurrentIndex(index)}
                                    >
                                        <div className="h-1.5 sm:h-2 overflow-hidden rounded-full bg-white/20 backdrop-blur-sm relative">
                                            {/* Background bar */}
                                            <div
                                                className={`absolute top-0 left-0 h-full rounded-full transition-all duration-300 ${isPast ? 'bg-[#AD49E1]/70 w-full' :
                                                    isCurrent ? 'bg-[#AD49E1] animate-progress' :
                                                        'bg-transparent w-0'
                                                    }`}
                                                style={{
                                                    animationDuration: isCurrent ? '5s' : '0s',
                                                    animationPlayState: isHovering ? 'paused' : 'running'
                                                }}
                                            ></div>
                                        </div>

                                        {/* Hover indicator */}
                                        <span
                                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white bg-[#AD49E1] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                                        >
                                            Slide {index + 1}
                                        </span>                                        {/* Active indicator dot removed */}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
