import React from 'react'

function RenderList({ list, handletoggle, checked }) {
    return (
        <div>
            {list.map((item, index) => {
                return (
                    <ul className='flex gap-2 p-3 m-2' key={item.id}>
                        <li key={index}>{item.id}</li>
                        <li style={{ cursor: 'pointer', fontWeight: checked.includes(item.id) ? 'bold' : 'normal' }} key={item.id} onClick={() => { handletoggle(item.id) }} >{item.storename}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default RenderList;
