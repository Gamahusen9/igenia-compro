import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../../components/PageHeader';

export default function FaqHeader() {
    const { t } = useTranslation();

    return (
        <PageHeader
            title={t('faq.frequently_asked_questions')}
            description={t('faq.faq_description')}
        />
    );
}
