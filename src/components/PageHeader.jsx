import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PageHeader = ({ title, description }) => {
    useTranslation();

    return (
        <div className="text-center mb-16">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
            >
                <h2 className="inline-block bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    {title}
                </h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-gray-300 max-w-2xl mx-auto text-lg"
            >
                {description}
            </motion.p>
        </div>
    );
};

export default PageHeader;
