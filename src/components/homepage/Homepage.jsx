import React from 'react';
import Footer from '../common/Footer';
import LandingSection from '../common/LandingSection';
import Promo from '../services/OurServices';
import Packages from '../homepage/Packages';



const Homepage = () => (
    <div className="min-h-screen flex flex-col">
        <LandingSection/>
        <div className="flex-grow">
            <Promo/>
            <Packages/>
        </div>
        <Footer/>
    </div>
)

export default Homepage;