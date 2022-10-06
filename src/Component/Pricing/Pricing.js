import React from 'react';

const Pricing = () => {
    const pricingOption =[
        {id:1, name: 'free', price:0},
        {id:2, name: 'medium', price:50},
        {id:3, name: 'premium', price:500},
    ]
    return (
        <div>
            <h2 className='text-5xl bg-indigo-300 p-12 font-bold text-white'>This is the best deal in the town</h2>
        
        </div>
    );
};

export default Pricing;