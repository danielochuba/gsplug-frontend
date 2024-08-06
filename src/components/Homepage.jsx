import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import Services from './Services';
import Schools from './Schools';

const Homepage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };
    return (
        <div className={`min-h-screen bg-gray-100 ${isMenuOpen ? 'overflow-hidden ' : ''}`}>
            {/* Header */}
            <header className="bg-blue-600 text-white p-4 w-full fixed">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">GS-Plug</h1>
                    <nav className=''>
                        <div className='lg:hidden'>
                            <div className="md:hidden">
                                <button onClick={toggleMenu}>
                                    {isMenuOpen ? (
                                        <></>
                                    ) : (
                                        <FiMenu className='text-2xl' />
                                    )}
                                </button>
                            </div>
                            <div className={` space-x-4 ${isMenuOpen ? 'block ' : 'hidden'} absolute top-0 right-0 top- bg-sky-700 w-1/2 `}>
                                <button onClick={toggleMenu}>
                                    {isMenuOpen ? (
                                        <VscChromeClose className='absolute right-3 text-2xl' />
                                    ) : (
                                        <></>
                                    )}
                                </button>
                                <ul className={`flex flex-col gap-6 text-2xl mt-10 py-10`}>
                                    <li><a href="#home" onClick={toggleMenu} className="block hover:underline p-2">Home</a></li>
                                    <li><a href="#schools" onClick={toggleMenu} className="block hover:underline p-2">Schools</a></li>
                                    <li><a href="#services" onClick={toggleMenu} className="block hover:underline p-2">Services</a></li>
                                    <li><a href="#consultants" onClick={toggleMenu} className="block hover:underline p-2">Consultants</a></li>
                                    <li><a href="#contact" onClick={toggleMenu} className="block hover:underline p-2">Contact</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className='hidden md:block lg:block'>
                            <ul className={`flex space-x-4 ${isMenuOpen ? 'hidden' : 'block'} `}>
                                <li><a href="#home" className="hover:underline">Home</a></li>
                                <li><a href="#schools" className="hover:underline">Schools</a></li>
                                <li><a href="#services" className="hover:underline">Services</a></li>
                                <li><a href="#consultants" className="hover:underline">Consultants</a></li>
                                <li><a href="#contact" className="hover:underline">Contact</a></li>
                            </ul>
                        </div>
                        
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="bg-blue-500 text-white text-center pt-40 pb-20">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Welcome to GS-Plug Info Board</h2>
                    <p className="text-lg mb-8">Find all the information you need about your school of interest</p>
                    <a href="#schools" className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-200">Learn More</a>
                </div>
            </section>

            {/* School Information Section */}
            <section id="schools" className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Schools Covered</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-5">
                        {/* Example of School Cards */}
                       <Schools />
                        {/* Add more school cards here */}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="bg-gray-100 py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">
                        {/* Example of Service Cards */}
                      <Services />
                    </div>
                </div>
            </section>
            {/* 
            Consultants Section
            <section id="consultants" className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">School Consultants</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">John Doe</h3>
                            <p>Expert in admission processes and career guidance.</p>
                        </div>
                      
                    </div>
                </div>
            </section> 
        */}

            {/* Contact Section */}
            <section id="contact" className="bg-blue-600 text-white py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="mb-8">Have any questions? Reach out to us!</p>
                    <a href="#contact-form" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">Contact Us</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 School Info Board. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;
