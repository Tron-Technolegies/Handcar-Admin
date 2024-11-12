import { FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
import { TbLogs } from "react-icons/tb";

export const navItems = [
  { id: 2, icon: <FaUsers />, name: "Users", path: "/users" },
  { id: 3, icon: <AiFillProduct />, name: "Products", path: "/products" },
  { id: 4, icon: <MdCategory />, name: "Category", path: "/category" },
  { id: 5, icon: <MdBrandingWatermark />, name: "Brand", path: "/brand" },
  {
    id: 6,
    icon: <MdHomeRepairService />,
    name: "Service Providers",
    path: "/services",
  },
  {
    id: 7,
    icon: <MdOutlineSubscriptions />,
    name: "Subscriptions",
    path: "/subscriptions",
  },
  { id: 8, icon: <TbLogs />, name: "Logs", path: "/logs" },
  { id: 9, icon: <MdLocalOffer />, name: "Offers", path: "/offers" },
  { id: 10, icon: <BiSolidOffer />, name: "Promotions", path: "/promotions" },
];
