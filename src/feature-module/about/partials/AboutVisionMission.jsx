import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutVisionMission = () => {
    const { t } = useTranslation();

    return (
        <div className="py-16 relative overflow-hidden">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-[#AD49E1] to-white bg-clip-text text-transparent">
                        {t('aboutPage.visionMissionTitle', 'Our Vision & Mission')}
                    </span>
                </h2>

                <div className="w-32 h-1.5 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mx-auto mb-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                {/* Vision Card */}
                <motion.div
                    className="bg-gradient-to-br from-[#230b36]/80 via-[#230b36]/60 to-[#1a0b29]/60 p-8 md:p-10 rounded-2xl border border-purple-900/30 shadow-lg shadow-purple-900/20 relative overflow-hidden"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -5 }}
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#AD49E1]/10 to-transparent rounded-full -mr-16 -mt-16 blur-2xl"></div>

                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                        {t('aboutPage.visionTitle', 'Our Vision')}
                    </h3>

                    <div className="w-16 h-1 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mb-6"></div>

                    <p className="text-gray-300 text-lg relative z-10">
                        {t('aboutPage.visionText', 'To be a leading innovator in digital solutions, empowering businesses to thrive in the digital era through cutting-edge technology and exceptional service.')}
                    </p>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                    className="bg-gradient-to-br from-[#230b36]/80 via-[#230b36]/60 to-[#1a0b29]/60 p-8 md:p-10 rounded-2xl border border-purple-900/30 shadow-lg shadow-purple-900/20 relative overflow-hidden"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ y: -5 }}
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#AD49E1]/10 to-transparent rounded-full -mr-16 -mt-16 blur-2xl"></div>

                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                        {t('aboutPage.missionTitle', 'Our Mission')}
                    </h3>

                    <div className="w-16 h-1 bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] mb-6"></div>

                    <p className="text-gray-300 text-lg relative z-10">
                        {t('aboutPage.missionText', 'To deliver exceptional digital solutions that drive business growth, enhance customer experiences, and transform operations through innovation, expertise, and strategic partnerships.')}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutVisionMission;
