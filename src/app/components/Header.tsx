"use client"

import Link from "next/link"
import Cross from "../svg/cross"
import Image from "next/image"
import { Logo } from "../listImage/listImage"
import { useLinksDesktop, useLinksMobile } from "../hook/useLinks"
import { useState } from "react"
import Menu from "../svg/menu"

const Header = () => {
    const [open, setOpen] = useState(false)
    const [closeBanner, setCloseBanner] = useState(false)
    
    const desktopLinks = useLinksDesktop().links
    const mobileLinks = useLinksMobile().links

    return (
        <header className="bg-grey10">
            <div className={`grid grid-cols-12 bg-abstractDesign bg-no-repeat bg-cover ${closeBanner && "hidden"}`}>
                <div className="flex container py-[18px] col-span-10 sm:col-span-9 sm:col-start-3 justify-center text-[12px] md:text-lg gap-2.5 ">
                    <p className="whitespace-nowrap">✨Discover Your Dream Property with Estatein</p>
                    <Link className="border-b whitespace-nowrap cursor-pointer 
                        hover:text-purple60 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple60 focus:ring-opacity-50" href="#">Learn More</Link>
                </div>
                <button onClick={() => setCloseBanner(true)} type="button" className="ml-4 sm:ml-0 sm:col-start-12 sm:col-span-1 p-2.5 my-auto w-fit h-fit rounded-full bg-white10 cursor-pointer
                    hover:bg-white10/80 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white10 focus:ring-opacity-50"><Cross /></button>
            </div>
            <div className="grid grid-cols-12 items-center py-[26px]">
                <div className="flex col-start-2 col-span-2">
                    <Link href="/" className="cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple60 focus:ring-opacity-50">
                        <Image src={Logo.src} alt="logo" width={160} height={48} />
                    </Link>
                </div>
                {/* Desktop */}
                <ul className="col-start-5 col-span-4 justify-center hidden lg:flex">
                    {desktopLinks.map((link) => (
                        <li key={link.name} className={link.className}>
                            <Link href={link?.href || "#"} 
                                className="cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95 ">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="justify-end col-start-11 2xl:col-start-10 hidden lg:flex">
                    <Link href={mobileLinks[4]?.href || "#"} className="px-[24px] py-[14px] bg-grey08 rounded-2xl border border-grey15 whitespace-nowrap
                        hover:bg-grey08/80 transition-all duration-300 active:scale-95">Contact Us</Link>
                </div>

                {/* Mobile */}
                <div className="relative col-start-12 col-span-2 flex items-center justify-center lg:hidden">
                    <button 
                        onClick={() => setOpen(!open)} 
                        type="button"
                        className="w-fit h-fit mx-auto cursor-pointer"
                    >
                        <Menu />
                    </button>
                    
                    {open && (
                        <ul className="absolute top-8 right-0 w-[200px] bg-grey15 rounded-2xl border border-grey15 flex flex-col z-60">
                        {mobileLinks.map((link) => (
                            <li key={link.name} className={link.className}>
                                <Link onClick={() => setOpen(false)} className="absolute top-0 left-0 w-full h-full" href={link?.href || "#"}>{link.name}</Link> 
                            </li>
                        ))}
                        </ul>
                    )}
                    </div>
                
            </div>
        </header>
    )
}

export default Header