import Link from "next/link"
import { FC } from "react"
import Domain from "../svg/Domain"
import Category from "../svg/Category"


interface ValuedClientsProps {
    year: string
    nameCompany: string
    link: string
    domain: string
    category: string
    title: string
    text: string
    className?: string
}

const ValuedClients:FC<ValuedClientsProps> = ({ year, nameCompany, link, domain, category, title, text, className }) => {
    return (
        <li className={`flex flex-col gap-5 border border-grey15 rounded-2xl shadow-[0_0_20px_0_theme(colors.grey15)] p-6 h-full ${className}`} >
            <div className="flex gap-2.5 px-5 py-3.5 justify-between items-center">
                <div>
                    <p className="text-lg">Since {year}</p>
                    <p className="text-[30px] font-semibold">{nameCompany}</p>
                </div>
                <Link href={link} target="_blank" className="px-5 py-2.5 text-center flex items-center h-full w-fit bg-grey15 rounded-2xl border border-grey30 cursor-pointer">Visit Website</Link>
            </div>
            <div className="flex gap-2.5 px-5 py-3.5 justify-between items-center">
                <div className="">
                    <p className="flex items-center text-sm gap-1.5"><Domain />Domain</p>
                    <p className="text-[20px]">{domain}</p>
                </div>
                <div className="border-x border-grey15 h-full"></div>
                <div className="">
                    <p className="flex items-center text-sm gap-1.5"><Category />Category</p>
                    <p className="text-[20px]">{category}</p>
                </div>
            </div>
            <div className="p-[30px] border border-grey15 rounded-2xl">
                <h3 className="mb-3.5 text-[20px] font-semibold">{title}</h3>
                <p className="mb-5 text-[16px]">{text}</p>
            </div>
        </li>
    )
}

export default ValuedClients