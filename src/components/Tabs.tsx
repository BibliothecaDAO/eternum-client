import { useState } from "react"

const Tabs = () => {
    const tabs = ['Overview', 'Labor', 'Market', 'Military']
    const [activeTab, setActiveTab] = useState(tabs[0])

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex items-center justify-center w-full h-8 uppercase">
                {tabs.map((tab, index) => (
                    <div key={index} className={`flex items-center cursor-pointer rounded-[3px] justify-center w-1/4 h-full text-xs text-white/50 ${activeTab === tab ? 'text-white/100 bg-black/10 shadow-inner shadow-black/30' : ''}`} onClick={() => setActiveTab(tab)}>
                        {tab}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center w-full h-full text-white/50">
                {activeTab}
            </div>
        </div>
    )
}

export default Tabs