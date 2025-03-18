import { Tabs } from "./Tabs";
import { TabContent } from "./Tabcontent";
import React,{useState} from "react";
const TabComponent =()=>{
    const [activetab,setactivetab]=useState("Denver");
    return(
        <div >
        <div className="m-3 px-3 py-3 flex flex-wrap  gap-6 "  >
                  {Tabs.map(item=>{
                    return(<div key={item.sno} className={`border-b px-2 py-2  ${item.label===activetab ? "border-b2 border-purple-500  font-semibold" : "border-b2 border-gray-500"}`}>
                        <button onClick={()=>{setactivetab(item.label)}}>
                            {item.label}
                        </button>
                        </div>)
                  })}

        </div>
        <div className="m-6 px-3 py-3">
        {TabContent[activetab]}
        </div>
        </div>
    )

}
export default TabComponent;