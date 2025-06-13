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
    const { blogSlug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.title.toLowerCase().replace(/ /g, "-") === blogSlug);

    if (!post) {
        return <NotFoundMessage onBack={() => navigate(-1)} />;
    }

    return (
        <>
            <Navbar />
            <section className="py-24 min-h-screen bg-gradient-to-b from-[#1A0425] via-[#2E073F] to-[#1A0425] text-white">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <BackButton customLabel="Kembali" />
                    <BlogContent post={post} formatDate={formatDate} />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BlogDetail;