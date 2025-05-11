


const StartYour = () => {
    return (
        <div className="relative container mx-auto px-4 grid grid-cols-12 z-30">
            
            
            {/* Контент */}
            <div className="flex flex-col mb-[30px] md:mb-0 col-start-1 col-span-12 md:col-span-6">
                <h2 className="mb-6 text-[28px] font-semibold">Start Your Real Estate Journey Today</h2>
                <p className="text-sm">{`
                    Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. 
                    Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
                `}</p>
            </div>
            
            <button className="px-[24px] py-[14px] my-auto col-start-1 col-span-12 md:col-span-3 md:col-start-10 md:h-fit md:w-fit 
                bg-purple60 rounded-2xl border border-grey15 whitespace-nowrap cursor-pointer hover:bg-purple60/80 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple60 focus:ring-opacity-50">
                Explore Properties
            </button>
        </div>
    )
}

export default StartYour