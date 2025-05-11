"use client"

import { usePathname } from "next/navigation"



export const useLinksDesktop = () => {
    const pathname = usePathname();
    
    return {
        links: [
            {
                name: "Home",
                href: "/",
                className: "px-[24px] py-[14px] " + (pathname === "/" && "bg-grey08 rounded-2xl border border-grey15"),
            },
            {
                name: "About Us",
                href: "/about",
                className: "px-[24px] py-[14px] whitespace-nowrap " + (pathname === "/about" && "bg-grey08 rounded-2xl border border-grey15"),
            },
            {
                name: "Properties",
                href: "/properties",
                className: "px-[24px] py-[14px] " + (pathname === "/properties" && "bg-grey08 rounded-2xl border border-grey15"),
            },
            {
                name: "Services",
                href: "/services",
                className: "px-[24px] py-[14px] " + (pathname === "/services" && "bg-grey08 rounded-2xl border border-grey15"),
            }
        ]
    }
}

export const useLinksMobile = () => {
    const pathname = usePathname();
    
    return {
        links: [
            {
                name: "Home",
                href: "/",
                className: "relative w-full text-center py-[14px] " + (pathname === "/" && "bg-grey08 rounded-2xl border border-grey15"),
            },
            {
                name: "About Us",
                href: "/about",
                className: "relative w-full text-center px-[24px] py-[14px] whitespace-nowrap " + (pathname === "/about" && "bg-grey08 rounded-2xl border border-grey15"),
            },
            {
                name: "Properties",
                href: "/properties",
                className: "relative w-full text-center px-[24px] py-[14px] " + (pathname === "/properties" && "bg-grey08 rounded-2xl border border-grey15"),
            },
            {
                name: "Services",
                href: "/services",
                className: "relative w-full text-center px-[24px] py-[14px] " + (pathname === "/services" && "bg-grey08 rounded-2xl border border-grey15"),
            },
            {
                name: "Contact Us",
                href: "/contact",
                className: "relative w-full text-center px-[24px] py-[14px] " + (pathname === "/contact" && "bg-grey08 rounded-2xl border border-grey15"),
            }
        ]
    }
}

