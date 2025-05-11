import Image from "next/image"
import { FC } from "react"
import { ClientsCardProps } from "../types/ClientsCardProps"


const ClientsCard:FC<ClientsCardProps> = ({ stars, title, text, img, name, job, className  }) => {
    return (
        <div className={`flex p-6 flex-col gap-5 bg-grey08 rounded-2xl border border-grey15 h-full ${className}`}>
            <div className="flex gap-2.5">
                {Array(stars).fill(0).map((_, index) => (
                    <span className="p-2.5 rounded-full bg-grey15 w-11 h-11" key={index}>⭐</span>
                ))}
            </div>
            <h3 className="text-2xl font-semibold flex-none">{title}</h3>
            <p className="mb-5 text-lg flex-1">{text}</p>
            <div className="flex items-center">
                <Image className="rounded-full w-[60px] h-[60px]" src={img} alt={title} width={60} height={60} />
                <div className="px-5 flex flex-col justify-between">
                    <h4 className="text-[20px] font-semibold flex-none">{name}</h4>
                    <p className="text-lg">{job}</p>
                </div>
            </div>
        </div>
    )
}

export default ClientsCard