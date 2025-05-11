import { FC } from "react"

interface ShareProps {
    Stroke?: boolean
}

const Share:FC<ShareProps> = ({ Stroke = false }) => {
    return (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" stroke={Stroke ? "#703BF7" : "none"} fill={Stroke ? "none" : "#703BF7"}/>
        </svg>
    )
}

export default Share