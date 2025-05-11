import { FC } from "react"
import { FrequentlyAskedProps } from "../types/FrequentlyAskedProps"
import Link from "next/link"


const FrequentlyAsked:FC<FrequentlyAskedProps> = ({ question, answer, link, className  }) => {
    return (
        <div className={`flex p-6 flex-col gap-5 bg-grey08 rounded-2xl border border-grey15 h-full ${className}`}>
            <h3 className="text-[20px] font-semibold flex-none">{question}</h3>
            <p className="mb-5 text-[16px] flex-1">{answer}</p>
            <Link href={link} className="px-[20px] py-[14px] text-center w-fit bg-grey15 rounded-2xl border border-grey30 cursor-pointer
                hover:bg-grey15/80 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-grey15 focus:ring-opacity-50">Read More</Link>
        </div>
    )
}

export default FrequentlyAsked