import React from 'react';
import Feature from '../Feature/Feature';

const PricingOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-indigo-300 m-3 p-6 rounded-md'>
            <div>
                <h3><span className='text-6xl font-bold text-white'>{option.price}</span>
                <span   className='text-2xl text-gray-50'>/mon</span></h3>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            {
                features.map((feature, idx)=>  <Feature 
                key={idx} 
                feature={feature}
                ></Feature>)
            }
            <button className='bg-green-500 md:rounded text-white w-full m-3 p-3 font-bold'>Buy Now</button>
        </div>
    );
};

export default PricingOption;