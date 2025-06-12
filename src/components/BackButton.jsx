import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BackButton = ({ customLabel }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="mb-10 mt-6">
            <motion.div
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
            >
                <button
                    onClick={handleGoBack}
                    className="inline-flex items-center text-white hover:text-[#AD49E1] transition-colors"
                >
                    <FaArrowLeft className="mr-2" />
                    <span>{customLabel || t('productDetail.backToProducts', 'Back')}</span>
                </button>
            </motion.div>
        </div>
    );
};

export default BackButton;
