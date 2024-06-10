interface Istat { image: string, title: string, amount: string }
const stats: Istat[] = [
    { image: "/donations.png", title: "People who donated", amount: "14,670" },
    { image: "/sponsored.png", title: "Kids who got sponsored", amount: "35,608" },
    { image: "/dollar.png", title: "Money raised so far", amount: "$245,150" },
]

const Stats = () => {
    return <div className="w-full absolute z-10 bg-primary h-32 bottom-0 left-0">
        <div className="relative w-fit  -translate-y-1/2 -translate-x-1/2 left-1/2 bg-primary-red rounded-3xl flex items-center">
            {stats.map(({title, image, amount}, i) => <div key={i} className="p-5 flex items-center gap-5">
                <img src={image} alt={title} className="relative h-20 w-20 object-contain" />
                <div className="relative flex flex-col">
                    <span className="text-primary">{title}</span>
                    <span className="font-bold text-3xl font-sans">{amount}</span>
                </div>
            </div>)}
        </div>
    </div>
}

export default Stats
