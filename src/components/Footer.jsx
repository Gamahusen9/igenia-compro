import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
// Import React icons
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

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

    // Social media links - themed instead of brand colors
    const socialLinks = [
        {
            name: 'facebook',
            icon: <FaFacebookF size={24} />,
            url: 'https://facebook.com',
            color: 'bg-[#7A1CAC] hover:bg-[#AD49E1]'
        },
        {
            name: 'instagram',
            icon: <FaInstagram size={24} />,
            url: 'https://instagram.com',
            color: 'bg-[#7A1CAC] hover:bg-[#AD49E1]'
        }
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
                            <img src="/assets/logo.png" alt="iGenia" className="h-32 w-auto rounded-md" />
                        </Link>
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-4 text-[#AD49E1]">
                                {t('footer.follow_us')}
                            </h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${link.color}`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {link.icon}
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
                            <li>
                                <div className="flex items-center mb-2">
                                    <FaMapMarkerAlt className="text-[#AD49E1] mr-3 text-2xl" />
                                    <span className="font-semibold">Alamat</span>
                                </div>
                                <div className="ml-8">
                                    <span>H.Sikam Raya No.69 RT.002 RW.013 Kel. Kunciran Indah,
                                        Kec. Pinang
                                        Kota Tangerang,
                                        Provinsi Banten Indonesia 15144</span>
                                </div>
                                {/* Map positioned under address */}
                                <div className="mt-3 ml-8 rounded-lg overflow-hidden shadow-md">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2982517538!2d106.67392118281623!3d-6.224349077683918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa2afc7eda1f%3A0xbd98b56413b2267b!2sPRIBADINET!5e0!3m2!1sid!2sid!4v1749693593355!5m2!1sid!2sid"
                                        width="100%"
                                        height="200"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Company Location"
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center mb-2">
                                    <FaPhoneAlt className="text-[#AD49E1] mr-3 text-2xl" />
                                    <span className="font-semibold">Phone</span>
                                </div>
                                <div className="ml-8">
                                    <a href={`tel:${t('footer.phone')}`} className="hover:text-[#AD49E1] transition-colors block">
                                        {t('footer.phone')}
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center mb-2">
                                    <FaEnvelope className="text-[#AD49E1] mr-3 text-2xl" />
                                    <span className="font-semibold">Email</span>
                                </div>
                                <div className="ml-8 space-y-1">
                                    <a href={`mailto:${t('footer.email1')}`} className="hover:text-[#AD49E1] transition-colors block">
                                        {t('footer.email1')}
                                    </a>
                                    <a href={`mailto:${t('footer.email2')}`} className="hover:text-[#AD49E1] transition-colors block">
                                        {t('footer.email2')}
                                    </a>
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
                            &copy; {currentYear} iGenia. {t('footer.all_rights_reserved')}
                        </motion.p>
                    </div>
                </div>
            </div>
        </footer>
    );
}