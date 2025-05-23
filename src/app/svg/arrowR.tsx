import { FC } from "react"

interface ArrowRProps {
    className?: string
}
const ArrowR:FC<ArrowRProps> = ({className}) => {
    return (
        <svg className={className} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.4004 7.99999C17.4004 8.49705 16.9974 8.89999 16.5004 8.89999L3.73489 
        8.89999L8.72419 13.6512C9.08248 13.9958 9.09365 14.5655 8.74914 14.9238C8.40463 15.2821 7.83489 15.2933 7.47659 14.9487L0.876594 
        8.64874C0.700124 8.47906 0.600391 8.2448 0.600391 7.99999C0.600391 7.75517 0.700124 7.52092 0.876594 7.35124L7.47659 1.05124C7.83489 
        0.706725 8.40463 0.717896 8.74914 1.07619C9.09365 1.43449 9.08248 2.00422 8.72419 2.34874L3.73489 7.09999L16.5004 7.09999C16.9974 7.09999 17.4004 7.50293 17.4004 7.99999Z" fill="#808080"/>
    </svg>
    )
}

export default ArrowR