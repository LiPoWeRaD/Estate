import Image from "next/image";
import { Estateins } from "../listImage/listImage";
import Stars from "../ui/stars";


const EstateinsWorld = () => {
    return (
        <div className="relative grid grid-cols-12 col-span-12 gap-4 p-6">
            <div className="absolute inset-0 bg-abstractDesign3 bg-cover bg-grey08  bg-no-repeat col-span-12 md:col-span-6"></div>
            <div className="col-span-12 grid grid-cols-12 gap-4">
                <div className="relative grid grid-cols-1 col-span-6 gap-4 ">
                    <Image src={Estateins[0].image.src} alt="Estateins" className="object-cover w-full h-full rounded-lg" width={300} height={300} />
                    <Image src={Estateins[1].image.src} alt="Estateins" className="object-cover w-full h-full rounded-lg" width={300} height={300} />
                </div>
                <div className="relative grid grid-cols-2 col-span-6 gap-4">
                    <Image src={Estateins[2].image.src} alt="Estateins" className="col-span-2 object-cover w-full rounded-lg" width={300} height={300} />
                    <Image src={Estateins[3].image.src} alt="Estateins" className="object-cover w-full rounded-lg" width={300} height={300} />
                    <Image src={Estateins[4].image.src} alt="Estateins" className="object-cover w-full rounded-lg" width={300} height={300} />
                </div>
                <div className="relative z-10 grid grid-cols-12 col-span-12 gap-4">
                    <div className="col-span-12 lg:col-span-6">
                        <p className="relative z-10 mb-4 col-span-12"><Stars /></p>
                        <h2 className="text-[20px] 2xl:text-[48px] font-bold mb-4">{`Explore Estatein's World`}</h2>
                        <p className="mb-[50px]">Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. 
                            Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.</p>
                    </div>
                    <Image src={Estateins[5].image.src} alt="Estateins" className="col-span-12 lg:col-span-6 object-cover w-full h-full rounded-lg" width={300} height={300} />
                </div>
            </div>
            
        </div>
    )
}

export default EstateinsWorld;
