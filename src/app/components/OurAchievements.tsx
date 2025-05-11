


const OurAchievements = () => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-3 col-span-12 gap-[30px]">
            <li className="p-[30px] border border-grey15 rounded-2xl shadow-[0_0_20px_0_theme(colors.grey15)]">
                <h3 className="mb-6 text-2xl">3+ Years of Excellence</h3>
                <p className="text-[16px]">{`With over 3 years in the industry, we've amassed a wealth of knowledge and experience.`}</p>
            </li>
            <li className="p-[30px] border border-grey15 rounded-2xl shadow-[0_0_20px_0_theme(colors.grey15)]">
                <h3 className="mb-6 text-2xl">Happy Clients</h3>
                <p className="text-[16px]">{`Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.`}</p>
            </li>
            <li className="p-[30px] border border-grey15 rounded-2xl shadow-[0_0_20px_0_theme(colors.grey15)]">
                <h3 className="mb-6 text-2xl">Industry Recognition</h3>
                <p className="text-[16px]">{`We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.`}</p>
            </li>
        </ul>
    )
}

export default OurAchievements