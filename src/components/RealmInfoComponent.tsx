const RealmInfoComponent = () => {
    return (
        <div className="relative rounded-xl ">
            <img src="/images/realm.png" className="w-full h-full border-2 rounded-xl border-white/20 " />
            <div className="absolute text-white uppercase left-1/2 -translate-x-1/2 bottom-3 bg-black/30 shadow-md shadow-black/30 rounded-[4px] py-2 px-4">
                Miliadea
            </div>
            <div className="absolute text-[10px] uppercase top-2 right-2 bg-black/30 shadow-md shadow-black/30 rounded-[4px] py-1 px-2">
                [1, 1]
            </div>
            <div className="absolute text-[10px] text-yellow-300 uppercase top-2 left-2 bg-black/30 shadow-md shadow-black/30 rounded-[4px] py-1 px-2">
                0x...loaf
            </div>
        </div>
    )
}

export default RealmInfoComponent