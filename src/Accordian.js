import React,{useState} from "react";
const Accordian =() =>{
    const [isOpen,setisOpen]=useState(false);
    const accordianContent = [
        {
            "%item match": "100",
            "items": "12/12",
            "%location match": "100",
            "Locations": "262/262",
            "Days": "6/13"
        },
        {
            "%item match": "50",
            "items": "8/12",
            "%location match": "10",
            "Locations": "26/262",
            "Days": "12/13"
        },
        {
            "%item match": "90",
            "items": "1/12",
            "%location match": "10",
            "Locations": "223/262",
            "Days": "11/13"
        },
        {
            "%item match": "70",
            "items": "9/12",
            "%location match": "100",
            "Locations": "262/262",
            "Days": "6/13"
        }
    ]
    const accordianHeader = ["%item match","items", "%location match", "Locations", "Days"]
    return(
<>
    <button onClick={()=>{setisOpen(!isOpen)}}> {!isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
):(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
  </svg>
  ) }</button>
{isOpen && (
    <table className="absolute  m-6 px-2 py-2 border"> 
        <thead className="bg-gray-200">
            <tr>
                {accordianHeader.map((header, index) => {
                    return <th key={index} className="px-3 m-2 py-2">
                        {header}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {accordianContent.map((content, index) => {
                return (
                    <tr key={index}>
                        {accordianHeader.map((header, headerIndex) => {
                            return (
                                <td key={headerIndex} className="px-3 m-2 py-2">
                                  {content[header]}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    </table>
)}
</>
    )
}
export default Accordian;