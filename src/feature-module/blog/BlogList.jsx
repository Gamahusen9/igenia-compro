import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { blogPosts } from "../../core/data/list-blog";
import CategoryTabs from "./partials/CategoryTabs";
import BlogCard from "./partials/BlogCard";
import BlogHeader from "./partials/BlogHeader";
import { containerVariants, itemVariants, cardVariants, formatDate } from "./partials/BlogUtils";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogList = () => {
    useTranslation();
    const [activeTab, setActiveTab] = useState("News");
    const [hoveredCard, setHoveredCard] = useState(null);

    const categories = ["News", "Info"];
    const filteredPosts = blogPosts.filter(post => post.category === activeTab);

    // Animasi container - matching FaqLayout
    const containerVariantsMain = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.5
            }
        }
    };

    return (
        <>
            <Navbar />

            {/* Main Content with Background - matching FaqLayout */}
            <div className="min-h-screen bg-gradient-to-b from-[#1A0425] via-[#2E073F] to-[#1A0425] text-white">
                {/* Top Spacer for Fixed Navbar */}
                <div className="h-24"></div>

                {/* Blog Container */}
                <motion.div
                    className="container mx-auto px-4 py-16"
                    variants={containerVariantsMain}
                    initial="hidden"
                    animate="visible"
                >
                    <BlogHeader />

                    {/* Category Tabs */}
                    <CategoryTabs
                        categories={categories}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                    {/* Blog Cards */}
                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                post={post}
                                hoveredCard={hoveredCard}
                                setHoveredCard={setHoveredCard}
                                formatDate={formatDate}
                                cardVariants={cardVariants}
                                itemVariants={itemVariants}
                                linkToDetail={true}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
        </>
    );
};

export default BlogList;