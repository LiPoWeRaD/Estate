import NavigatingtheEstateinCard from "../ui/NavigatingtheEstateinCard"



const NavigatingtheEstatein = () => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-3 col-span-12 gap-5">
            <NavigatingtheEstateinCard 
                step={1} 
                title="Discover a World of Possibilities" 
                text="Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location," 
            />
            <NavigatingtheEstateinCard 
                step={2} 
                title="Narrowing Down Your Choices"
                text="Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
            />
            <NavigatingtheEstateinCard 
                step={3} 
                title="Personalized Guidance"
                text="Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
            />
            <NavigatingtheEstateinCard 
                step={4} 
                title="See It for Yourself"
                text="Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."
                className="hidden md:flex"
            />
            <NavigatingtheEstateinCard 
                step={5} 
                title="Making Informed Decisions"
                text="Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed."
                className="hidden md:flex"
            />
            <NavigatingtheEstateinCard 
                step={6} 
                title="Getting the Best Deal"
                text="We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."
                className="hidden md:flex"
            />
        </ul>
    )
}

export default NavigatingtheEstatein