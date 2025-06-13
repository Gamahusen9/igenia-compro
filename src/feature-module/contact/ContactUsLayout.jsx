import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactHeader from './partials/ContactHeader';
import ContactForm from './partials/ContactForm';
import ContactInfo from './partials/ContactInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function ContactUsLayout() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });
    }, []);

    return (
        <>
            <Navbar />

            {/* Main Content with Background */}
            <div className="min-h-screen bg-gradient-to-b from-[#1A0425] via-[#2E073F] to-[#1A0425] text-white">
                {/* Top Spacer for Fixed Navbar */}
                <div className="h-24"></div>

                {/* Contact Container */}
                <div className="container mx-auto px-4 py-16 relative z-10">
                    <ContactHeader />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
                        {/* Form column - removed fixed height */}
                        <div>
                            <ContactForm />
                        </div>

                        {/* Info column - removed fixed height */}
                        <div>
                            <ContactInfo />
                        </div>
                    </div>

                    {/* Removed Map section since it's now in ContactInfo */}
                </div>
            </div>

            <Footer />
        </>
    );
}