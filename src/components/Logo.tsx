const Logo = ({ }) => {
    return <div className="w-40 h-40 relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
            <img src="/africa.png" alt="africa logo" className="w-full opacity-60 h-full object-contain" />
        </div>
        <div className="absolute z-10 mt-auto left-0 bottom-0 flex flex-col max-w-sm">
            <span className="font-semibold">Charity for</span>
            <span className="font-bold text-4xl">Africa Kids</span>
        </div>
    </div>
}

export default Logo