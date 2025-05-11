import { FC, useState } from "react"
import Dropdown from "../ui/Dropdown"
import { locationList, typeList, NoofBathrooms, NoofBedrooms, Budget } from "../DropDown/DropDownList"
import Mail2 from "../svg/mail2"
import Phone from "../svg/phone"
import Share from "../svg/share"
import Link from "next/link"


interface FormButtonProps {
    label: string
    placeholder?: string
    type: string
    className?: string
}

const PropertiesForm = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    
    const toggleDropdown = (dropdownName: string) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const classText = "flex flex-col gap-2 col-span-12 ";
    
    const InputForm:FC<FormButtonProps> = ({ label, type, placeholder, className }) => {
        if (type === "textarea") {
            return (
                <label className={`flex flex-col gap-2 col-span-12 ${className}`} htmlFor="">
                    <p>{label}</p>
                    <textarea rows={4} className="px-5 py-4 text-sm bg-grey08 border border-grey30 rounded-lg" placeholder={placeholder} /> 
                </label>
            )
        }

        if (type === "text" || type === "email" || type === "password" || type === "number" || type === "tel" || type === "url" ) {
            return (
                <label className={`flex flex-col gap-2 col-span-12 ${className}`} htmlFor="">
                    <p>{label}</p>
                    <input type={type} className="px-4 py-2 text-sm bg-grey10 min-h-[52px] border border-grey30 rounded-lg placeholder:text-grey60" placeholder={placeholder} /> 
                </label>
            )
        }
        
        if (type === "emailAndTel") {
            return (
                <label className={`flex flex-col gap-2 col-span-12 ${className}`} htmlFor="">
                    <p>{label}</p>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 ">
                        <div className="relative flex items-center gap-x-2 px-4  min-h-[43px]  bg-grey10 border border-grey30 rounded-lg">
                            <span><Phone /></span>
                            <input type="tel" className="absolute top-1/2 left-11 w-3/4 outline-none transform -translate-y-1/2 text-sm placeholder:text-grey60" placeholder="Enter Your Number" /> 
                            <span className="absolute top-1/2 right-4 transform -translate-y-1/2"><Share /></span>
                        </div>
                        <div className="relative flex items-center gap-x-2 px-4  min-h-[43px]  bg-grey10 border border-grey30 rounded-lg">
                            <span><Mail2 /></span>
                            <input type="tel" className="absolute top-1/2 left-11 w-3/4 outline-none transform -translate-y-1/2 text-sm placeholder:text-grey60" placeholder="Enter Your Email" /> 
                            <span className="absolute top-1/2 right-4 transform -translate-y-1/2"><Share Stroke /></span>
                        </div>
                    </div>
                </label>
            )
        }
        
    }

    return (
        <form className="grid grid-cols-12 col-span-12 xl:grid-cols-5 mt-6 p-5 gap-5 bg-grey08 rounded-2xl border border-grey15">
            <InputForm className="xl:col-span-3" label="First Name" type="text" placeholder="Enter First Name" />  
            <InputForm className="xl:col-span-3" label="Last Name" type="text" placeholder="Enter Last Name" />   
            <InputForm className="xl:col-span-3" label="email" type="email" placeholder="Enter your Email" />
            <InputForm className="xl:col-span-3" label="Phone" type="tel" placeholder="Enter Phone Number" />
            <div className="flex flex-col gap-2 col-span-12 xl:col-span-3">
                <p>Preferred Location</p>
                <Dropdown
                    className="flex flex-col gap-2 col-span-12"
                    icon="Location" 
                    options={locationList}  
                    selectedOptionValue="Select Location"
                    isOpen={openDropdown === 'Location'}
                    toggleDropdown={() => toggleDropdown('Location')}
                    leftIcon={false}
                    otherMargin={true}
                    />
            </div>
            <div className="flex flex-col gap-2 col-span-12 xl:col-span-3">
                <p>Property Type</p>
                <Dropdown
                    className={classText} 
                    icon="Type" 
                    options={typeList} 
                    selectedOptionValue="Select Property Type"
                    isOpen={openDropdown === 'Type'}
                    toggleDropdown={() => toggleDropdown('Type')}
                    leftIcon={false}
                    otherMargin={true}
                    />
            </div>
            <div className="flex flex-col gap-2 col-span-12 xl:col-span-3">
                <p>No. of Bathrooms</p>
                <Dropdown
                    className={classText} 
                    icon="Range" 
                    options={NoofBathrooms} 
                    selectedOptionValue="Select no. of Bathrooms"
                    isOpen={openDropdown === 'Bathrooms'}
                    toggleDropdown={() => toggleDropdown('Bathrooms')}
                    leftIcon={false}
                    otherMargin={true}
                    />
            </div>
            <div className="flex flex-col gap-2 col-span-12 xl:col-span-3">
                <p>No. of Bathrooms</p>
                <Dropdown
                    className={classText} 
                    icon="Range" 
                    options={NoofBedrooms} 
                    selectedOptionValue="Select no. of Bedrooms"
                    isOpen={openDropdown === 'Bedrooms'}
                    toggleDropdown={() => toggleDropdown('Bedrooms')}
                    leftIcon={false}
                    otherMargin={true}
                    />
            </div>
            <div className="flex flex-col gap-2 col-span-12 xl:col-span-6">
                <p>Budget</p>
                <Dropdown
                    className={classText} 
                    icon="Budget" 
                    options={Budget} 
                    selectedOptionValue="Select Budget"
                    isOpen={openDropdown === 'Budget'}
                    toggleDropdown={() => toggleDropdown('Budget')}
                    leftIcon={false}
                    otherMargin={true}
                    />
            </div>
            <InputForm className="xl:col-span-6" label="Preferred Contact Method" type="emailAndTel" placeholder="Enter Your Message" />
            <InputForm label="Message" type="textarea" placeholder="Enter your Message here.." />
            <div className="grid grid-cols-12 gap-2 col-span-12 xl:col-span-12">
                <label className="inline-flex items-center col-span-12 xl:col-span-9">
                    <input 
                        type="checkbox" 
                        className="
                        appearance-none h-4 w-4 
                        bg-grey30 border border-grey30 
                        rounded checked:bg-grey30
                        checked:border-green-500
                        relative
                        after:content-[''] after:absolute
                        after:left-1/2 after:top-1/2
                        after:-translate-x-1/2 after:-translate-y-1/2
                        after:w-2 after:h-2
                        after:bg-green-500 after:rounded-sm
                        after:opacity-0 checked:after:opacity-100
                        "
                    />
                    <span className="ml-2 text-sm">I agree with <Link className="border-b" href="#">Terms of Use </Link> and <Link className="border-b" href="#">Privacy Policy </Link></span>
                </label>
                <button type="submit" className="px-[24px] py-[14px] col-span-12 xl:col-span-3  bg-purple60 rounded-2xl border border-grey15 whitespace-nowrap">Send Your Message</button>
            </div>
        </form>
    )       
}

export default PropertiesForm