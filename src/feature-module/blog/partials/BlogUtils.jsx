import React from "react";

// Helper function untuk format tanggal menjadi format Indonesia
const formatDate = (dateString) => {
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
};

// Variasi animasi untuk container blog
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

// Variasi animasi untuk item blog
export const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100 }
    }
};

// Variasi animasi untuk card blog
export const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 10 }
    },
    hover: {
        scale: 1.03,
        boxShadow: "0px 8px 24px rgba(173,73,225,0.15)",
        transition: { type: "spring", stiffness: 400, damping: 10 }
    }
};

export { formatDate };
