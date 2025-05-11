import { properties } from "@/data/properties"
import ImageGallery from "@/app/components/ImageGallery"
import PropertyHeader from "@/app/components/PropertyHeader"
import PropertyFeatures from "@/app/components/PropertyFeatures"
import PricingSection from "@/app/components/PricingSection"
import Carousel from "@/app/ui/Carousel"
import { cardsFrequentlyAsked } from "@/app/page"
import StartYour from "@/app/components/StartYour"

interface PageProps {
    params: Promise<{
        id: string
    }>
}

// Генерируем статические пути для всех свойств
export async function generateStaticParams() {
    return properties.map((property) => ({
        id: property.id,
    }))
}

export default async function DetailsPage({ params }: PageProps) {
    const { id } = await params;
    const property = properties.find(p => p.id === id);

    if (!property) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Объект не найден</h1>
                    <p className="text-gray-400">Запрашиваемый объект недвижимости не существует</p>
                </div>
            </div>
        );
    }
    
    return (
        <main className="min-h-screen text-white">
            <section className="container mx-auto px-4 py-8">
                <PropertyHeader 
                    title={property.title}
                    location={property.location}
                    price={property.price}
                />

                <ImageGallery images={property.images} title={property.title} />

                <PropertyFeatures 
                    description={property.description}
                    bedrooms={property.bedrooms}
                    bathrooms={property.bathrooms}
                    area={property.area}
                    keyFeatures={property.keyFeatures}
                />
            </section>

            <PricingSection price={property.price} />

            <section className="grid grid-cols-12 container mx-auto px-4 py-8">
                <Carousel 
                    minHeight="300" 
                    title="Frequently Asked Questions" 
                    description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way." 
                    viewBtn="View All FAQ's" 
                    items={cardsFrequentlyAsked} 
                />
            </section>

            <section className="relative px-[24px] py-[50px] w-full">
                <div className="absolute top-32 left-0 w-full -translate-y-1/2 bg-contain h-full bg-abstractDesignLeft bg-no-repeat -z-10"></div>
                <div className="absolute bottom-0 right-0 w-full md:w-[20%] translate-y-1/2 md:translate-y-0 md:translate-x-0 bg-contain h-full bg-abstractDesignRight bg-no-repeat -z-10"></div>
                <StartYour />
            </section> 
        </main>
    )
}