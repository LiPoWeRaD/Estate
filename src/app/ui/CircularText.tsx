import Arrow from "../svg/arrow";


interface CircularTextProps {
    text: string;
    className?: string
}
    
const CircularText: React.FC<CircularTextProps> = ({ text, className }) => {
    const letters = text.split('');
    const radius = 70; // Радиус круга
    const center = { x: 100, y: 100 }; // Центр SVG
    
    return (
        <div className={`relative rotate-60 w-64 h-64 mx-auto ${className}`}>
            <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Буквы по кругу */}
                {letters.map((letter, index) => {
                const angle = (index / letters.length) * 360;
                const radian = (angle * Math.PI) / 180;
                const x = center.x + radius * Math.cos(radian);
                const y = center.y + radius * Math.sin(radian);
                const rotation = angle + 90; // +90 чтобы текст был направлен наружу
        
                return (
                    <text
                    key={index}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${rotation}, ${x}, ${y})`}
                    className="text-sm font-bold fill-current"
                    >
                    {letter}
                    </text>
                );
                })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-grey08 border-2 border-grey15 -z-10">
                <div className="p-[29px] border-2 border-grey15 bg-grey10 rounded-full -rotate-60"><Arrow /></div>
            </div>
        </div>
    );
};
      
export default CircularText;