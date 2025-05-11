import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import Telegram2 from "../svg/telegram2"
import Twitter from "../svg/twitter"


interface MeetTeamProps {
    image: string
    linkTwitter: string
    linkTelegram: string
    name: string
    job: string
    className?: string
}

const MeetTeam:FC<MeetTeamProps> = ({ image, linkTwitter, linkTelegram, name, job, className }) => {
    return (
        <li className={`flex p-5 flex-col col-span-12 lg:col-span-3 items-center  bg-grey08 rounded-2xl border border-grey15 ${className} `}>
            <div className="relative mb-10 w-full">
                <Image src={image} alt={name} width={318} height={269} className="w-full rounded-[30px]"  />
                <Link className="absolute px-5 py-2.5 bg-purple60 rounded-full -bottom-4 right-1/2 translate-x-1/2" href={linkTwitter} target="_blank"><Twitter /></Link>
            </div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="mb-5 text-sm flex-none">{job}</p>
                
            <div className="flex px-5 py-2.5 justify-between items-center bg-grey15 rounded-full w-full">
                <p>Say Hello 👋</p>
                <Link className="p-3.5 bg-purple60 rounded-full" href={linkTelegram} target="_blank"><Telegram2 /></Link>
            </div>
        </li>
    )
}

export default MeetTeam