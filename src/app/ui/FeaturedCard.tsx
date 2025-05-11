import Image from "next/image"
import { FC } from "react"
import { FeaturedCardProps } from "../types/FeaturedCardProps"
import BedRoom from "../svg/bedRoom"
import BathRoom from "../svg/bathRoom"
import Villa from "../svg/villa"
import Link from "next/link"




const FeaturedCard:FC<FeaturedCardProps> = ({ img, title, text, info1, info2, info3, price, className, id }) => {
    return (
        <div className={`flex p-6 flex-col gap-5 bg-grey08 rounded-2xl border border-grey15 h-full ${className}`}>
            <Image className="w-full rounded-[36px]" src={img} alt={title} width={300} height={300} />
            <div className="px-5 flex flex-col h-full">
                <h3 className="text-[18px] font-semibold flex-none">{title}</h3>
                <p className="mb-5 text-[14px] flex-1">{text}</p>
                <div className="mt-auto">
                    <ul className="flex mb-5 flex-wrap gap-2.5">
                        <li className="flex px-3.5 py-1.5 text-sm bg-grey15 rounded-full items-center gap-2.5"><BedRoom />{info1}</li>
                        <li className="flex px-3.5 py-1.5 text-sm bg-grey15 rounded-full items-center gap-2.5"><BathRoom />{info2}</li>
                        <li className="flex px-3.5 py-1.5 text-sm bg-grey15 rounded-full items-center gap-2.5"><Villa />{info3}</li>
                    </ul>
                    <div className="grid grid-cols-12">
                        <div className="flex flex-col col-start-1 col-span-2">
                            <p className="text-sm">Price</p>
                            <p className="text-lg font-semibold">{price}</p>
                        </div>
                        <Link href={`/details/${id}`} className="flex justify-end col-start-6 col-span-9 ">
                            <p className="px-[24px] py-[14px] text-sm bg-purple60 rounded-2xl cursor-pointer hover:bg-purple60/80 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple60 focus:ring-opacity-50">View Property Details</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard