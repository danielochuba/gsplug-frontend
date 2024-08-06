import React from 'react';
import Services from './Services';
import Schools from './Schools';
import Header from './Header';

const Homepage = () => {

    return (
        <>
            {/* Header */}
            <Header />
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
        </>
    );
};

export default Homepage;
