import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

// Consolidated contact information with labels
export const contactInfo = {
    email: [
        { label: 'Primary', value: 'info@igenia.com', href: 'mailto:info@igenia.com', icon: <HiMail /> },
        { label: 'Business', value: 'business@igenia.com', href: 'mailto:business@igenia.com', icon: <HiMail /> },
    ],
    phone: [
        { label: 'Primary', value: '+62 21 1234 5678', href: 'tel:+622112345678', icon: <HiPhone /> },
        { label: 'Support', value: '+62 21 8765 4321', href: 'tel:+622187654321', icon: <HiPhone /> },
    ],
    address: {
        value: 'H.Sikam Raya No.69 RT.002 RW.013 Kel. Kunciran Indah, Kec. Pinang Kota Tangerang, Provinsi Banten Indonesia 15144',
        icon: <HiLocationMarker />,
        iframe: {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2982517538!2d106.67392118281623!3d-6.224349077683918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa2afc7eda1f%3A0xbd98b56413b2267b!2sPRIBADINET!5e0!3m2!1sid!2sid!4v1749693593355!5m2!1sid!2sid",
            width: "100%",
            height: "100%",
            style: { border: 0 },
            allowFullScreen: true,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
        }
    }
};

// Social media links with icons, URLs and display names - Keep as is
export const socialMediaLinks = [
    {
        name: 'Facebook',
        icon: <FaFacebookF />,
        url: 'https://facebook.com/igenia',
        color: 'bg-[#7A1CAC] hover:bg-[#AD49E1]'
    },
    {
        name: 'Twitter',
        icon: <FaTwitter />,
        url: 'https://twitter.com/igenia',
        color: 'bg-[#7A1CAC] hover:bg-[#AD49E1]'
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedinIn />,
        url: 'https://linkedin.com/company/igenia',
        color: 'bg-[#7A1CAC] hover:bg-[#AD49E1]'
    },
    {
        name: 'Instagram',
        icon: <FaInstagram />,
        url: 'https://instagram.com/igenia',
        color: 'bg-[#7A1CAC] hover:bg-[#AD49E1]'
    },
    {
        name: 'YouTube',
        icon: <FaYoutube />,
        url: 'https://youtube.com/c/igenia',
        color: 'bg-[#7A1CAC] hover:bg-[#AD49E1]'
    },
    {
        name: 'TikTok',
        icon: <FaTiktok />,
        url: 'https://tiktok.com/@igenia',
        color: 'bg-[#7A1CAC] hover:bg-[#AD49E1]'
    }
];

