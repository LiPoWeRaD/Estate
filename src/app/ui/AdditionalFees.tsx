import { FC } from "react";


interface AdditionalFeesProps {
    title: string;
    price: string;
    description: string;
    className?: string;
    priceClassName?: string;
}

const AdditionalFees:FC<AdditionalFeesProps> = ({ title, price, description, className, priceClassName }) => {
    return (
        <div className="grid grid-cols-12 col-span-12 items-center border-b border-grey15 pb-4">
            <p className="text-lg font-bold col-span-12 mb-2.5">{title}</p>
            <div className="grid grid-cols-12 col-span-12 items-center">
                <p className={` ${priceClassName ? priceClassName : "col-span-3"}`}>{price}</p>
                {description && <p className={`text-sm border border-grey30 bg-grey15 p-2  ${className ? className : "col-span-9 rounded-lg"}`}>{description}</p>}
            </div>
        </div>
    )
}

export default AdditionalFees;

