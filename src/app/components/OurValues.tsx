import Image from "next/image"
import { OurValuesImage } from "../listImage/listImage"



const OurValues = () => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 border border-grey15 rounded-2xl shadow-[0_0_20px_0_theme(colors.grey15)] p-6">
            <li className="flex flex-col gap-5 sm:border-r-2 border-grey15">
                <div className="flex items-center gap-3">
                    <Image src={OurValuesImage[0].image.src} alt="Trust" width={52} height={52} />
                    <p>Trust</p>
                </div>
                <p>Trust is the cornerstone of every successful real estate transaction.</p>
            </li>
            <div className="sm:hidden my-5 border-2 border-grey15"></div>
            <li className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                    <Image src={OurValuesImage[1].image.src} alt="Excellence" width={52} height={52} />
                    <p>Excellence</p>
                </div>
                <p>We set the bar high for ourselves. From the properties we list to the services we provide.</p>
            </li>
            <div className="my-5 border-t-2 sm:col-span-2 border-grey15"></div>
            <li className="flex flex-col gap-5 sm:border-r-2 border-grey15">
                <div className="flex items-center gap-3">
                    <Image src={OurValuesImage[2].image.src} alt="Client-Centric" width={52} height={52} />
                    <p>Client-Centric</p>
                </div>
                <p>Your dreams and needs are at the center of our universe. We listen, understand.</p>
            </li>
            <div className="sm:hidden my-5 border-2 border-grey15"></div>
            <li className="flex flex-col gap-5">
                <div className="flex items-center gap-3"> 
                    <Image src={OurValuesImage[0].image.src} alt="Our Commitment" width={52} height={52} />
                    <p>Our Commitment</p>
                </div>
                <p>We are dedicated to providing you with the highest level of service, professionalism</p>
            </li>
            
        </ul>
    )
}

export default OurValues