import "./TabSection.scss"
import React from 'react'


function TabSection({data,activeTabIndex,clickHandler,activeSection}) {
    return (
        <div className="TabSection mt-4">
            <div className="TabArea flex align-items-center justify-content-center gap-3">
                {
                    data?.map((el, idx) => (
                        <div className={`Tab flex align-items-center py-3 px-4 gap-2 text-white ${activeTabIndex === idx && 'ActiveTab'}`} onClick={() => clickHandler(idx)}>
                            <div className="IconArea">{el?.Icon}</div>
                            <div className="Label">{el.label}</div>
                        </div>
                    ))
                }
            </div>
            <div className="TabContainer">
                {activeSection}
            </div>
        </div>
    )
}

export default TabSection