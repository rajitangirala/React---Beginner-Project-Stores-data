import Accordian from "./Accordian";
const TableHeader = ["#","Allowance start", "Allowance end", "Location", "Performance", "Unit Amount", "Status"];
const TableContent = [{
    "#":"",
    "Allowance start": "01-01-31",
    "Allowance end": "01-01-51",
    "Location": "WNCA",
    "Performance": "Price/ADD/Display",
    "Unit Amount": "$2.40",
    "Status": "Pending"
},
{
    "#":"",
    "Allowance start": "01-05-31",
    "Allowance end": "01-11-61",
    "Location": "WNCA",
    "Performance": "Price/ADD/Display",
    "Unit Amount": "$4.40",
    "Status": "Pending"
},
{
    "#":"",
    "Allowance start": "01-01-41",
    "Allowance end": "01-01-71",
    "Location": "WNCA",
    "Performance": "Price/ADD/Display",
    "Unit Amount": "$77.40",
    "Status": "Approved"
}
]
export const TabContent = {
    "Denver": (<table>
        <thead className="m-3  border-b bg-gray-200">
            <tr>
                {TableHeader.map((header, index) => {
                    return <th key={index} className="px-3 m-2 py-2">
                        {header}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {TableContent.map((content, index) => {
                return (
                    <tr key={index}>
                        {TableHeader.map((header, headerIndex) => {
                            return (
                                <td key={headerIndex} className="px-3 m-2 py-2">
                                    {index === 2 && header === "#" ?
                                        <Accordian />
                                        : ""}
                                    {content[header]}

                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    </table>),
    "United": 'Content for Tab 2',
    "South West": 'Content for Tab 3',
    "Portland": 'Content for Tab 4'
};
