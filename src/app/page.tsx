import CountPeople from "./ui/countPeople";
import CircularText from "./ui/CircularText";
import { CardInfoHome, FeaturedCardImage, CardsClientsImage } from "./listImage/listImage";
import CardInfo from "./ui/cardInfo";
import Carousel from "./ui/Carousel";
import FeaturedCard from "./ui/FeaturedCard";
import { FeaturedCardProps } from "./types/FeaturedCardProps";
import ClientsCard from "./ui/ClientsCard";
import { ClientsCardProps } from "./types/ClientsCardProps";
import FrequentlyAsked from "./ui/FrequentlyAsked";
import StartYour from "./components/StartYour";



export const CardsFeatured:FeaturedCardProps[] = [
  {
    id: "1",
    img: FeaturedCardImage[0].image.src,
    title: "Seaside Serenity Villa",
    text: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    info1: "4-Bedroom",
    info2: "3-Bathroom",
    info3: "Villa",
    price: "$550,000",
  },
  {
    id: "2",
    img: FeaturedCardImage[1].image.src,
    title: "Metropolitan Haven",
    text: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
    info1: "2-Bedroom",
    info2: "2-Bathroom",
    info3: "Villa",
    price: "$550,000",
  },
  {
    id: "3",
    img: FeaturedCardImage[2].image.src,
    title: "Rustic Retreat Cottage",
    text: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    info1: "3-Bedroom",
    info2: "3-Bathroom",
    info3: "Villa",
    price: "$550,000",
  },
  {
    id: "4",
    img: FeaturedCardImage[3].image.src,
    title: "Beachfront Villa",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    info1: "2-Bedrooms",
    info2: "5-Bathroom",
    info3: "Garages",
    price: "$550,000",
  }
]

export const CardsClients:ClientsCardProps[] = [
  {
    stars: 5,
    title: "Exceptional Service!",
    text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    img: CardsClientsImage[0].image.src,
    name: "Wade Warren",
    job: "USA, California",
  },
  {
    stars: 5,
    title: "Efficient and Reliable",
    text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    img: CardsClientsImage[1].image.src,
    name: "Emelie Thomson",
    job: "USA, Florida",
  },
  {
    stars: 5,
    title: "Trusted Advisors",
    text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    img: CardsClientsImage[2].image.src,
    name: "John Mans",
    job: "USA, Nevada",
  },
]


export const FrequentlyAskedData = [
  {
    question: "How do I search for properties on Estatein?",
    answer: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    link: "#",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer: "Find out about the necessary documentation for listing your property with us.",
    link: "#",
  },
  {
    question: "How can I contact an Estatein agent?",
    answer: "Discover the different ways you can get in touch with our experienced agents.",
    link: "#",
  },
  {
    question: "Can I sell my property through Estatein without a real estate agent?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "#",
  },
]

export const cardsFrequentlyAsked = [
  <FrequentlyAsked key={1} className="col-start-1 col-span-12 row-start-1 lg:row-start-2 lg:col-span-6 flex flex-col h-full" {...FrequentlyAskedData[0]}/>,
  <FrequentlyAsked key={2} className="col-start-1 col-span-12 row-start-2 lg:row-start-3 lg:col-span-6 flex flex-col h-full" {...FrequentlyAskedData[1]}/>,
  <FrequentlyAsked key={3} className="col-start-1 col-span-12 row-start-3 lg:row-start-4 lg:col-span-6 flex flex-col h-full" {...FrequentlyAskedData[2]}/>,
  <FrequentlyAsked key={4} className="col-start-1 col-span-12 row-start-4 lg:row-start-5 lg:col-span-6 flex flex-col h-full" {...FrequentlyAskedData[3]}/>
]

export const cards = [
  <FeaturedCard key={1} className="col-start-1 col-span-12 row-start-1 lg:row-start-2 lg:col-span-6 flex flex-col h-full" {...CardsFeatured[0]}/>,
  <FeaturedCard key={2} className="col-start-1 col-span-12 row-start-2 lg:row-start-3 lg:col-span-6 flex flex-col h-full" {...CardsFeatured[1]}/>,
  <FeaturedCard key={3} className="col-start-1 col-span-12 row-start-3 lg:row-start-4 lg:col-span-6 flex flex-col h-full" {...CardsFeatured[2]}/>,
  <FeaturedCard key={4} className="col-start-1 col-span-12 row-start-4 lg:row-start-5 lg:col-span-6 flex flex-col h-full" {...CardsFeatured[3]}/>
]

export default function Home() {
  

  const cardsClients = [
    <ClientsCard key={1} className="col-start-1 col-span-12 row-start-1 lg:row-start-2 lg:col-span-6 flex flex-col h-full" {...CardsClients[0]}/>,
    <ClientsCard key={2} className="col-start-1 col-span-12 row-start-2 lg:row-start-3 lg:col-span-6 flex flex-col h-full" {...CardsClients[1]}/>,
    <ClientsCard key={3} className="col-start-1 col-span-12 row-start-3 lg:row-start-4 lg:col-span-6 flex flex-col h-full" {...CardsClients[2]}/>,
  ]

  return (
    <main className="flex flex-col items-center justify-between ">
      <section id="hero" className="grid grid-cols-12">
        <div className="flex flex-col mb-10 xl:mb-0 xl:mx-0 xl:pr-[80px] justify-center items-end col-start-1 col-span-12 row-start-2 xl:row-start-1 xl:col-start-2 xl:col-span-5">
          <div className="container">
            <div className="flex flex-col">
              <h1 className="mb-6 text-[28px] xl:text-[60px] font-semibold">Discover Your Dream Property with Estatein</h1>
              <p className="mb-[60px] text-sm xl:text-lg">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
            </div>
            <div className="flex flex-col xl:flex-row mb-[80px] gap-5">
              <button className="px-[24px] py-[14px] bg-grey08 rounded-2xl border border-grey15 cursor-pointer 
                hover:bg-grey08/80 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-grey08 focus:ring-opacity-50" >Learn More</button>
              <button className="px-[24px] py-[14px] bg-purple60 rounded-2xl border border-grey15 cursor-pointer
                hover:bg-purple60/80 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple60 focus:ring-opacity-50" >Browse Properties</button> 
            </div>
            <ul className="grid grid-cols-2 xl:grid-cols-3 gap-5"> 
              <CountPeople count="200+" text="Happy Customers" />
              <CountPeople count="10k+" text="Properties For Clients" />
              <CountPeople count="16+" text="Years of Experience" full />
            </ul>
          </div>
        </div>
        <div className="relative mb-18 xl:mb-0 col-start-1 col-span-12 bg-city bg-no-repeat bg-[length:100%_100%] h-[302px] xl:h-[814px] xl:col-span-6 ">
          <CircularText className="absolute hidden sm:block -bottom-full -left-32 sm:-left-64 xl:top-1/2 -translate-y-1/2 xl:-left-1/2 w-[117px] h-[117px] xl:w-[175px] xl:h-[175px]" text=" ✨Discover Your Dream Property" />
        </div>
        <ul className="grid grid-cols-2 p-2.5 xl:grid-cols-4 col-span-12 gap-5 border border-grey15 ">
          {CardInfoHome.map((card) => (
            <CardInfo key={card.text} img={card.image.src} text={card.text} />
          ))}
        </ul>
      </section>
      <section id="features" className="grid grid-cols-12 container">
        <Carousel minHeightPlus="900" items={cards} />
      </section>
      <section id="properties" className="grid grid-cols-12 container">
        <Carousel minHeight="400" title="What Our Clients Say" description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs." viewBtn="View All Testimonials" items={cardsClients} />
      </section>
      <section id="testimonials" className="grid grid-cols-12 container">
        <Carousel minHeight="300" title="Frequently Asked Questions" description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way." viewBtn="View All FAQ’s" items={cardsFrequentlyAsked} />
      </section>
      <section id="faq" className="relative  px-[24px] py-[50px] w-full">
        {/* Левый фоновый элемент */}
        <div className="absolute top-32 left-0 w-full -translate-y-1/2 bg-contain h-full bg-abstractDesignLeft bg-no-repeat -z-10"></div>
            
        {/* Правый фоновый элемент (исправленный) */}
        <div className="absolute bottom-0 right-0 w-full md:w-[20%] translate-y-1/2 md:translate-y-0 md:translate-x-0 bg-contain h-full bg-abstractDesignRight bg-no-repeat -z-10"></div>
        <StartYour />
      </section>
    </main>
  );
}
