import Link from "next/link";
import ServiceValues from "../components/ServiceValues";
import { CardInfoHome, Effortless, Unlock } from "../listImage/listImage";
import CardInfo from "../ui/cardInfo";
import ServicesCard from "../ui/servicesCard";
import Stars from "../ui/stars";
import StartYour from "../components/StartYour";

const Services = () => {
    return (
        <main className="flex flex-col items-center justify-between bg-grey08/70">
            <section className="w-full relative">
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-r from-grey15 to-grey15/50 -z-10"></div>
                <div className="grid grid-cols-12 px-4 py-[50px] relative">
                    <div className="flex flex-col mb-10 lg:mb-0 lg:mx-0 lg:pr-[80px] col-start-1 col-span-12 row-start-1 lg:row-start-1 lg:col-start-2 lg:col-span-5">
                        <h1 className="text-4xl font-bold mb-2.5">Elevate Your Real Estate Experience</h1>
                        <p className="text-lg">
                            Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.
                        </p>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-12 px-4 mb-[60px] fit">
                <ul className="grid grid-cols-2 p-2.5 lg:grid-cols-4 col-span-12 gap-5 border border-grey15">
                    {CardInfoHome.map((card) => (
                        <CardInfo key={card.text} img={card.image.src} text={card.text} />
                    ))}
                </ul>
            </section>
            <section className="container mx-auto mb-[60px] grid grid-cols-12 px-4">
                <ServicesCard icon1={Unlock[0].image.src} icon2={Unlock[1].image.src} icon3={Unlock[2].image.src} icon4={Unlock[3].image.src} 
                    title="Unlock Property Value" description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is."
                    header1="Valuation Mastery" header2="Strategic Marketing" header3="Negotiation Wizardry" header4="Closing Success"
                    text1="Discover the true worth of your property with our expert valuation services." text2="Selling a property requires more than just a listing; it demands a strategic marketing."
                    text3="Negotiating the best deal is an art, and our negotiation experts are masters of it." 
                    text4="A successful sale is not complete until the closing. We guide you through the intricate closing process."
                    banerTitle="Unlock the Value of Your Property Today" 
                    link="#"
                    banerText="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
                    />
            </section>
            <section id="Property Management" className="container mx-auto mb-[60px] grid grid-cols-12 px-4">
                <ServicesCard icon1={Effortless[0].image.src} icon2={Effortless[1].image.src} icon3={Effortless[2].image.src} icon4={Effortless[3].image.src} 
                    title="Effortless Property Management" description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, 
                        offering comprehensive solutions tailored to your needs. 
                        Explore the categories below to see how we can make property management effortless for you"
                    header1="Tenant Harmony" header2="Maintenance Ease" header3="Financial Peace of Mind" header4="Legal Guardian"
                    text1="Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies." text2="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
                    text3="Managing property finances can be complex. Our financial experts take care of rent collection" 
                    text4="Stay compliant with property laws and regulations effortlessly."
                    banerTitle="Experience Effortless Property Management" 
                    link="#"
                    banerText="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
                    />
            </section>
            <section className="container mx-auto mb-[60px] grid grid-cols-12 px-4">
                <p className="mb-4 col-span-12"><Stars /></p>
                <div className="grid grid-cols-12 col-span-12 gap-4">
                    <div className="col-span-12 lg:col-span-4">
                        <h2 className="text-[20px] 2xl:text-[48px] font-bold mb-4">Smart Investments, Informed Decisions</h2>
                        <p className="mb-[50px]">{`Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to 
                            make smart investments and informed decisions.`}</p>
                        <div className="p-6 bg-abstractDesign2 bg-grey10 border border-grey15 rounded-lg">
                            <div className="grid grid-cols-12 gap-4">
                                <h3 className="text-[20px] font-bold mb-4 col-span-12 my-auto">Unlock Your Investment Potential</h3>
                                <p className="col-span-12">Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                                <Link href="#" className="bg-grey08 text-center my-auto px-4 py-2 rounded-lg col-span-12">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-4 h-full">
                        <ServiceValues />
                    </div>
                </div>
            </section>
            <section className="relative  px-[24px] py-[50px] w-full">
                {/* Левый фоновый элемент */}
                <div className="absolute top-32 left-0 w-full -translate-y-1/2 bg-contain h-full bg-abstractDesignLeft bg-no-repeat -z-10"></div>
                    
                {/* Правый фоновый элемент (исправленный) */}
                <div className="absolute bottom-0 right-0 w-full md:w-[20%] translate-y-1/2 md:translate-y-0 md:translate-x-0 bg-contain h-full bg-abstractDesignRight bg-no-repeat -z-10"></div>
                <StartYour />
            </section> 
        </main>
    )
}

export default Services;
