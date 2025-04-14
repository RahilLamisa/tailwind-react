import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({fetchPricingData}) => {
    const pricingData = use(fetchPricingData)
    // console.log(pricingData);
    return (
        <div className='container mx-auto'>
            <h1 className='my-4 text-3xl font-bold'>Buy our membership</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    pricingData.map(price => 
                    <PricingCard 
                        key={price.id}
                        price={price}
                    >

                    </PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;