import { FC } from "react";
import Arrow2 from "../svg/arrow2";
import Image from "next/image";
import Link from "next/link";

interface CardInfoProps {
    img: string;
    text: string;
    className?: string;
    link?: string | {
        instagram?: string;
        linkedin?: string;
        facebook?: string;
        mail?: string;
        tel?: string;
        location?: string;
    };
}


const CardInfo:FC<CardInfoProps> = ({ img, text, className, link }) => {
    return (
        <li className={`relative flex flex-col py-10 justify-center items-center gap-5 bg-grey08 rounded-2xl border border-grey15 ${className} `}>
            <span className="absolute top-5 right-5"><Arrow2 /></span>
            <Image src={img} alt={text} width={82} height={82} />
            {link ? (
                <div className="flex flex-wrap gap-2.5 justify-center">
                    {typeof link === 'string' ? (
                        <Link href={link} className="text-[14px] lg:text-[20px] text-center font-semibold">{text}</Link>
                    ) : (
                        <>
                            {link.instagram && <Link href={link.instagram} className="text-[14px] lg:text-[20px] text-center font-semibold">Instagram</Link>}
                            {link.linkedin && <Link href={link.linkedin} className="text-[14px] lg:text-[20px] text-center font-semibold">Linkedin</Link>}
                            {link.facebook && <Link href={link.facebook} className="text-[14px] lg:text-[20px] text-center font-semibold">Facebook</Link>}
                            {link.mail && <Link href={link.mail} className="text-[14px] lg:text-[20px] text-center font-semibold">Mail</Link>}
                            {link.tel && <Link href={link.tel} className="text-[14px] lg:text-[20px] text-center font-semibold">Tel</Link>}
                            {link.location && <Link href={link.location} className="text-[14px] lg:text-[20px] text-center font-semibold">Location</Link>}
                        </>
                    )}
                </div>
            ) : (
                <p className="text-[14px] lg:text-[20px] text-center font-semibold">{text}</p>
            )}
        </li>
    )
}

export default CardInfo