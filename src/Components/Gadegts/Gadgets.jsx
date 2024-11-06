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
            <div className=' flex flex-col lg:grid  lg:grid-cols-3 gap-8'>
                {
                    gadgets.map(gadget=> <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;