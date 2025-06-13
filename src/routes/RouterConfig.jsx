import { RouterPath } from "./RouterPath";
import { RouterLink } from "./RouterLink";

export const RouterConfig = [
    {
        name: 'home',
        path: RouterPath.home,
        element: <RouterLink.home />,
    },
    {
        name: 'about',
        path: RouterPath.about,
        element: <RouterLink.about />,
    },
    {
        name: 'faq',
        path: RouterPath.faq,
        element: <RouterLink.faq />,
    },
    {
        name: 'blog',
        path: RouterPath.blog,
        element: <RouterLink.blog />,
    },
    {
        name: 'product',
        path: RouterPath.blogDetail,
        element: <RouterLink.blogDetail />,
    },
    {
        name: 'productDetail',
        path: RouterPath.productDetail,
        element: <RouterLink.productDetail />,
    },
    {
        name: 'contactUs',
        path: RouterPath.contactUs,
        element: <RouterLink.contactUs />,
    },
];
