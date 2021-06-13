import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const OurServices = () => (
    <div className="md:px-8 bg-gray-200 md:py-8 lg:px-16 xl:px-24 xl:py-8 py-8 px-8">
        <div>
            <p className="font-semibold text-center text-pink-500 text-2xl">OUR SERVICE'S</p>
        </div>
      
        <ScrollAnimation
        animateIn='bounceInUp'
        animateOut='fadeOut'
        duration={1.5}
      >
        <div className="mt-5">
            <div className="flex flex-col flex-wrap md:flex-row">
                <div className="flex-1 md:mr-6">
                <img className="rounded" src="/assets/promo 1.jpg" alt="logo" />
                </div>
                <div className="flex-1 md:mr-6">
                <img className="rounded" src="/assets/promo 2.jpg" alt="logo" />
                </div>
                <div className="flex-1 md:mr-6">
                <img className="rounded" src="/assets/promo 3.jpg" alt="logo" />
                </div>
                <div className="flex-1">
                <img className="rounded" src="/assets/promo 4.jpg" alt="logo" />
                </div>
            </div>
            
        </div>
        </ScrollAnimation>
</div>
)

export default OurServices;