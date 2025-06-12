import React from "react";

const CategoryTabs = ({ categories, activeTab, setActiveTab }) => {
    return (
        <div className="flex justify-center mb-10">
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={`px-6 py-2 mx-2 rounded-full font-semibold transition-all duration-300 ${activeTab === cat ? 'bg-gradient-to-r from-[#AD49E1] to-[#7A1CAC] text-white' : 'bg-white/10 text-[#AD49E1]'}`}
                    onClick={() => setActiveTab(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;
