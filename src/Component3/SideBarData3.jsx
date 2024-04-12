import React from 'react';
import { IoMdHome } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { FcRules } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { GrOptimize } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";

export const SidebarData3 = [
    {
        title: "Home",
        icon: <IoMdHome />,
        link: "/home"
    },
    {
        title: "Log book",
        icon: <FaBook />,
        link: "/log book"
    },
    {
        title: "Worklist",
        icon: <LuClipboardList />,
        link: "/worklist"
    },
    {
        title: "Document",
        icon: <IoDocumentTextOutline />,
        link: "/document"
    },
    {
        title: "Suppliers/vendors",
        icon: <BsPeople />,
        link: "/suppliers/vendors"
    },
    {
        title: "Rules",
        icon: <FcRules />,
        link: "/rules"
    },
    {
        title: "Board",
        icon: <FcBusinessman />,
        link: "/board"
    },
    {
        title: "Productivity",
        icon: <GrOptimize />,
        link: "/productivity"
    },
    {
        title: "Setting",
        icon: <IoMdSettings />,
        link: "/setting"
    },
    {
        title: "Logout",
        icon: <RiLogoutBoxRLine />,
        link: "/logout"
    }
];
