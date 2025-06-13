import React from "react";

const BlogContent = ({ post }) => {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 p-8 md:p-12">
            <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />
            <div
                className="prose prose-invert max-w-none text-lg leading-relaxed"
                dangerouslySetInnerHTML={{
                    __html: post.content.replace(/blog-title/g, 'text-3xl font-bold mb-6 text-purple-300')
                        .replace(/blog-subtitle/g, 'text-2xl font-semibold mb-4 text-purple-300 mt-8')
                        .replace(/blog-paragraph/g, 'text-gray-200 mb-6')
                        .replace(/blog-list/g, 'list-disc pl-6 mb-8')
                        .replace(/blog-list-item/g, 'mb-3 text-gray-200')
                        .replace(/blog-highlight/g, 'bg-purple-900/20 p-6 rounded-lg my-8')
                        .replace(/blog-highlight-title/g, 'text-xl font-semibold mb-2 text-purple-300')
                        .replace(/blog-highlight-text/g, 'text-gray-200')
                        .replace(/blog-figure/g, 'my-8')
                        .replace(/blog-image/g, 'rounded-lg w-full')
                        .replace(/blog-caption/g, 'text-center text-sm text-gray-400 mt-2')
                }}
            />
        </div>
    );
};


export default BlogContent;
