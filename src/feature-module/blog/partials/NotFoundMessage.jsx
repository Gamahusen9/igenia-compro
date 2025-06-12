import React from "react";

const NotFoundMessage = ({ onBack }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold mb-4">Blog tidak ditemukan</h2>
            <button className="bg-[#AD49E1] px-6 py-2 rounded-full" onClick={onBack}>
                Kembali
            </button>
        </div>
    );
};

export default NotFoundMessage;
