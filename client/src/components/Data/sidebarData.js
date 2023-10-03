import CottageIcon from '@mui/icons-material/CottageOutlined';
import AdUnitsIcon from '@mui/icons-material/AdUnitsOutlined';
import CategoryIcon from '@mui/icons-material/CategoryOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMallOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOnOutlined';

export const sidebarData = [
    {
        title: "Home",
        icon: <CottageIcon/>,
        link: "/admin"
    },
    {
        title: "Product",
        icon: <AdUnitsIcon/>,
        link: "/product"
    },
    {
        title: "Category",
        icon: <CategoryIcon/>,
        link: "/category"
    },
    {
        title: "Order",
        icon: <LocalMallIcon/>,
        link: "/orders"
    },
    {
        title: "Sales",
        icon: <MonetizationOnIcon/>,
        link: "/sales"
    },
]
