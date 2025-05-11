"use client"

import EstateinsWorld from "../components/EstateinsWorld";
import StartYour from "../components/StartYour";
import { ContactInfo, OfficeLocation } from "../listImage/listImage";
import CardInfo from "../ui/cardInfo";
import OfficeLocations from "../ui/OfficeLocations";
import Stars from "../ui/stars";
import { useState } from "react";

const Contact = () => {
    const [inquiryType, setInquiryType] = useState("Select Inquiry Type");
    const [aboutUs, setAboutUs] = useState("Select How Did You Hear About Us");
    const [isChecked, setIsChecked] = useState(false);

    const [activeButton, setActiveButton] = useState("All");

    

    return (
        <main className="flex flex-col items-center justify-between">
            <section className="w-full relative">
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-r from-grey15 to-grey15/50 -z-10"></div>
                <div className="grid grid-cols-12 px-4 py-[50px] relative">
                    <div className="flex flex-col mb-10 lg:mb-0 lg:mx-0 lg:pr-[80px] col-start-1 col-span-12 row-start-1 lg:row-start-1 lg:col-start-2 lg:col-span-8">
                        <h1 className="text-4xl font-bold mb-2.5">Get in Touch with Estatein</h1>
                        <p className="text-lg">
                            {`Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have.`}
                        </p>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-12 px-4 mb-[60px] w-full">
                <ul className="grid grid-cols-2 p-2.5 lg:grid-cols-4 w-full col-span-12 gap-5 border border-grey15">
                    {ContactInfo.map((card) => (
                        <CardInfo key={card.text} img={card.image.src} text={card.text} link={card.links} />
                    ))}
                </ul>
            </section>
            <section id="contact" className="container mx-auto mb-[60px] grid grid-cols-12 px-4">
                <p className="mb-4 col-span-12"><Stars /></p>
                <div className="grid grid-cols-12 col-span-12 gap-4">
                    <div className="col-span-12">
                        <h2 className="text-[20px] 2xl:text-[48px] font-bold mb-4">{`Let's Connect`}</h2>
                        <p className="mb-[50px]">{`We're excited to connect with you and learn more about your real estate goals. 
                            Use the form below to get in touch with Estatein.`}</p>
                    </div>
                </div>
                <form className="col-span-12">
                    <div className="grid grid-cols-12 gap-4 border border-grey15 rounded-lg p-4">
                        <label className="flex flex-col gap-2 col-span-12 md:col-span-4" htmlFor="name">
                            <span className="">First Name</span>
                            <input className="w-full border border-grey15 bg-grey08 rounded-lg p-2" type="text" id="name" name="name" placeholder="Enter First Name" />
                        </label>
                        <label className="flex flex-col gap-2 col-span-12 md:col-span-4" htmlFor="lastname">
                            <span className="">Last Name</span>
                            <input className="w-full border border-grey15 bg-grey08 rounded-lg p-2" type="text" id="lastname" name="lastname" placeholder="Enter Last Name" />
                        </label>
                        <label className="flex flex-col gap-2 col-span-12 md:col-span-4" htmlFor="email">
                            <span className="">Email</span>
                            <input className="w-full border border-grey15 bg-grey08 rounded-lg p-2" type="email" id="email" name="email" placeholder="Enter your Email" />
                        </label>
                        <label className="flex flex-col gap-2 col-span-12 md:col-span-4" htmlFor="phone">
                            <span className="">Phone</span>
                            <input className="w-full border border-grey15 bg-grey08 rounded-lg p-2" type="tel" id="phone" name="phone" placeholder="Enter Phone Number" />
                        </label>
                        <label className="flex flex-col gap-2 col-span-12 md:col-span-4" htmlFor="InquiryType">
                            <span className="">Inquiry Type</span>
                            <select 
                                className={`w-full border border-grey15 bg-grey08 rounded-lg p-2 ${inquiryType === "Select Inquiry Type" ? "text-grey60" : "text-white"}`} 
                                id="InquiryType" 
                                name="InquiryType" 
                                value={inquiryType}
                                onChange={(e) => setInquiryType(e.target.value)}
                            >
                                <option value="Select Inquiry Type" disabled>Select Inquiry Type</option>
                                <option className="text-white" value="Inquiry">Inquiry</option>
                                <option className="text-white" value="Feedback">Feedback</option>
                                <option className="text-white" value="Support">Support</option>
                            </select>
                        </label>
                        <label className="flex flex-col gap-2 col-span-12 md:col-span-4" htmlFor="AboutUs">
                            <span className="">How Did You Hear About Us?</span>
                            <select 
                                className={`w-full border border-grey15 bg-grey08 rounded-lg p-2 ${aboutUs === "Select How Did You Hear About Us" ? "text-grey60" : "text-white"}`} 
                                id="AboutUs" 
                                name="AboutUs"
                                value={aboutUs}
                                onChange={(e) => setAboutUs(e.target.value)}
                            >
                                <option value="Select How Did You Hear About Us" disabled>Select</option>
                                <option className="text-white" value="Social Media">Social Media</option>
                                <option className="text-white" value="Search Engine">Search Engine</option>
                                <option className="text-white" value="Referral">Referral</option>
                                <option className="text-white" value="Other">Other</option>
                            </select>
                        </label>
                        <label className="flex flex-col gap-2 col-span-12" htmlFor="Message">
                            <span className="">Message</span>
                            <textarea className="w-full border border-grey15 bg-grey08 rounded-lg p-2" rows={5} id="Message" name="Message" placeholder="Enter your Message here.." />
                        </label>
                        <div className="col-span-12 flex items-center gap-2 md:col-span-6">
                            <div className="relative">
                                <input 
                                    type="checkbox" 
                                    id="terms" 
                                    name="terms" 
                                    className="peer hidden" 
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                />
                                <div 
                                    className="w-4 h-4 border-2 border-grey15 bg-grey15 cursor-pointer relative"
                                    onClick={() => setIsChecked(!isChecked)}
                                >
                                    {isChecked && (
                                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 text-base leading-none">✓</span>
                                    )}
                                </div>
                            </div>
                            <label htmlFor="terms" className="text-sm">I agree with <a href="#" className="text-primary">Terms of Use</a> and <a href="#" className="text-primary">Privacy Policy</a></label>
                        </div>
                        <button className="col-span-12 md:col-start-10 md:col-span-3 px-[24px] py-[14px] bg-purple60 rounded-2xl border border-grey15 whitespace-nowrap
                        hover:bg-purple60/80 transition-all duration-300 active:scale-95 cursor-pointer">Submit</button>
                    </div>
                </form>
            </section>
            <section id="offices" className="container mx-auto mb-[60px] grid grid-cols-12 px-4">
                <p className="mb-4 col-span-12"><Stars /></p>
                <div className="grid grid-cols-12 col-span-12 gap-4 mb-[80px] md:mb-[120px]">
                    <div className="col-span-12">
                        <h2 className="text-[20px] 2xl:text-[48px] font-bold mb-4">Discover Our Office Locations</h2>
                        <p className="mb-[50px]">{`Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, 
                            or simply drop by for a chat, we have offices conveniently located to serve your needs. 
                            Explore the categories below to find the Estatein office nearest to you`}</p>
                    </div>
                    <div className="grid grid-cols-3 col-span-12 lg:col-span-5 xl:col-span-4 2xl:col-span-3 gap-2 p-2.5 bg-grey08 border border-grey15 rounded-lg">
                        <button className={`w-full cursor-pointer rounded-lg border border-grey15 p-2 ${activeButton === "All" ? "bg-grey08" : "bg-grey10"}`} onClick={() => setActiveButton("All")}>
                            All
                        </button>
                        <button className={`w-full cursor-pointer rounded-lg border border-grey15 p-2 ${activeButton === "Regional" ? "bg-grey08" : "bg-grey10"}`} onClick={() => setActiveButton("Regional")}>
                            Regional
                        </button>
                        <button className={`w-full cursor-pointer rounded-lg border border-grey15 p-2 ${activeButton === "International" ? "bg-grey08" : "bg-grey10"}`} onClick={() => setActiveButton("International")}>
                            International
                        </button>
                    </div>
                    <div className="col-span-12 grid grid-cols-1 xl:grid-cols-2 gap-4">
                        {OfficeLocation.filter((office) => office.regional === activeButton || activeButton === "All").map((office) => (
                            <OfficeLocations key={office.Office} {...office} />
                        ))}
                    </div>
                </div>
                <EstateinsWorld />
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

export default Contact;
