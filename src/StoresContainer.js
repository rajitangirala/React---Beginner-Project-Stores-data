import React, { useState } from 'react';
import ToggleButtons from './ToggleButtons';
import storeslist from './Stores.json';
import RenderList from './RenderList';
const StoresContainer = () => {

    const [checked, setChecked] = useState([]);
    const [left, setLeft] = useState(storeslist.slice(0,4));
    const [right, setRight] = useState(storeslist.slice(4,8));

    const handletoggle = (storeid) => {
        const currentIndex = checked.indexOf(storeid);
        const newchecked = [...checked]
        if (currentIndex === -1) {
            newchecked.push(storeid);
        }
        else {
            newchecked.splice(currentIndex, 1)
        }
        setChecked(newchecked);
    }
    const moveStores = (source, setTarget, setSource, movetype) => {
        if (movetype === "bulk") {
            const selectedStores = source.filter(store => checked.includes(store.id));
            console.log(selectedStores, right)
            setTarget(prevTarget => [...prevTarget, ...selectedStores]);
            console.log(right)
            const updatedSource = source.filter(store => !checked.includes(store.id));
            setSource(updatedSource);
            setChecked([]);
        } else if (movetype === "single") {
            const latestStoreId = checked[checked.length - 1];
            const latestStore = source.find(store => store.id === latestStoreId);
            if (latestStore) {
                setTarget(prevTarget => [...prevTarget, latestStore]);
                const updatedSource = source.filter(store => store.id !== latestStoreId);
                setSource(updatedSource);
                setChecked([]);
            }
        }
    }
    return (
        <div>
            <div className='flex justify-start flex-wrap'>
                <div className='m-0'>
                    <p className="m-2 text-xl">Stores list Available ( {left.length} )</p>
                    <div className='  m-4 border-4 border-black-900 overflow-auto w-64 h-64 text-wrap'>
                        <RenderList list={left} handletoggle={handletoggle} checked={checked} />
                    </div>
                </div>
                <ToggleButtons handleBulkLeft={() => moveStores(right, setLeft, setRight, "bulk")} handleBulkRight={() => moveStores(left, setRight, setLeft, "bulk")} handleLeft={() => moveStores(right, setLeft, setRight, "single")} handleRight={() => moveStores(left, setRight, setLeft, "single")} />
                <div className='m-0'>
                    <p className=' px-5 text-xl'>New store list ( {right.length} ) </p>
                    <div className='m-4 border-4 border-black-900 overflow-auto   w-64 h-64 text-wrap'>
                        <RenderList list={right} handletoggle={handletoggle} checked={checked} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StoresContainer;