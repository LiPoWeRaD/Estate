import BedRoom from "@/app/svg/bedRoom";
import BathRoom from "@/app/svg/bathRoom";
import Area from "@/app/svg/Area";
import Molniy from "@/app/svg/molniy";

interface PropertyFeaturesProps {
    description: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    keyFeatures: string[];
}

const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
};

export default function PropertyFeatures({ 
    description, 
    bedrooms, 
    bathrooms, 
    area, 
    keyFeatures 
}: PropertyFeaturesProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-gray-300">{description}</p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                    <div>
                        <p className="font-semibold flex items-center gap-2"><BedRoom /> Bedrooms</p>
                        <p className="text-xl">{formatNumber(bedrooms)}</p>
                    </div>
                    <div>
                        <p className="font-semibold flex items-center gap-2"><BathRoom /> Bathrooms</p>
                        <p className="text-xl">{formatNumber(bathrooms)}</p>
                    </div>
                    <div>
                        <p className="font-semibold flex items-center gap-2"><Area /> Area</p>
                        <p className="text-xl">{area} м²</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4">Key Features and Amenities</h2>
                <ul className="flex flex-col gap-[18px]">
                    {keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center border-l border-purple60 pl-4 py-2.5 bg-[linear-gradient(to_right,var(--grey10),var(--purple70))]">
                            <span className="mr-2"><Molniy /></span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 