import React, { useState } from 'react';
import storeslist from './Stores.json';
import StoresData from './StoresData';
import StoresContainer  from './StoresContainer';
const Stores = () => {
    
    return (
        <div >
            <h1 className="text-4xl text-blue-500 m-3 px-3 py-3"> Stores Data</h1>
            <form>
                <StoresData />
                <button className="text-left text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View store</button>
              
                    <div >
                        <StoresContainer />
                    </div>


            </form>
        </div>
    )
}
export default Stores;