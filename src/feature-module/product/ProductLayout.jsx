import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetail from './ProductDetail';
import ScrollToTop from '../../components/ScrollToTop';

const ProductLayout = () => {
    const { productId } = useParams();

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-br from-[#2E073F] to-[#471166] min-h-screen">
                <ProductDetail productId={productId} />
            </div>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default ProductLayout;