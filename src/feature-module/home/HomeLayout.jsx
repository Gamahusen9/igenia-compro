import Navbar from "../../components/Navbar";
import MainContent from "./partials/MainContent";
import About from "./partials/About";
import Services from "./partials/Services";
import Tech from "./partials/Tech";
import ScrollToTop from "../../components/ScrollToTop";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import React from "react";
import Footer from "../../components/Footer";
import Product from "../home/partials/Product";
import Blog from "../home/partials/Blog";
import Client from "../home/partials/Client";
import Contact from "../home/partials/Contact";

export default function HomeLayout() {
    // Array of shapes for animations
    const floatingShapes = [
        {
            shape: "circle",
            size: 180,
            positionX: "10%",
            positionY: "15%",
            duration: 25,
            opacity: 0.08,
            color: "#AD49E1"
        },
        {
            shape: "blob",
            size: 250,
            positionX: "85%",
            positionY: "30%",
            duration: 30,
            opacity: 0.1,
            color: "#7A1CAC"
        },
        {
            shape: "triangle",
            size: 120,
            positionX: "25%",
            positionY: "55%",
            duration: 20,
            opacity: 0.07,
            color: "#AD49E1"
        },
        {
            shape: "square",
            size: 140,
            positionX: "75%",
            positionY: "70%",
            duration: 28,
            opacity: 0.09,
            color: "#7A1CAC"
        },
        {
            shape: "ring",
            size: 200,
            positionX: "50%",
            positionY: "45%",
            duration: 35,
            opacity: 0.06,
            color: "#AD49E1"
        },
        {
            shape: "star",
            size: 100,
            positionX: "15%",
            positionY: "85%",
            duration: 22,
            opacity: 0.08,
            color: "#7A1CAC"
        }
    ];

    // Function to render shape based on type
    const renderShape = (shape) => {
        switch (shape.shape) {
            case "circle":
                return (
                    <div
                        className="rounded-full blur-xl"
                        style={{
                            width: shape.size,
                            height: shape.size,
                            background: `${shape.color}`,
                            opacity: shape.opacity
                        }}
                    />
                );
            case "square":
                return (
                    <div
                        className="rounded-lg blur-xl"
                        style={{
                            width: shape.size,
                            height: shape.size,
                            background: `${shape.color}`,
                            opacity: shape.opacity,
                            transform: "rotate(15deg)"
                        }}
                    />
                );
            case "triangle":
                return (
                    <div
                        className="blur-xl"
                        style={{
                            width: 0,
                            height: 0,
                            opacity: shape.opacity,
                            borderLeft: `${shape.size / 2}px solid transparent`,
                            borderRight: `${shape.size / 2}px solid transparent`,
                            borderBottom: `${shape.size}px solid ${shape.color}`
                        }}
                    />
                );
            case "blob":
                return (
                    <div
                        className="blur-2xl"
                        style={{
                            width: shape.size,
                            height: shape.size * 0.85,
                            background: `${shape.color}`,
                            opacity: shape.opacity,
                            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
                        }}
                    />
                );
            case "ring":
                return (
                    <div
                        className="rounded-full blur-xl"
                        style={{
                            width: shape.size,
                            height: shape.size,
                            opacity: shape.opacity,
                            border: `20px solid ${shape.color}`,
                            background: "transparent"
                        }}
                    />
                );
            case "star":
                // Simplified star using transform
                return (
                    <div
                        className="blur-xl"
                        style={{
                            width: shape.size / 1.5,
                            height: shape.size / 1.5,
                            background: `${shape.color}`,
                            opacity: shape.opacity,
                            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                        }}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Navbar />
            <MainContent />
            {/* Wrapper with consistent background for About, Services and Tech sections */}
            <div className="bg-gradient-to-br from-[#2E073F] to-[#471166] relative overflow-hidden">
                {/* Common decorative elements for all wrapped sections */}
                <motion.div
                    className="absolute top-0 right-0 w-96 h-96 bg-[#7A1CAC]/10 rounded-full blur-3xl -z-0"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                ></motion.div>
                <motion.div
                    className="absolute bottom-0 left-0 w-96 h-96 bg-[#AD49E1]/10 rounded-full blur-3xl -z-0"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                ></motion.div>

                {/* Floating shapes with animations */}
                {floatingShapes.map((shape, index) => (
                    <motion.div
                        key={`shape-${index}`}
                        className="absolute z-0"
                        style={{
                            left: shape.positionX,
                            top: shape.positionY,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 20, 0],
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: shape.duration,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                            delay: index * 2
                        }}
                    >
                        {renderShape(shape)}
                    </motion.div>
                ))}

                {/* Subtle floating particles */}
                {[...Array(8)].map((_, index) => (
                    <motion.div
                        key={`particle-${index}`}
                        className="absolute rounded-full z-0"
                        style={{
                            width: Math.random() * 10 + 5,
                            height: Math.random() * 10 + 5,
                            backgroundColor: `rgba(${173 + Math.random() * 30}, ${73 + Math.random() * 20}, ${225 + Math.random() * 30}, ${Math.random() * 0.3 + 0.1})`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            opacity: [0.1, 0.4, 0.1]
                        }}
                        transition={{
                            duration: Math.random() * 20 + 15,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
                <Product />
                <Services />
                <Blog />
                <Client />
                <Tech />
                <Contact />
                <Footer />
            </div>
            <ScrollToTop />
        </>
    );
}