import React, { useEffect, useState } from 'react';import Gadget from '../Gadget/Gadget';
;

const Gadgets = () => {
    const [gadgets, setGadgets]=useState([]);
    useEffect(()=>{
        fetch('gadgets.json')
        .then(res => res.json())
        .then(data=> setGadgets(data))
    },[])
    return (
        <div>
            <h2>Total gadgets: {gadgets.length}</h2>
            <div className='grid grid-cols-3 gap-8'>
                {
                    gadgets.map(gadget=> <Gadget gadget={gadget}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;