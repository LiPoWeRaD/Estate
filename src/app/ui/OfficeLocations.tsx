import Link from "next/link";
import { FC } from "react";
import Mail2 from "../svg/mail2";
import Phone from "../svg/phone";
import LocationSvg from "../svg/location";


export interface OfficeLocationsProps {
    Office: string;
    Location: string;
    description: string;
    mail: string;
    phone: string;
    location: string;
    locationLink: string;
}

const OfficeLocations:FC<OfficeLocationsProps> = ({ Office, Location, description, mail, phone, location, locationLink }) => {
    return (
        <div className="grid grid-cols-12 gap-4 p-6 md:p-10 bg-grey08 border border-grey15 rounded-lg">
            <h3 className="col-span-12 text-2xl font-bold">{Office}</h3>
            <p className="col-span-12 text-lg">{Location}</p>
            <p className="col-span-12 text-lg">{description}</p>
            <div className="col-span-12 flex flex-wrap items-center gap-2">
                <Link className="flex items-center gap-2 text-lg py-2.5 px-2.5 bg-grey15 border border-grey15 rounded-lg" href={`mailto:${mail}`}><Mail2 />{mail}</Link>
                <Link className="flex items-center gap-2 text-lg py-2.5 px-2.5 bg-grey15 border border-grey15 rounded-lg" href={`tel:${phone}`}><Phone />{phone}</Link>
                <Link className="flex items-center gap-2 text-lg py-2.5 px-2.5 bg-grey15 border border-grey15 rounded-lg" href={locationLink}><LocationSvg />{location}</Link>
            </div>
            <button className="col-span-12 bg-purple60 text-white px-4 py-2 rounded-md">Get Direction</button>            
            
        </div>
    )
}

export default OfficeLocations;
