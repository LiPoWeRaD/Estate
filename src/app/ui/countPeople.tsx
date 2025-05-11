import { FC } from "react"


interface CountPeopleProps {
    count: string
    text: string
    full?: boolean
}

const CountPeople:FC<CountPeopleProps> = ({count, text, full}) => {
    return (
        <li className={`flex py-[16px] px-[24px] flex-col bg-grey08 rounded-2xl border border-grey15 ${full && "col-span-2 text-center lg:text-left lg:col-span-1"}`}>
            <span className="text-[40px] font-bold">{count}</span>
            <span className="text-md">{text}</span>
        </li>
    )
}

export default CountPeople