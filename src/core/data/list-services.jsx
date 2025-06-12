import React from 'react';
import {
    FaCloud, FaCloudUploadAlt, FaSync, FaLaptopCode, FaMobile, FaPaintBrush,
    FaServer, FaMicrochip, FaDownload, FaTools, FaUsers, FaHandshake,
    FaUserGraduate, FaShieldAlt, FaDatabase, FaNetworkWired, FaGlobe,
    FaFileAlt, FaSearchPlus, FaUserSecret
} from 'react-icons/fa';

// Note: This uses translation function t() which should be passed from component using this data
const getServiceCategories = (t) => [
    {
        id: 'cloud',
        title: t('servicesSection.categories.cloud.title'),
        icon: <FaCloud className="text-purple-300" />,
        services: [
            { name: t('servicesSection.categories.cloud.services.infrastructure'), icon: <FaCloudUploadAlt /> },
            { name: t('servicesSection.categories.cloud.services.cicd'), icon: <FaSync /> }
        ]
    },
    {
        id: 'development',
        title: t('servicesSection.categories.development.title'),
        icon: <FaLaptopCode className="text-purple-300" />,
        services: [
            { name: t('servicesSection.categories.development.services.webMobile'), icon: <FaMobile /> },
            { name: t('servicesSection.categories.development.services.uiux'), icon: <FaPaintBrush /> }
        ]
    },
    {
        id: 'procurement',
        title: t('servicesSection.categories.procurement.title'),
        icon: <FaServer className="text-purple-300" />,
        services: [
            { name: t('servicesSection.categories.procurement.services.hardware'), icon: <FaMicrochip /> },
            { name: t('servicesSection.categories.procurement.services.software'), icon: <FaDownload /> },
            { name: t('servicesSection.categories.procurement.services.installation'), icon: <FaTools /> }
        ]
    },
    {
        id: 'hr',
        title: t('servicesSection.categories.hr.title'),
        icon: <FaUsers className="text-purple-300" />,
        services: [
            { name: t('servicesSection.categories.hr.services.outsource'), icon: <FaHandshake /> },
            { name: t('servicesSection.categories.hr.services.training'), icon: <FaUserGraduate /> }
        ]
    },
    {
        id: 'security',
        title: t('servicesSection.categories.security.title'),
        icon: <FaShieldAlt className="text-purple-300" />,
        services: [
            { name: t('servicesSection.categories.security.services.integration'), icon: <FaNetworkWired /> },
            { name: t('servicesSection.categories.security.services.database'), icon: <FaDatabase /> },
            { name: t('servicesSection.categories.security.services.api'), icon: <FaCloud /> },
            { name: t('servicesSection.categories.security.services.infrastructure'), icon: <FaGlobe /> },
            { name: t('servicesSection.categories.security.services.iso'), icon: <FaFileAlt /> },
            { name: t('servicesSection.categories.security.services.vulnerability'), icon: <FaSearchPlus /> },
            { name: t('servicesSection.categories.security.services.penetration'), icon: <FaUserSecret /> }
        ]
    }
];

export default getServiceCategories;
