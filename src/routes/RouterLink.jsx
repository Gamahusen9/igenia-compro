import FaqLayout from "../feature-module/faq/FaqLayout";
import HomeLayout from "../feature-module/home/HomeLayout";
import ProductLayout from "../feature-module/product/ProductLayout";
import AboutLayout from "../feature-module/about/AboutLayout";
import BlogList from "../feature-module/blog/BlogList";
import BlogDetail from "../feature-module/blog/BlogDetail";

export const RouterLink = {
    home: HomeLayout,
    faq: FaqLayout,
    about: AboutLayout,
    blog: BlogList,
    blogDetail: BlogDetail,
    productDetail: ProductLayout,
};
