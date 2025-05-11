import { FC } from "react";


interface NavigatingtheEstateinCardProps {
    step: number;
    title: string;
    text: string;
    className?: string
  }

const NavigatingtheEstateinCard:FC<NavigatingtheEstateinCardProps> = ({ step, title, text, className }) => {
    return (
        <li className={`relative flex flex-col gap-5 border border-t-0 border-grey15 ${className}`}>
            <div className="before:absolute before:inset-y-0 before:left-0 before:w-[2px] before:bg-gradient-to-b before:from-purple60 before:via-purple60/30 before:to-transparent"></div>
            <h3 className="ml-10 text-[16px]">{`Step ${step < 10 ? `0${step}` : step}`}</h3>
            <div className="relative flex p-10 flex-col gap-2.5 border border-b-0 border-grey15 -z-10 ">
                <div className="before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-purple60 before:via-purple60/10 before:to-transparent"></div>
                <div 
                    className="absolute top-0 left-0 w-1/3 h-1/3 z-20"
                    style={{
                        background: 'radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0) 70%)',
                        clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                        maskImage: 'linear-gradient(to bottom right, black, transparent 70%)'
                    }}
                ></div>
                <p className="text-[20px] font-semibold">{title}</p>
                <p className="text-[16px]">{text}</p>
            </div>
        </li>
    )
}

export default NavigatingtheEstateinCard