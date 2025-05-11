"use client"

import { useState } from "react";
import Search from "../svg/search"
import Dropdown from "../ui/Dropdown"
import FeaturedCard from "../ui/FeaturedCard";
import { CardsFeatured } from "../page";
import Carousel from "../ui/Carousel";
import Stars from "../ui/stars";
import PropertiesForm from "../components/PropertiesForm";
import { locationList, rangeList, sizeList, typeList, yearList } from "../DropDown/DropDownList";
import StartYour from "../components/StartYour";




const Properties = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (dropdownName: string) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const cards = [
        <FeaturedCard key={1} className="col-start-1 col-span-12 row-start-1 lg:row-start-2 lg:col-span-6 flex flex-col h-full" {...CardsFeatured[0]}/>,
        <FeaturedCard key={2} className="col-start-1 col-span-12 row-start-2 lg:row-start-3 lg:col-span-6 flex flex-col h-full" {...CardsFeatured[1]}/>,
        <FeaturedCard key={3} className="col-start-1 col-span-12 row-start-3 lg:row-start-4 lg:col-span-6 flex flex-col h-full" {...CardsFeatured[2]}/>,
        <FeaturedCard key={4} className="col-start-1 col-span-12 row-start-4 lg:row-start-5 lg:col-span-6 flex flex-col h-full" {...CardsFeatured[3]}/>
      ]

    return (
        <main className="flex flex-col items-center justify-between">
            <section className="relative ">
                <div className="bg-gradient-to-r from-grey60/20 via-grey60/10 to-transparent">
                    <div className="grid grid-cols-12 container mx-auto py-[50px] lg:mb-[100px] gap-6 px-4">
                        <div className="col-span-12">
                            <h1 className="text-[28px] font-bold leading-tight mb-6">
                                Find Your Dream Property
                            </h1>
                            <p className="text-lg lg:text-xl mb-12">
                                {`Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, 
                                    each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey `}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 container mx-auto px-4 py-[50px] gap-6 relative z-50 lg:mb-[-190px] lg:top-[-190px]">
                    <form action="" className="col-span-12">
                        <div className="flex px-[18px] py-2.5 justify-between items-center bg-grey08 border border-grey15 rounded-2xl shadow-[0_0_20px_0_theme(colors.grey15)]">
                            <input className="w-9/12 outline-none" type="text" placeholder="Search For A Property" />
                            <button className="bg-purple60 rounded-2xl border border-grey15 whitespace-nowrap px-[24px] py-[14px] cursor-pointer"><Search /></button>
                        </div>
                        <ul className="grid grid-cols-12 lg:grid-cols-5 mt-6 p-5 gap-5 bg-grey08 rounded-2xl border border-grey15">
                            <li className="col-span-12 lg:col-span-1">
                                <Dropdown 
                                icon="Location" 
                                options={locationList}  
                                selectedOptionValue="Location"
                                isOpen={openDropdown === 'Location'}
                                toggleDropdown={() => toggleDropdown('Location')}
                                />
                            </li>
                            <li className="col-span-12 lg:col-span-1">
                                <Dropdown 
                                icon="Type" 
                                options={typeList} 
                                selectedOptionValue="Property Type"
                                isOpen={openDropdown === 'Type'}
                                toggleDropdown={() => toggleDropdown('Type')}
                                />
                            </li>
                            <li className="col-span-12 lg:col-span-1">
                                <Dropdown 
                                icon="Range" 
                                options={rangeList} 
                                selectedOptionValue="Pricing Range"
                                isOpen={openDropdown === 'Range'}
                                toggleDropdown={() => toggleDropdown('Range')}
                                />
                            </li>
                            <li className="col-span-12 lg:col-span-1">
                                <Dropdown 
                                icon="Size"  
                                options={sizeList} 
                                selectedOptionValue="Property Size"
                                isOpen={openDropdown === 'Size'}
                                toggleDropdown={() => toggleDropdown('Size')}
                                />
                            </li>
                            <li className="col-span-12 lg:col-span-1">
                                <Dropdown 
                                icon="Year" 
                                options={yearList} 
                                selectedOptionValue="Build Year"
                                isOpen={openDropdown === 'Year'}
                                toggleDropdown={() => toggleDropdown('Year')}
                                />
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
            <section id="portfolio" className="grid grid-cols-12 container">
                <Carousel minHeightPlus="900" items={cards} />
            </section>
            <section id="categories" className="grid grid-cols-12 mb-[60px] gap-6 container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-6 col-span-12 lg:col-span-12">
                    {/* Заголовок и описание */}
                    <div className="col-span-12 lg:col-span-10">
                        <p className="mb-4"><Stars /></p>
                        <h2 className="text-3xl font-bold leading-tight mb-6">
                            {`Let's Make it Happen`}
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 mb-12">
                            {`Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. 
                            Don't wait; let's embark on this exciting journey together.`}
                        </p>
                    </div>

                    {/* Форма */}
                    <PropertiesForm />
                </div>
            </section>
            <section className="relative px-[24px] py-[50px] w-full">
                {/* Левый фоновый элемент */}
                <div className="absolute top-32 left-0 w-full -translate-y-1/2 bg-contain h-full bg-abstractDesignLeft bg-no-repeat -z-10"></div>
                    
                {/* Правый фоновый элемент (исправленный) */}
                <div className="absolute bottom-0 right-0 w-full md:w-[20%] translate-y-1/2 md:translate-y-0 md:translate-x-0 bg-contain h-full bg-abstractDesignRight bg-no-repeat -z-10"></div>
                <StartYour />
            </section> 
        </main>
    )
}

export default Properties