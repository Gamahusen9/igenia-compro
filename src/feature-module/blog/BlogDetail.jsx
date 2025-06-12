import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../../core/data/list-blog";
import BlogContent from "./partials/BlogContent";
import NotFoundMessage from "./partials/NotFoundMessage";
import { formatDate } from "./partials/BlogUtils";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackButton from "../../components/BackButton";

const BlogDetail = () => {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.id === parseInt(blogId));

    if (!post) {
        return <NotFoundMessage onBack={() => navigate(-1)} />;
    }

    return (
        <>
            <Navbar />
            <section className="py-24 min-h-screen bg-gradient-to-b from-[#1A0425] via-[#2E073F] to-[#1A0425] text-white">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <BackButton customLabel="Back to Blogs" />
                    <BlogContent post={post} formatDate={formatDate} />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BlogDetail;