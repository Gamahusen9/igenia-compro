import React, { useEffect, useState, Component } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

// Import partials
import AboutHeader from './partials/AboutHeader';
import AboutOverview from './partials/AboutOverview';
import AboutVisionMission from './partials/AboutVisionMission';
import AboutValues from './partials/AboutValues';
import AboutContact from './partials/AboutContact';

// Error Boundary component to prevent the entire app from crashing on render errors
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error in component:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Custom error UI
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
                    <h2 className="text-2xl mb-4 text-purple-400">Something went wrong</h2>
                    <p className="mb-6 text-gray-300">We're sorry, but there was an error loading this page.</p>
                    <button
                        onClick={() => this.setState({ hasError: false })}
                        className="px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-md"
                    >
                        Try again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

const AboutLayout = () => {
    const { t } = useTranslation();
    // Track if component is mounted to prevent memory leaks
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        if (isMounted) {
            window.scrollTo(0, 0);
            document.title = `${t('navigation.about')} | Igenia`;
        }

        // Cleanup function to prevent memory leaks
        return () => {
            setIsMounted(false);
        };
    }, [t, isMounted]);

    // Animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.5
            }
        }
    }; return (
        <>
            <Navbar />
            <ScrollToTop />

            {/* Main Content with Background */}
            <div className="min-h-screen bg-gradient-to-b from-[#1A0425] via-[#2E073F] to-[#1A0425] text-white">
                {/* Top Spacer for Fixed Navbar */}
                <div className="h-24"></div>

                {/* About Container */}
                <motion.div
                    className="container mx-auto px-4 py-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <AboutHeader />
                    <AboutOverview />
                    <AboutVisionMission />
                    <AboutValues />
                    <AboutContact />
                </motion.div>
            </div>

            <Footer />
        </>
    );
};

// Wrap AboutLayout with ErrorBoundary
const SafeAboutLayout = () => {
    return (
        <ErrorBoundary>
            <AboutLayout />
        </ErrorBoundary>
    );
};

export default SafeAboutLayout;