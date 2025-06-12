import React from 'react';

const listAboutValues = [
    {
        id: 1,
        title: 'aboutPage.value1Title',
        titleDefault: 'Inovasi',
        text: 'aboutPage.value1Text',
        textDefault: 'Kami selalu mencari cara-cara baru dan lebih baik untuk menyelesaikan tantangan teknologi. Inovasi ada di jantung setiap solusi yang kami ciptakan.',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
            />
        )
    },
    {
        id: 2,
        title: 'aboutPage.value2Title',
        titleDefault: 'Integritas',
        text: 'aboutPage.value2Text',
        textDefault: 'Kami berkomitmen pada kejujuran, transparansi, dan standar etika tertinggi dalam semua interaksi kami. Kepercayaan adalah fondasi dari setiap hubungan yang kami bangun.',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
        )
    },
    {
        id: 3,
        title: 'aboutPage.value3Title',
        titleDefault: 'Keunggulan',
        text: 'aboutPage.value3Text',
        textDefault: 'Kami terus berusaha mencapai standar tertinggi dalam pekerjaan kami. Komitmen terhadap kualitas, presisi, dan pengembangan berkelanjutan memastikan kami memberikan hasil terbaik.',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
        )
    }
];

export default listAboutValues;
