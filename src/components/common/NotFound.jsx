import React, { Component } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const NotFound = () => (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow mt-16">
                    <div>
                        <div className="mt-8 md:mt-0 px-4 md:px-24 lg:px-64 md:pt-10 md:pb-40">
                            <div className="md:px-10% xl:px-20%">
                            <div className="text-center text-6xl md:text-8xl leading-tight">
                                <span className="font-black tracking-widest">404</span>
                                <span className="text-primary-deep-gray"><i className="fa fa-question-circle-o" aria-hidden="true"></i></span>
                            </div>
                            <div className="text-center text-sm md:text-lg tracking-normal">
                                <p>Oops! the page you were looking for doesn't exist</p>
                            </div>
                            </div>
                        
                        </div>

                    </div>

                </div>
                <Footer />
            </div>
        )

export default NotFound;