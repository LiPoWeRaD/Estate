import Image from "next/image"
import Link from "next/link"
import { Logo } from "../listImage/listImage"
import Mail from "../svg/mail"
import Telegram from "../svg/telegram"


const Footer = () => {
    return (
        <section className="container mx-auto grid grid-cols-12 items-center px-4 py-[26px]">
            <div className="grid grid-cols-12 col-span-12 lg:col-span-3">
                <Link className="flex mb-5 col-start-1 col-span-12" href="/"><Image src={Logo.src} alt="logo" width={160} height={48} /></Link>
                <form className="flex mb-[50px] сol-start-2 col-span-12  w-full" action="" >
                    <p className="flex px-5 py-3.5 items-center gap-2.5 w-full border border-grey15 rounded-2xl"><Mail className="w-[20px] h-[20px]" /><input className="outline-none w-full" type="email" placeholder="Enter your email" /><Telegram className="ml-auto w-6 h-6" /></p>
                </form>
            </div>
            <div className="grid grid-cols-12 col-span-12 lg:col-start-5 lg:col-span-9">
                <ul className="flex pb-5 flex-col col-span-4 lg:col-span-2 gap-2.5 border-b lg:border-b-0 border-grey15">
                    <p className="text-lg">Home</p>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_HOME}/#hero`}>Hero Section</Link> 
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_HOME}/#features`}>Features</Link>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_HOME}/#properties`}>Properties</Link>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_HOME}/#testimonials`}>Testimonials</Link>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_HOME}/#faq`}>FAQ`s</Link>
                </ul>
            <div className="px-5 lg:hidden col-span-1 col-start-6 border-l border-grey15"></div>
                <ul className="flex pb-5 flex-col gap-2.5 col-span-5 lg:col-span-2 lg:col-start-3 col-start-7 border-b lg:border-b-0 border-grey15">
                    <p className="text-lg">About Us</p>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_ABOUT_PATH}/#story`}>Our Story</Link>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_ABOUT_PATH}/#ourworks`}>Our Works</Link>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_ABOUT_PATH}/#howitworks`}>How It Works</Link>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_ABOUT_PATH}/#team`}>Our Team</Link>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_ABOUT_PATH}/#clients`}>Our Clients</Link>
                </ul>
            <div className="flex py-5 lg:py-0 flex-col lg:flex-row gap-2.5 col-span-4 justify-between lg:col-start-5 lg:col-span-3 border-b lg:border-b-0 border-grey15">
                <ul className="flex pb-5 flex-col lg:pb-0 gap-2.5 border-b lg:border-b-0 border-grey15">
                    <p className="text-lg">Properties</p>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_PROPERTIES_PATH}/#portfolio`}>Portfolio</Link>   
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_PROPERTIES_PATH}/#categories`}>Categories</Link> 
                </ul>
                <ul className="flex flex-col gap-2.5">
                    <p className="text-lg whitespace-nowrap">Contact Us</p>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_CONTACT_PATH}/#contact`}>Contact Form</Link>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_CONTACT_PATH}/#offices`}>Our Offices</Link>
                </ul>
            </div>
            <div className="px-5 lg:hidden col-span-1 col-start-6 border-l lg:border-l-0 border-grey15"></div>
                <ul className="flex py-5 lg:py-0 flex-col gap-2.5 col-span-5 lg:col-start-9 lg:col-span-2 border-b lg:border-b-0 border-grey15">
                    <p className="text-lg">Services</p>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_SERVICES_PATH}/#ValuationMastery`}>Valuation Mastery</Link>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_SERVICES_PATH}/#StrategicMarketing`}>Strategic Marketing</Link>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_SERVICES_PATH}/#NegotiationWizardry`}>Negotiation Wizardry</Link>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_SERVICES_PATH}/#ClosingSuccess`}>Closing Success</Link>
                    <Link className="text-sm" href={`${process.env.NEXT_PUBLIC_SERVICES_PATH}/#PropertyManagement`}>Property Management</Link>
                </ul>
            </div>
        </section>
    )
}

export default Footer