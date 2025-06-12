import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ post, hoveredCard, setHoveredCard, formatDate, cardVariants, itemVariants }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="relative"
            variants={itemVariants}
        >
            <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden h-full flex flex-col border border-purple-500/20 relative cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard(post.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => navigate(`/blog/${post.id}`)}
            >
                {/* Image Section */}
                <div className="relative w-full h-48 overflow-hidden group">
                    <img
                        src={post.image}
                        alt={post.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${hoveredCard === post.id ? 'scale-110' : 'scale-100'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <span className="absolute bottom-3 left-3 text-xs font-medium text-white bg-[#AD49E1]/80 px-2 py-1 rounded-full">
                        {post.category}
                    </span>
                    <AnimatePresence>
                        {hoveredCard === post.id && (
                            <motion.div
                                className="absolute inset-0 bg-[#AD49E1]/30 flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.span
                                    className="bg-white text-[#AD49E1] font-medium py-2 px-4 rounded-md"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Baca Selengkapnya
                                </motion.span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow relative z-10">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5">
                        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-purple-500/30"></div>
                        <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-purple-700/30"></div>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-semibold text-[#AD49E1] mb-2 line-clamp-2">
                            {post.title}
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                            {post.excerpt}
                        </p>
                    </div>
                    <div className="mt-auto relative z-10">
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                            <span>{post.author}</span>
                            <span>{formatDate(post.date)}</span>
                        </div>
                    </div>
                    <motion.div
                        className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full opacity-30"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default BlogCard;
