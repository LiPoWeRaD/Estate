import AdditionalFees from "@/app/ui/AdditionalFees";
import Stars from "@/app/ui/stars";

interface PricingSectionProps {
    price: number;
}

export default function PricingSection({ price }: PricingSectionProps) {
    return (
        <section className="container mx-auto px-4 py-8">
            <div className="col-start-1 col-span-12 mx-auto py-12 px-4">
                <p className="mb-4"><Stars /></p>
                <h2 className="text-3xl font-bold leading-tight mb-6">Comprehensive Pricing Details</h2>
                <p className="text-lg lg:text-xl mb-12">At Estatein, transparency is key. 
                    We want you to have a clear understanding of all costs associated with your property investment. 
                    Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-grey10 rounded-2xl border border-grey15 p-8 mb-8">
                <h3 className="text-2xl sm:col-span-2 font-bold sm:border-r border-grey15">Note</h3>
                <p className="col-span-11 sm:col-span-10 border-t sm:border-t-0 border-grey15 pt-4 sm:pt-0">
                    The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.
                </p> 
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 col-span-12 md:col-span-2 gap-4 mb-4">
                    <div className="w-full">
                        <p className="whitespace-nowrap">Listing Price</p>
                        <p className="whitespace-nowrap">${price.toLocaleString()}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 col-span-12 md:col-start-3 md:col-span-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-grey15 rounded-2xl p-8 mb-5">
                        <div className="grid grid-cols-2 md:grid-cols-12 col-span-12 items-center border-b border-grey15 pb-4">
                            <p className="text-lg font-bold md:col-span-6">Additional Fees</p>
                            <button className="text-sm bg-grey10 rounded-lg px-4 py-2 md:col-span-6 cursor-pointer
                                hover:bg-grey10/80 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-grey10 focus:ring-opacity-50">
                                Learn More
                            </button>
                        </div>
                        <AdditionalFees title="Property Transfer Tax" price="$25,000" description="Based on the sale price and local regulations" />
                        <AdditionalFees title="Legal Fees" price="$3,000" description="Approximate cost for legal services, including title transfer" />
                        <AdditionalFees title="Home Inspection" price="$500" description="Recommended for due diligence" />
                        <AdditionalFees title="Property Insurance" price="$1,200" description="Annual cost for comprehensive property insurance" />
                        <AdditionalFees title="Mortgage Fees" price="Varies" description="If applicable, consult with your lender for specific details" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-grey15 rounded-2xl p-8">
                        <div className="grid grid-cols-2 md:grid-cols-12 col-span-12 items-center border-b border-grey15 pb-4">
                            <p className="text-lg font-bold md:col-span-6">Monthly Costs</p>
                            <button className="text-sm bg-grey10 rounded-lg px-4 py-2 md:col-span-6 cursor-pointer
                                hover:bg-grey10/80 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-grey10 focus:ring-opacity-50">
                                Learn More
                            </button>
                        </div>
                        <AdditionalFees title="Property Taxes" price="$1,250" description="Approximate monthly property tax based on the sale price and local rates" />
                        <AdditionalFees title="Homeowners' Association Fee" price="$300" description="Monthly fee for common area maintenance and security" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-grey15 rounded-2xl p-8">
                        <div className="grid grid-cols-2 md:grid-cols-12 col-span-12 items-center border-b border-grey15 pb-4">
                            <p className="text-lg font-bold md:col-span-6">Total Initial Costs</p>
                            <button className="text-sm bg-grey10 rounded-lg px-4 py-2 md:col-span-6 cursor-pointer
                                hover:bg-grey10/80 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-grey10 focus:ring-opacity-50">
                                Learn More
                            </button>
                        </div>
                        <AdditionalFees title="Listing Price" price="$1,250,000" description="" />
                        <AdditionalFees title="Additional Fees" price="$29,700" description="Property transfer tax, legal fees, inspection, insurance" />
                        <AdditionalFees title="Down Payment" price="$250,000" description="20%" className="col-span-2 text-center rounded-2xl" />
                        <AdditionalFees title="Mortgage Amount" price="$1,000,000" description="If applicable" priceClassName="col-span-2 sm:col-span-1" className="col-span-4 col-start-5 sm:col-start-4 text-center rounded-2xl" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-grey15 rounded-2xl p-8">
                        <div className="grid grid-cols-2 md:grid-cols-12 col-span-12 items-center border-b border-grey15 pb-4">
                            <p className="text-lg font-bold md:col-span-6">Monthly Expenses</p>
                            <button className="text-sm bg-grey10 rounded-lg px-4 py-2 md:col-span-6 cursor-pointer
                                hover:bg-grey10/80 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-grey10 focus:ring-opacity-50">
                                Learn More
                            </button>
                        </div>
                        <AdditionalFees title="Property Taxes" price="$1,250" description="" />
                        <AdditionalFees title="Homeowners' Association Fee" price="$300" description="" />
                        <AdditionalFees title="Mortgage Payment" price="Varies based on terms and interest rate" description="" priceClassName="col-span-12" />
                        <AdditionalFees title="Property Insurance" price="$100" description="Approximate monthly cost" className="col-span-9 rounded-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
} 