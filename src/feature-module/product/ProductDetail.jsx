import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaLaptop, FaMobile, FaImage } from 'react-icons/fa';
import getProductList from '../../core/data/list-product';
import { technologies } from '../../core/data/list-tech';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

// Function to get tech icon from local assets
const getTechIcon = (techName) => {
    // Find matching technology from the technologies array
    const tech = technologies.find(t =>
        t.name.toLowerCase() === techName.toLowerCase() ||
        techName.toLowerCase().includes(t.name.toLowerCase())
    );

    if (tech) {
        return (
            <div className="flex items-center justify-center w-6 h-6">
                <img
                    src={tech.iconSrc}
                    alt={tech.name}
                    className="max-w-full max-h-full"
                />
            </div>
        );
    }

    return <span className="text-xl">•</span>;
};

const ProductDetail = ({ productId }) => {
    const { t } = useTranslation();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [mainImageError, setMainImageError] = useState(false);
    const [mockupErrors, setMockupErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        });

        // Get product data
        const products = getProductList();
        const foundProduct = products.find(p => p.id === parseInt(productId));

        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            // Product not found, redirect to home
            navigate('/');
        }

        setIsLoading(false);
    }, [productId, navigate]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="w-16 h-16 border-t-4 border-b-4 border-[#AD49E1] rounded-full animate-spin"></div>
                    <p className="mt-4 text-white">{t('productDetail.loading')}</p>
                </div>
            </div>
        );
    }

    if (!product) return null;

    const handleMockupError = (index) => {
        setMockupErrors(prev => ({
            ...prev,
            [index]: true
        }));
    };

    return (
        <div className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                {/* Back button */}
                <div className="mb-10">
                    <motion.div
                        whileHover={{ x: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/" className="inline-flex items-center text-white hover:text-[#AD49E1] transition-colors">
                            <FaArrowLeft className="mr-2" />
                            <span>{t('productDetail.backToProducts')}</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Product Hero */}
                <div className="mb-16">
                    <motion.div
                        className="relative rounded-2xl overflow-hidden h-[300px] md:h-[500px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2E073F]/90 via-[#2E073F]/70 to-transparent z-10"></div>
                        {!mainImageError && product.img ? (
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-full object-cover"
                                onError={() => setMainImageError(true)}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3D0E59] to-[#2E073F]">
                                <div className="text-center p-6">
                                    <FaImage className="text-[#AD49E1] text-5xl mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                                </div>
                            </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    {product.title}
                                </h1>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Product Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column: Description, Features */}
                    <div className="lg:col-span-7" data-aos="fade-up">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl border border-white/10 mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{t('productDetail.aboutProduct')}</h2>
                            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                                {product.description}
                            </p>

                            <div className="space-y-10">
                                {/* Features */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-[#AD49E1] flex items-center">
                                        <span className="bg-[#AD49E1]/20 p-1.5 rounded-md mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                        {t('productDetail.keyFeatures')}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {product.features.map((feature, i) => (
                                            <div key={i} className="flex items-start">
                                                <FaCheckCircle className="text-[#AD49E1] mr-2 mt-1 flex-shrink-0" />
                                                <span className="text-gray-200">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mockups */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-[#AD49E1] flex items-center">
                                        <span className="bg-[#AD49E1]/20 p-1.5 rounded-md mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                            </svg>
                                        </span>
                                        {t('productDetail.screenshotsMockups')}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {product.mockups.map((mockup, i) => (
                                            <motion.div
                                                key={i}
                                                className="bg-[#7A1CAC]/20 p-3 rounded-lg"
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            >
                                                {mockup.type === 'desktop' ? (
                                                    <div className="flex flex-col">
                                                        <FaLaptop className="text-[#AD49E1] mx-auto mb-2" />
                                                        <div className="bg-black/40 rounded-lg overflow-hidden h-36">
                                                            {!mockupErrors[i] && mockup.img ? (
                                                                <img
                                                                    src={mockup.img}
                                                                    alt={`Desktop view of ${product.title}`}
                                                                    className="w-full h-full object-cover"
                                                                    onError={() => handleMockupError(i)}
                                                                />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3D0E59] to-[#2E073F]">
                                                                    <div className="text-center p-2">
                                                                        <FaLaptop className="text-[#AD49E1] text-xl mx-auto mb-2" />
                                                                        <p className="text-xs text-white">Desktop Preview</p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <p className="text-center text-xs text-gray-400 mt-2">{t('productDetail.desktopView')}</p>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-col">
                                                        <FaMobile className="text-[#AD49E1] mx-auto mb-2" />
                                                        <div className="bg-black/40 rounded-md overflow-hidden h-48">
                                                            {!mockupErrors[i] && mockup.img ? (
                                                                <img
                                                                    src={mockup.img}
                                                                    alt={`Mobile view of ${product.title}`}
                                                                    className="w-full h-full object-cover"
                                                                    onError={() => handleMockupError(i)}
                                                                />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3D0E59] to-[#2E073F]">
                                                                    <div className="text-center p-2">
                                                                        <FaMobile className="text-[#AD49E1] text-xl mx-auto mb-2" />
                                                                        <p className="text-xs text-white">Mobile Preview</p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <p className="text-center text-xs text-gray-400 mt-2">{t('productDetail.mobileView')}</p>
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Tech Specs, Versions */}
                    <div className="lg:col-span-5" data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl border border-white/10 mb-10">
                            {/* Tech Spec */}
                            <div className="mb-10">
                                <h3 className="text-xl font-semibold text-[#AD49E1] flex items-center mb-4">
                                    <span className="bg-[#AD49E1]/20 p-1.5 rounded-md mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </span>
                                    {t('productDetail.techSpecs')}
                                </h3>
                                <div className="bg-[#7A1CAC]/20 p-5 rounded-xl text-gray-200">
                                    <div className="flex flex-wrap gap-4">
                                        {product.techSpec.split(', ').map((tech, i) => (
                                            <div key={i} className="flex items-center bg-[#3D0E59]/50 px-3 py-2 rounded-lg">
                                                <span className="mr-2 text-[#AD49E1]">
                                                    {getTechIcon(tech)}
                                                </span>
                                                <span className="font-medium text-white">{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Available Versions */}
                            <div className="mb-10">
                                <h3 className="text-xl font-semibold text-[#AD49E1] flex items-center mb-4">
                                    <span className="bg-[#AD49E1]/20 p-1.5 rounded-md mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                    </span>
                                    {t('productDetail.availableVersions')}
                                </h3>
                                <div className="space-y-3">
                                    {product.availableVersions.map((version, i) => (
                                        <motion.div
                                            key={i}
                                            className="bg-[#7A1CAC]/30 p-4 rounded-xl border border-[#7A1CAC]/40 flex justify-between items-center"
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <span className="text-white font-medium">{version}</span>
                                            <button className="px-3 py-1 bg-[#AD49E1]/80 hover:bg-[#AD49E1] rounded-md text-sm text-white transition-colors">
                                                {t('productDetail.details')}
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <motion.div
                                className="bg-gradient-to-r from-[#7A1CAC] to-[#AD49E1] p-6 rounded-xl text-center shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <h3 className="text-xl text-white font-bold mb-3">{t('productDetail.interestedProduct')}</h3>
                                <p className="text-white/80 mb-4">{t('productDetail.contactSales')}</p>
                                <button className="bg-white text-[#7A1CAC] font-medium px-6 py-3 rounded-lg hover:bg-white/90 transition-colors">
                                    {t('productDetail.requestInfo')}
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;