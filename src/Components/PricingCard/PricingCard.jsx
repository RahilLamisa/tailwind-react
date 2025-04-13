import { Flower } from 'lucide-react';
import React from 'react';

const PricingCard = ({price}) => {
    return (
        <div className='bg-gray-800 rounded-xl border-2  border-violet-300'>
            <h1 className='text-xl font-bold bg-violet-300 w-50 rounded-tl-[10px] rounded-br-xl pl-3'>{price.price}</h1>
            <div className='flex gap-2 pt-3 justify-center items-center'>
            <Flower className='text-white'></Flower>
            <h1 className='text-white text-2xl text-center font-bold '>{price.name}</h1>
            </div>
            <p className='text-gray-400 text-center'>{price.price}</p>
            <div className='border m-3 border-gray-500'></div>
            {
                price.features.map((feature,i) => <li key={i} className='text-white m-3'>{feature}</li>)
            }
            <div className='flex items-center justify-center mb-3'>
            <button className='bg-violet-300 rounded-2xl p-2 w-full mx-3 text-xl font-extrabold text-center'>Try {price.price}</button>
            </div>
        </div>
    );
};

export default PricingCard;