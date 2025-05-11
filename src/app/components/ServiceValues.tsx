import Image from "next/image"
import { Unlock } from "../listImage/listImage"



const ServiceValues = () => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 col-span-12 gap-5 border border-grey15 rounded-2xl shadow-[0_0_20px_0_theme(colors.grey15)] p-6">
            <li className="flex flex-col gap-5 sm:border-r-2 border-grey15">
                <div className="flex items-center gap-3">
                    <Image src={Unlock[0].image.src} alt="Trust" width={52} height={52} />
                    <p>Market Insight</p>
                </div>
                <p>Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions</p>
            </li>
            <div className="sm:hidden my-5 border-2 border-grey15"></div>
            <li className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                    <Image src={Unlock[1].image.src} alt="Excellence" width={52} height={52} />
                    <p>ROI Assessment</p>
                </div>
                <p>Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments</p>
            </li>
            <div className="my-5 border-t-2 sm:col-span-2 border-grey15"></div>
            <li className="flex flex-col gap-5 sm:border-r-2 border-grey15">
                <div className="flex items-center gap-3">
                    <Image src={Unlock[2].image.src} alt="Client-Centric" width={52} height={52} />
                    <p>Customized Strategies</p>
                </div>
                <p>Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs</p>
            </li>
            <div className="sm:hidden my-5 border-2 border-grey15"></div>
            <li className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                    <Image src={Unlock[3].image.src} alt="Our Commitment" width={52} height={52} />
                    <p>Diversification Mastery</p>
                </div>
                <p>Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations</p>
            </li>
            
        </ul>
    )
}

export default ServiceValues;