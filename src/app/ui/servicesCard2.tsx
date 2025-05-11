import { FC } from "react";
import Stars from "./stars";
import Image from "next/image";
import Link from "next/link";


interface ServicesCard2Props {
    title: string;
    description: string;
    icon1: string;
    icon2: string;
    icon3: string;
    icon4: string;
    header1: string;
    header2: string;
    header3: string;
    header4: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    banerTitle: string;
    link: string;
    banerText: string;
}

const ServicesCard2:FC<ServicesCard2Props> = ({ title, description, icon1, icon2, icon3, icon4, header1, header2, header3, header4, text1, text2, text3, text4, banerTitle, link, banerText }) => {
    return (
        <>
            <div className="grid grid-cols-12 col-span-12 gap-5">
                <p className="mb-4 col-span-12"><Stars /></p>
                <h2 className="text-3xl font-bold leading-tight mb-6 col-span-12">
                    {title}
                </h2>
                <p className="text-lg lg:text-xl mb-12 col-span-12">
                    {description}
                </p>
                <div className="grid grid-cols-12 p-6 border border-grey15 rounded-lg col-span-12 md:col-span-4">
                    <div className="flex items-center gap-2 col-span-12 mb-4">
                        <Image src={icon1} alt={header1} width={48} height={48} />
                        <h3 className="text-lg font-bold">{header1}</h3>
                    </div>
                    <p className="col-span-12">{text1}</p>
                </div>
                <div className="grid grid-cols-12 p-6 border border-grey15 rounded-lg col-span-12 md:col-span-4">
                    <div className="flex items-center gap-2 col-span-12 mb-4">
                        <Image src={icon2} alt={header2} width={48} height={48} />
                        <h3 className="text-lg font-bold">{header2}</h3>
                    </div>
                    <p className="col-span-12">{text2}</p>
                </div>
                <div className="grid grid-cols-12 p-6 border border-grey15 rounded-lg col-span-12 md:col-span-4">
                    <div className="flex items-center gap-2 col-span-12 mb-4">
                        <Image src={icon3} alt={header3} width={48} height={48} />
                        <h3 className="text-lg font-bold">{header3}</h3>
                    </div>
                    <p className="col-span-12">{text3}</p>
                </div>
                <div className="grid grid-cols-12 p-6 border border-grey15 rounded-lg col-span-12 md:col-span-4">
                    <div className="flex items-center gap-2 col-span-12 mb-4">
                        <Image src={icon4} alt={header4} width={48} height={48} />
                        <h3 className="text-lg font-bold">{header4}</h3>
                    </div>
                    <p className="col-span-12">{text4}</p>
                </div>
                <div className="grid grid-cols-12 col-span-12 p-6 bg-abstractDesign2 md:col-span-8 bg-grey10 border border-grey15 rounded-lg">
                    <div className="col-span-12 grid grid-cols-12 gap-4">
                        <h2 className="text-[20px] font-bold mb-4 col-span-12 my-auto md:col-span-8">{banerTitle}</h2>
                        <Link href={link} className="bg-grey08 text-center my-auto px-4 py-2 rounded-lg col-span-12 md:col-span-4">Learn More</Link>
                        <p className="col-span-12 md:col-span-12">{banerText}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesCard2;


