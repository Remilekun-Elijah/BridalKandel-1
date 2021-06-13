import React, { Component } from 'react';

class WashPackages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smallCar: true,
            mediumCar: false,
            smallSUV: false
        }
        this.onSwitch = this.onSwitch.bind(this);
    }

    onSwitch(eventName) {
        if (eventName === 'smallCar') {
            this.setState({
                smallCar: true,
                mediumCar: false,
                smallSUV: false
            })
        }
        else if (eventName === 'mediumCar') {
            this.setState({
                smallCar: false,
                smallSUV: false,
                mediumCar: true
            })
        }
        else if (eventName === 'smallSUV') {
            this.setState({
                smallCar: false,
                smallSUV: true,
                mediumCar: false
            })
        }
    }

    render() {
        const { smallCar, smallSUV, mediumCar } = this.state
        return (
            <div className="md:px-8 md:py-8 lg:px-16 xl:px-56 xl:py-24 py-8 px-4">
                <div className="text-center">
                    <p className="font-semibold text-2xl ">VEHICLE TYPE PACKAGES</p>
                    <div className="border-b border-black mt-3 w-12 m-auto"></div>
                    <p className="text-primary-blue text-sm italic mt-4">We offer multiple services</p>
                    <div className="my-4 md:my-10">
                        <button
                            onClick={() => this.onSwitch('smallCar')}
                            className={`text-sm mr-2 ${!smallCar && 'text-primary-blue'} hover:text-white shadow-lg hover:bg-primary-blue font-bold py-2 px-4 focus:outline-none ${smallCar && 'bg-primary-blue text-white'}`}>
                            Small car
                        </button>
                        <button
                            onClick={() => this.onSwitch('mediumCar')}
                            className={`text-sm mr-2 ${!mediumCar && 'text-primary-blue'} hover:text-white shadow-lg hover:bg-primary-blue font-bold py-2 px-4 focus:outline-none ${mediumCar && 'bg-primary-blue text-white'}`}>
                            Medium car
                        </button>
                        <button
                            onClick={() => this.onSwitch('smallSUV')}
                            className={`text-sm mr-2 ${!smallSUV && 'text-primary-blue'} hover:text-white shadow-lg hover:bg-primary-blue font-bold py-2 px-4 focus:outline-none ${smallSUV && 'bg-primary-blue text-white'}`}>
                            Small Suv
                        </button>
                    </div>
                    {
                        smallCar ?
                            <div className="text-center text-sm text-primary-deep-gray">
                                <p>Small ullamcorper est terminal metro. Suspendisse a novum etos pellentesque a non felis maecenas module vimeo at malesuada.
                                    Primus elit lectus at felis, malesuada ultricies obec curabitur et ligula sande porta node vestibulum une commodo a convallis
                                    laoreet enim. Morbi at sinum interdum etos fermentum. Nulla elite terminal integer. Novum etos module un metro laoreet enim,
                                    morbi at sinum interdum etos fermentum in dolor supremum.</p>
                            </div> :
                        mediumCar ?
                            <div className="text-center text-sm text-primary-deep-gray">
                                <p>Medium ullamcorper est terminal metro. Suspendisse a novum etos pellentesque a non felis maecenas module vimeo at malesuada.
                                    Primus elit lectus at felis, malesuada ultricies obec curabitur et ligula sande porta node vestibulum une commodo a convallis
                                    laoreet enim. Morbi at sinum interdum etos fermentum. Nulla elite terminal integer. Novum etos module un metro laoreet enim,
                                    morbi at sinum interdum etos fermentum in dolor supremum.</p>
                            </div> :
                        smallSUV ?
                            <div className="text-center text-sm text-primary-deep-gray">
                                <p>Small SUV ullamcorper est terminal metro. Suspendisse a novum etos pellentesque a non felis maecenas module vimeo at malesuada.
                                    Primus elit lectus at felis, malesuada ultricies obec curabitur et ligula sande porta node vestibulum une commodo a convallis
                                    laoreet enim. Morbi at sinum interdum etos fermentum. Nulla elite terminal integer. Novum etos module un metro laoreet enim,
                                    morbi at sinum interdum etos fermentum in dolor supremum.</p>
                            </div> : null
                    }

                    <div className="border-b-2 mt-10"></div>
                </div>
                <div className="flex flex-col md:flex-row text-center md:text-left mt-4 md:mt-12">
                    <div className="flex-1 mr-4 mt-4 md:mt-0">
                        <div className="cus-card">
                            <img className="inline-block h-10" src="/assets/001-couch.png" alt="logo" />
                            <p className="font-bold mt-4">EASY TO REACH</p>
                            <p className="text-sm mt-4 text-primary-deep-gray">We are dedicated to providing quality
                                 service, customer satisfaction at a great value
                                 in multiple locations offering convenient hours.
                    </p>
                        </div>
                    </div>
                    <div className="flex-1 mr-4 mt-4 md:mt-0">
                        <div className="cus-card">
                            <img className="inline-block h-10" src="/assets/012---Organic-Product.png" alt="logo" />
                            <p className="font-bold mt-4">BEST RESULT</p>
                            <p className="text-sm mt-4 text-primary-deep-gray">Our products are eco-friendly and interior products are all organic.
                             We use less than a gallon of water with absolutely zero-waste.
                    </p>
                        </div>
                    </div>
                    <div className="flex-1 mr-4 mt-4 md:mt-0">
                        <div className="cus-card">
                            <img className="inline-block h-10" src="/assets/001-couch.png" alt="logo" />
                            <p className="font-bold mt-4">ECO FRIENDLY</p>
                            <p className="text-sm mt-4 text-primary-deep-gray">We are dedicated to providing quality
                                 service, customer satisfaction at a great value
                                 in multiple locations offering convenient hours.
                    </p>
                        </div>
                    </div>
                    <div className="flex-1 mt-4 md:mt-0">
                        <div className="cus-card">
                            <img className="inline-block h-10" src="/assets/012---Organic-Product.png" alt="logo" />
                            <p className="font-bold mt-4">OIL CHANGE</p>
                            <p className="text-sm mt-4 text-primary-deep-gray">Our products are eco-friendly and interior products are all
                            organic. We use less than a gallon of water with absolutely zero-waste.
                    </p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row text-center md:text-left pt-4 md:pt-10">
                    <div className="flex-1 mr-4 mt-4 md:mt-0">
                        <div className="cus-card">
                            <img className="inline-block h-10" src="/assets/003-team.png" alt="logo" />
                            <p className="font-bold mt-4">HAND WASH</p>
                            <p className="text-sm mt-4 text-primary-deep-gray">Our crew members are all trained and skilled and fully
                             equipped with equipment and supplies needed that we can deliver the best results.
                    </p>
                        </div>
                    </div>
                    <div className="flex-1 mr-4 mt-4 md:mt-0">
                        <div className="cus-card">
                            <img className="inline-block h-10" src="/assets/004-diamond.png" alt="logo" />
                            <p className="font-bold mt-4">INTERIOR CLEAN</p>
                            <p className="text-sm mt-4 text-primary-deep-gray">We offer multiple services at a great value to meet your
                            needs. We offer a premium service while saving your time and money.
                    </p>
                        </div>
                    </div>
                    <div className="flex-1 mr-4 mt-4 md:mt-0">
                        <div className="cus-card">
                            <img className="inline-block h-10" src="/assets/003-team.png" alt="logo" />
                            <p className="font-bold mt-4">ONLINE PAYMENTS</p>
                            <p className="text-sm mt-4 text-primary-deep-gray">Our crew members are all trained and skilled and fully
                             equipped with equipment and supplies needed that we can deliver the best results.
                    </p>
                        </div>
                    </div>
                    <div className="flex-1 mt-4 md:mt-0">
                        <div className="cus-card">
                            <img className="inline-block h-10" src="/assets/004-diamond.png" alt="logo" />
                            <p className="font-bold mt-4">ENGINE CLEAN</p>
                            <p className="text-sm mt-4 text-primary-deep-gray">We offer multiple services at a great value
                             to meet your needs. We offer a premium service while saving your time and money.
                    </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WashPackages;