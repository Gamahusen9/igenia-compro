import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../../components/common/PageHeader';

export default function BlogHeader() {
    const { t } = useTranslation();

    return (
        <PageHeader
            title={t('blog.title')}
            description={t('blog.description')}
        />
    );
}
