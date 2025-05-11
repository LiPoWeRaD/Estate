import NavigatingtheEstatein from "../components/NavigatingtheEstatein";
import OurAchievements from "../components/OurAchievements";
import OurValues from "../components/OurValues";
import StartYour from "../components/StartYour";
import { MeetTeamImage } from "../listImage/listImage";
import Carousel from "../ui/Carousel";
import CountPeople from "../ui/countPeople";
import MeetTeam from "../ui/MeetTeam";
import Stars from "../ui/stars";
import ValuedClients from "../ui/ValuedClients";
import { ValuedClient } from "../data/valuedClients";

const About = () => {

    const cardsClients = [
        <ValuedClients key={1} className="col-start-1 col-span-12 row-start-1 lg:row-start-2 lg:col-span-6 flex flex-col h-full" {...ValuedClient[0]}/>,
        <ValuedClients key={2} className="col-start-1 col-span-12 row-start-2 lg:row-start-3 lg:col-span-6 flex flex-col h-full" {...ValuedClient[1]}/>,
    ]

    return (
        <main className="min-h-screen py-12 lg:py-24">
            <section className="grid grid-cols-12 container mx-auto mb-12 lg:mb-[100px] gap-6 ">
                {/* Текстовый блок */}
                <div className="col-span-12 lg:col-span-6">
                    <div className="grid grid-cols-12 gap-6 h-full">
                        <div className="col-span-12 lg:col-span-10 flex flex-col justify-between h-full">
                            <div>
                                <p className=""><Stars /></p>
                                <h1 className="text-3xl font-bold leading-tight mb-6">
                                    Our Journey
                                </h1>
                                <p className="text-lg lg:text-xl text-gray-600 mb-12">
                                    {`Our story is one of continuous growth and evolution. We started as a small team with big dreams, 
                                        determined to create a real estate platform that transcended the ordinary. 
                                        Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.`}
                                </p>
                            </div>
                            
                            {/* Статистика */}
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                                <CountPeople count="200+" text="Happy Customers" />
                                <CountPeople count="10k+" text="Properties For Clients" />
                                <CountPeople count="16+" text="Years of Experience" full />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Изображение */}
                <div className="col-span-12 lg:col-span-6 row-start-1 lg:col-start-7 relative">
                    <div className="bg-gray-100 bg-home bg-cover bg-center bg-no-repeat rounded-[20px] h-full min-h-[400px] lg:min-h-[600px]"></div>
                </div>
            </section>
            <section id="story" className="grid grid-cols-12 mb-[60px] gap-6 container mx-auto ">
                <div className="grid lg:grid-cols-12 gap-6 col-span-12 lg:col-span-12">
                    {/* Заголовок и описание */}
                    <div className="lg:col-span-4"> {/* Добавлен отступ только для десктопа */}
                        <p className="mb-4"><Stars /></p>
                        <h2 className="text-3xl font-bold leading-tight mb-6">
                            Our Values
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 mb-12">
                            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
                        </p>
                    </div>

                    {/* Компонент OurValues */}
                    <div className="lg:col-span-8"> {/* Соответствующий отступ */}
                        <OurValues />
                    </div>
                </div>
            </section>
            <section id="ourworks" className="container mx-auto mb-[60px] grid grid-cols-12">
                <div className="col-span-12">
                    <p className="mb-4"><Stars /></p>
                    <h2 className="text-3xl font-bold leading-tight mb-6">
                        Our Achievements
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 mb-12">
                        Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
                    </p>
                </div>
                <OurAchievements />
            </section>
            <section id="howitworks" className="container mx-auto mb-[60px] grid grid-cols-12">
                <div className="col-span-12">
                    <p className="mb-4"><Stars /></p>
                    <h2 className="text-3xl font-bold leading-tight mb-6">
                        Navigating the Estatein Experience
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 mb-12">
                        {`At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. 
                        Here's a step-by-step guide to how it all works.`}
                    </p>
                </div>
                <NavigatingtheEstatein />
            </section>
            <section id="team" className="container mx-auto mb-[60px] grid grid-cols-12">
                <div className="col-span-12">
                    <p className="mb-4"><Stars /></p>
                    <h2 className="text-3xl font-bold leading-tight mb-6">
                        Meet the Estatein Team
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 mb-12">
                        At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
                    </p>
                </div>
                <ul className="grid grid-cols-12 col-span-12 gap-5">
                    {MeetTeamImage.map((member, index) => (
                        <MeetTeam key={index} image={member.image.src} linkTwitter={member.linkTwitter} linkTelegram={member.linkTelegram} name={member.name} job={member.job} />
                    ))}
                </ul>
            </section>
            <section id="clients" className="grid grid-cols-12 container mx-auto">
                <Carousel 
                    className="h-[650px] sm:h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px]"
                    title="Our Valued Clients" 
                    description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving" 
                    viewBtn={false} 
                    desktopVisibleCount={2}
                    DesktopCols={2}
                    items={cardsClients} 
                />
            </section>
            <section className="relative  px-[24px] py-[50px] w-full">
                {/* Левый фоновый элемент */}
                <div className="absolute top-32 left-0 w-full -translate-y-1/2 bg-contain h-full bg-abstractDesignLeft bg-no-repeat -z-10"></div>
                    
                {/* Правый фоновый элемент (исправленный) */}
                <div className="absolute bottom-0 right-0 w-full md:w-[20%] translate-y-1/2 md:translate-y-0 md:translate-x-0 bg-contain h-full bg-abstractDesignRight bg-no-repeat -z-10"></div>
                <StartYour />
            </section> 
        </main>
    );
};

export default About;