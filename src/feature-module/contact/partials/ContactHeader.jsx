import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../../components/PageHeader';

export default function ContactHeader() {
    const { t } = useTranslation();

    return (
        <PageHeader
            title={t('contact.title')}
            description={t('contact.description')}
        />
    );
}
