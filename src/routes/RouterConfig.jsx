import { RouterPath } from "./RouterPath";
import { RouterLink } from "./RouterLink";

export const RouterConfig = [
    {
        path: RouterPath.home,
        element: <RouterLink.home />,
    },
    {
        path: RouterPath.about,
        element: <RouterLink.about />,
    },
    {
        path: RouterPath.faq,
        element: <RouterLink.faq />,
    },
    {
        path: RouterPath.productDetail,
        element: <RouterLink.productDetail />,
    },
];
