import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { contactInfo, socialMediaLinks } from '../core/data/list-contact-data';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    // Define footer menu links
    const menuLinks = [
        { name: t('navigation.home'), path: '/' },
        { name: t('navigation.about'), path: '/about' },
        { name: t('footer.privacy_policy'), path: '/privacy-policy' },
        { name: t('navigation.faq'), path: '/faq' }
    ];

    // Define product links
    const productLinks = [
        { name: 'Website Development', path: '/products/website-development' },
        { name: 'Mobile Apps', path: '/products/mobile-apps' },
        { name: 'Cloud Services', path: '/products/cloud-services' },
        { name: 'Digital Marketing', path: '/products/digital-marketing' }
    ];

    return (
        <footer className="bg-gradient-to-b from-[#2E073F] to-[#1A0425] text-white pt-16 pb-8">
            <div className="container mx-auto px-2 md:px-4">
                {/* Footer Top Section */}
                <div className="flex flex-col md:flex-row flex-wrap justify-around gap-8">
                    {/* Company Information & Social Media */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-6 md:mb-0 md:w-auto max-w-xs"
                    >
                        <Link to="/" className="inline-block mb-6">
                            <img src="/assets/logo.png" alt="IGENIA" className="h-32 w-auto rounded-md" />
                        </Link>
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-4 text-[#AD49E1]">
                                {t('footer.follow_us')}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {socialMediaLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${link.color}`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {React.cloneElement(link.icon, { size: 24 })}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="md:w-auto max-w-sm"
                    >
                        <h3 className="text-lg font-semibold mb-4 text-[#AD49E1]">
                            {t('footer.contact_us')}
                        </h3>
                        <ul className="space-y-5 text-gray-300">
                            {/* Address */}
                            <li>
                                <div className="flex items-center mb-2">
                                    {React.cloneElement(contactInfo.address.icon, { className: "text-[#AD49E1] mr-3 text-2xl" })}
                                    <span className="font-semibold">{t('contact.info.address')}</span>
                                </div>
                                <div className="ml-8">
                                    <span>{contactInfo.address.value}</span>
                                </div>
                                {/* Map positioned under address */}
                                <div className="mt-3 ml-8 rounded-lg overflow-hidden shadow-md">
                                    <iframe
                                        {...contactInfo.address.iframe}
                                        height="200"
                                        title="Company Location"
                                    />
                                </div>
                            </li>

                            {/* Phone - Category with values */}
                            <li>
                                <div className="flex items-center mb-2">
                                    {React.cloneElement(contactInfo.phone[0].icon, { className: "text-[#AD49E1] mr-3 text-2xl" })}
                                    <span className="font-semibold">Phone</span>
                                </div>
                                <div className="ml-8 space-y-1">
                                    {contactInfo.phone.map((phone, index) => (
                                        <a
                                            key={index}
                                            href={phone.href}
                                            className="hover:text-[#AD49E1] transition-colors block"
                                        >
                                            {phone.value}
                                        </a>
                                    ))}
                                </div>
                            </li>

                            {/* Email - Category with values */}
                            <li>
                                <div className="flex items-center mb-2">
                                    {React.cloneElement(contactInfo.email[0].icon, { className: "text-[#AD49E1] mr-3 text-2xl" })}
                                    <span className="font-semibold">Email</span>
                                </div>
                                <div className="ml-8 space-y-1">
                                    {contactInfo.email.map((email, index) => (
                                        <a
                                            key={index}
                                            href={email.href}
                                            className="hover:text-[#AD49E1] transition-colors block"
                                        >
                                            {email.value}
                                        </a>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Menu Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:w-auto max-w-xs"
                    >
                        <h3 className="text-lg font-semibold mb-4 text-[#AD49E1]">
                            {t('footer.menu')}
                        </h3>
                        <ul className="space-y-3">
                            {menuLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-[#AD49E1] transition-colors duration-200 inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Products Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="md:w-auto max-w-xs"
                    >
                        <h3 className="text-lg font-semibold mb-4 text-[#AD49E1]">
                            {t('navigation.products')}
                        </h3>
                        <ul className="space-y-3">
                            {productLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-[#AD49E1] transition-colors duration-200 inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Footer Divider */}
                <div className="border-t border-[#7A1CAC]/30 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-center items-center text-gray-400 text-sm">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            &copy; {currentYear} IGENIA. {t('footer.all_rights_reserved')}
                        </motion.p>
                    </div>
                </div>
            </div>
        </footer>
    );
}