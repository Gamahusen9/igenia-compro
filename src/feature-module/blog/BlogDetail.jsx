import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../../core/data/list-blog";
import BlogContent from "./partials/BlogContent";
import NotFoundMessage from "./partials/NotFoundMessage";
import { formatDate } from "./partials/BlogUtils";
import ShareButton from "./partials/ShareButton";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackButton from "../../components/BackButton";

const BlogDetail = () => {
    const { blogSlug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.slug === blogSlug);

    if (!post) {
        return <NotFoundMessage onBack={() => navigate(-1)} />;
    }

    return (
        <>
            <Navbar />
            <section className="py-24 min-h-screen bg-gradient-to-b from-[#1A0425] via-[#2E073F] to-[#1A0425] text-white">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    <div className="mb-8">
                        <BackButton customLabel="Kembali" />
                    </div>

                    {/* Title, Author, Date and Share button outside card */}
                    <div className="text-center mb-10">
                        <span className="inline-block mb-4 text-sm font-medium text-white bg-[#AD49E1]/80 px-4 py-1.5 rounded-full">
                            {post.category}
                        </span>
                        <h1 className="text-5xl font-bold text-[#AD49E1] mb-6">{post.title}</h1>
                        <div className="flex items-center justify-center gap-6 text-gray-300">
                            <span className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                {formatDate(post.date)}
                            </span>
                            <ShareButton />
                        </div>
                    </div>

                    <BlogContent post={post} />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BlogDetail;