// filepath: d:\reactJS\igenia-company-profile\src\feature-module\home\HomeLayout.jsx
import Navbar from "../../components/Navbar";
import MainContent from "./partials/MainContent";
import Services from "./partials/Services";
import Tech from "./partials/Tech";
import ScrollToTop from "../../components/ScrollToTop";
import React from "react";
import Footer from "../../components/Footer";
import Product from "../home/partials/Product";
import Blog from "../home/partials/Blog";
import Client from "../home/partials/Client";
import Contact from "../home/partials/Contact";

export default function HomeLayout() {
    return (
        <>
            <Navbar />
            <MainContent />

            {/* PURPLE BACKGROUND SECTION: Product */}
            <div className="bg-gradient-to-br from-[#2E073F] to-[#471166] relative overflow-hidden">
                <Product />
            </div>

            {/* WHITE BACKGROUND SECTION: Services */}
            <div className="bg-white relative overflow-hidden">
                <Services />
            </div>

            {/* PURPLE BACKGROUND SECTION: Blog */}
            <div className="bg-gradient-to-br from-[#2E073F] to-[#471166] relative overflow-hidden">
                <Blog />
            </div>

            {/* WHITE BACKGROUND SECTION: Client */}
            <div className="bg-white relative overflow-hidden">
                <Client />
            </div>

            {/* PURPLE BACKGROUND SECTION: Tech */}
            <div className="bg-gradient-to-br from-[#2E073F] to-[#471166] relative overflow-hidden">
                <Contact />
            </div>

            {/* WHITE BACKGROUND SECTION: Contact */}
            <div className="bg-white relative overflow-hidden">
                <Footer />
            </div>

            <ScrollToTop />
        </>
    );
}
