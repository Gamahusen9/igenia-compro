import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../../components/PageHeader';

const AboutHeader = () => {
    const { t } = useTranslation();

    return (
        <PageHeader
            title={t('navigation.about', 'About Us')}
            description={t('aboutPage.heroDescription', 'Learn more about our journey, mission, values, and the team behind Igenia\'s innovative solutions.')}
        />
    );
};

export default AboutHeader;
