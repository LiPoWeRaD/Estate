import LocationSvg from "@/app/svg/location";

interface PropertyHeaderProps {
    title: string;
    location: string;
    price: number;
}

export default function PropertyHeader({ title, location, price }: PropertyHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div className="flex justify-between items-center gap-5">
                <h1 className="text-[20px] mb-4 md:mb-0 md:text-4xl font-bold">{title}</h1>
                <div className="p-2 rounded-lg text-[14px] md:text-base items-center border border-grey30 hidden md:flex">
                    <span className="mr-2"><LocationSvg /></span>
                    <span>{location}</span>
                </div>
            </div>
            <div className="flex md:flex-col justify-between text-2xl font-bold mb-8 md:mb-0">
                <div className="flex items-center text-sm md:text-base gap-2 md:hidden">
                    <LocationSvg />
                    <span>{location}</span>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-sm">Price</p>
                    <p>${price.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
} 