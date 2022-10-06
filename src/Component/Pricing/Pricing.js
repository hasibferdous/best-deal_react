import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption =[
        {id:1, name: 'free', price:0, features: [
            'Awesome Feature',
            'New Feature',
            'Exclusive Feature'
        ] },

        {id:2, name: 'medium', price:50, features: [
            'Awesome Feature',
            'New Feature',
            'Exclusive Feature'
        ] },

        {id:3, name: 'premium', price:500, features: [
            'Awesome Feature',
            'New Feature',
            'Exclusive Feature'
        ] },
    ]
    return (
        <div>
            <h2 className='text-5xl bg-indigo-300 p-12 font-bold text-white'>This is the best deal in the town</h2>
        <div className='grid md:grid-cols-3 gap-3 mt-4'>
        {
            pricingOption.map(option => <PricingOption
                key={option.id}
                option = {option}
            >

            </PricingOption>)
        }
        </div>
        </div>
    );
};

export default Pricing;