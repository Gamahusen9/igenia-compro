import { RouterPath } from "./RouterPath";
import { RouterLink } from "./RouterLink";

export const RouterConfig = [
    {
        name: 'home',
        path: RouterPath.home,
        element: <RouterLink.home />,
        title: 'Beranda',
    },
    {
        name: 'about',
        path: RouterPath.about,
        element: <RouterLink.about />,
        title: 'Tentang Kami',
    },
    {
        name: 'faq',
        path: RouterPath.faq,
        element: <RouterLink.faq />,
        title: 'FAQ',
    },
    {
        name: 'blog',
        path: RouterPath.blog,
        element: <RouterLink.blog />,
        title: 'Blog',
    },
    {
        name: 'blog',
        path: RouterPath.blogDetail,
        element: <RouterLink.blogDetail />,
        title: 'Blog Detail',
    },
    {
        name: 'productDetail',
        path: RouterPath.productDetail,
        element: <RouterLink.productDetail />,
        title: 'Detail Produk',
    },
    {
        name: 'contactUs',
        path: RouterPath.contactUs,
        element: <RouterLink.contactUs />,
        title: 'Hubungi Kami',
    },
];
