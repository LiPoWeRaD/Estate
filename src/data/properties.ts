import Villa11Image from "@/assets/images/Hotel/villa1/1.jpg";
import Villa12Image from "@/assets/images/Hotel/villa1/2.jpg";
import Villa13Image from "@/assets/images/Hotel/villa1/3.jpg";
import Villa14Image from "@/assets/images/Hotel/villa1/4.jpg";
import Villa15Image from "@/assets/images/Hotel/villa1/5.jpg";
import Villa16Image from "@/assets/images/Hotel/villa1/6.jpg";
import Villa17Image from "@/assets/images/Hotel/villa1/7.jpg";
import Villa18Image from "@/assets/images/Hotel/villa1/8.jpg";
import Villa19Image from "@/assets/images/Hotel/villa1/9.jpg";

import Villa21Image from "@/assets/images/Hotel/villa2/1.jpg";
import Villa22Image from "@/assets/images/Hotel/villa2/2.jpg";
import Villa23Image from "@/assets/images/Hotel/villa2/3.jpg";
import Villa24Image from "@/assets/images/Hotel/villa2/4.jpg";
import Villa25Image from "@/assets/images/Hotel/villa2/5.jpg";
import Villa26Image from "@/assets/images/Hotel/villa2/6.jpg";
import Villa27Image from "@/assets/images/Hotel/villa2/7.jpg";
import Villa28Image from "@/assets/images/Hotel/villa2/8.jpg";
import Villa29Image from "@/assets/images/Hotel/villa2/9.jpg";

import Villa31Image from "@/assets/images/Hotel/villa3/1.jpg";
import Villa32Image from "@/assets/images/Hotel/villa3/2.jpg";
import Villa33Image from "@/assets/images/Hotel/villa3/3.jpg";
import Villa34Image from "@/assets/images/Hotel/villa3/4.jpg";
import Villa35Image from "@/assets/images/Hotel/villa3/5.jpg";
import Villa36Image from "@/assets/images/Hotel/villa3/6.jpg";
import Villa37Image from "@/assets/images/Hotel/villa3/7.jpg";
import Villa38Image from "@/assets/images/Hotel/villa3/8.jpg";
import Villa39Image from "@/assets/images/Hotel/villa3/9.jpg";

import Villa41Image from "@/assets/images/Hotel/villa4/1.jpg";
import Villa42Image from "@/assets/images/Hotel/villa4/2.jpg";
import Villa43Image from "@/assets/images/Hotel/villa4/3.jpg";
import Villa44Image from "@/assets/images/Hotel/villa4/4.jpg";
import Villa45Image from "@/assets/images/Hotel/villa4/5.jpg";
import Villa46Image from "@/assets/images/Hotel/villa4/6.jpg";
import Villa47Image from "@/assets/images/Hotel/villa4/7.jpg";
import Villa48Image from "@/assets/images/Hotel/villa4/8.jpg";
import Villa49Image from "@/assets/images/Hotel/villa4/9.jpg";


export interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    images: string[];
    keyFeatures: string[];
}

export const properties: Property[] = [
    {
        id: "1",
        title: "Seaside Serenity Villa",
        description: "Discover your own piece of paradise with the Seaside Serenity Villa. With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
        price: 1250000,
        location: "Malibu, California",
        bedrooms: 4,
        bathrooms: 3,
        area: 2500,
        images: [
            Villa11Image.src,
            Villa12Image.src,
            Villa13Image.src,
            Villa14Image.src,
            Villa15Image.src,
            Villa16Image.src,
            Villa17Image.src,
            Villa18Image.src,
            Villa19Image.src,
        ],
        keyFeatures: [
            "Expansive oceanfront terrace for outdoor entertaining",
            "Gourmet kitchen with top-of-the-line appliances",
            "Private beach access for morning strolls and sunset views",
            "Master suite with a spa-inspired bathroom and ocean-facing balcony",
            "Private garage and ample storage space"
        ]
    },
    {
        id: "2",
        title: "Modern Villa by the Sea",
        description: "Discover the ultimate in coastal living with the Modern Villa by the Sea. This property offers a spacious floor plan, breathtaking ocean views, and a private beach access for a truly luxurious experience.",
        price: 950000,
        location: "Los Angeles, California",
        bedrooms: 5,
        bathrooms: 4,
        area: 350,
        images: [
            Villa21Image.src,
            Villa22Image.src,
            Villa23Image.src,
            Villa24Image.src,
            Villa25Image.src,
            Villa26Image.src,
            Villa27Image.src,
            Villa28Image.src,
            Villa29Image.src,
        ],
        keyFeatures: [
            "Panoramic windows with ocean views",
            "Infinity-edge pool with heating",
            "Smart home with modern security systems",
            "Spa zone with sauna and jacuzzi",
            "Private landscaped area"
        ]
    },
    {
        id: "3",
        title: "Luxury Penthouse Suite",
        description: "Experience the pinnacle of luxury living with the Luxury Penthouse Suite. This property offers a spacious floor plan, breathtaking ocean views, and a private beach access for a truly luxurious experience.",
        price: 1500000,
        location: "Tenerife, Spain",
        bedrooms: 3,
        bathrooms: 2,
        area: 2000,
        images: [
            Villa31Image.src,
            Villa32Image.src,
            Villa33Image.src,
            Villa34Image.src,
            Villa35Image.src,
            Villa36Image.src,
            Villa37Image.src,
            Villa38Image.src,
            Villa39Image.src,
        ],
        keyFeatures: [
            "Panoramic windows with ocean views",
            "Infinity-edge pool with heating",
            "Smart home with modern security systems",
            "Spa zone with sauna and jacuzzi",
            "Private landscaped area"
        ]
    },
    {
        id: "4",
        title: "Crown Heights",
        description: "Experience the pinnacle of luxury living with the Luxury Penthouse Suite. This property offers a spacious floor plan, breathtaking ocean views, and a private beach access for a truly luxurious experience.",
        price: 1500000,
        location: "Los Angeles, California",
        bedrooms: 3,
        bathrooms: 2,
        area: 2000,
        images: [
            Villa41Image.src,
            Villa42Image.src,
            Villa43Image.src,
            Villa44Image.src,
            Villa45Image.src,
            Villa46Image.src,
            Villa47Image.src,
            Villa48Image.src,
            Villa49Image.src,
        ],
        keyFeatures: [
            "Panoramic windows with ocean views",
            "Infinity-edge pool with heating",
            "Smart home with modern security systems",
            "Spa zone with sauna and jacuzzi",
            "Private landscaped area"
        ]
    }
]; 