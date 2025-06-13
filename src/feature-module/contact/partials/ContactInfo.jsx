import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { contactInfo, socialMediaLinks } from '../../../core/data/list-contact-data';

export default function ContactInfo() {
    const { t } = useTranslation();

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="bg-gradient-to-br from-[#2E073F]/80 to-[#1A0425] p-7 rounded-xl shadow-lg border border-purple-900 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-7">{t('contact.info.contact_us')}</h3>

                <div className="flex-grow flex flex-col justify-between">
                    <div className="space-y-9 flex-grow">
                        {/* Email - Now properly looping through all emails */}
                        <div className="flex items-start space-x-3">
                            <div className="bg-purple-900/50 p-2.5 rounded-lg">
                                {React.cloneElement(contactInfo.email[0].icon, { className: "h-5 w-5 text-[#AD49E1]" })}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-300 mb-1">{t('contact.info.email')}</p>
                                <div className="space-y-1">
                                    {contactInfo.email.map((email, index) => (
                                        <a
                                            key={index}
                                            href={email.href}
                                            className="text-[#AD49E1] hover:text-white transition-colors block"
                                        >
                                            {email.value}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Phone - Now properly looping through all phone numbers */}
                        <div className="flex items-start space-x-3">
                            <div className="bg-purple-900/50 p-2.5 rounded-lg">
                                {React.cloneElement(contactInfo.phone[0].icon, { className: "h-5 w-5 text-[#AD49E1]" })}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-300 mb-1">{t('contact.info.phone')}</p>
                                <div className="space-y-1">
                                    {contactInfo.phone.map((phone, index) => (
                                        <a
                                            key={index}
                                            href={phone.href}
                                            className="text-[#AD49E1] hover:text-white transition-colors block"
                                        >
                                            {phone.value}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Address - Without Label */}
                        <div className="flex items-start space-x-3">
                            <div className="bg-purple-900/50 p-2.5 rounded-lg">
                                {React.cloneElement(contactInfo.address.icon, { className: "h-5 w-5 text-[#AD49E1]" })}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-300 mb-1">{t('contact.info.address')}</p>
                                <p className="text-gray-300 leading-relaxed">
                                    {contactInfo.address.value}
                                </p>
                            </div>
                        </div>

                        {/* Map - Added below address with reduced size */}
                        <motion.div
                            className="h-32 w-full bg-[#1A0425] rounded-lg overflow-hidden mt-2"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <iframe
                                title="Igenia Location"
                                {...contactInfo.address.iframe}
                            ></iframe>
                        </motion.div>
                    </div>

                    {/* Social Media Links - Now properly looping from list-contact-data.jsx */}
                    <div className="flex flex-wrap gap-3 mt-8 pt-5">
                        {socialMediaLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-900/50 p-2.5 rounded-lg text-[#AD49E1] hover:bg-[#AD49E1] hover:text-white transition-colors"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {React.cloneElement(social.icon, { className: "h-5 w-5" })}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

