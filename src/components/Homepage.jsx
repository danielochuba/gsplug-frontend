import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import UNN from '../assets/images/unn.jpeg';
import ESUT from '../assets/images/esut.jpeg';
import IMT from '../assets/images/imt.png';
import AMADI from '../assets/images/amadi.jpeg';
import BORI from '../assets/images/bori.jpeg';
import FUTO from '../assets/images/futo.jpeg';
import IMOPOLY from '../assets/images/imopoly.jpeg';
import IMSU from '../assets/images/imsu.jpeg';
import LASU from '../assets/images/lasu.jpeg';
import NEKEDE from '../assets/images/nekede.png';
import UNIPORT from '../assets/images/uniport.jpeg';
import YABATECH from '../assets/images/yabatech.jpeg';
import SCRATCH from '../assets/images/scratch.jpeg'
import ADMISSION from '../assets/images/admission.jpeg'
import CHAT from '../assets/images/chat.jpeg'
import FORM from '../assets/images/forms.jpeg'
import JAMB from '../assets/images/pintresult.jpeg'
import PAYMENT from '../assets/images/fees.jpeg'
import PAST from '../assets/images/past.png'
import UPLOAD from '../assets/images/olevels.jpeg';
import CONSULT from '../assets/images/consultance.jpeg';
import POSTUTME from '../assets/images/postutme.jpeg';

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
                        <div className="md:hidden">
                            <button onClick={toggleMenu}>
                                {isMenuOpen ? (
                                    <></>
                                ) : (
                                    <FiMenu className='text-2xl'/>
                                )}
                            </button>
                        </div>
                        <div className={`md:flex space-x-4 ${isMenuOpen ? 'block ' : 'hidden'} absolute top-0 right-0 top- bg-sky-700 w-1/2 `}>
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

                        {/* Header */}
                        {/* <nav>
                            <ul className={`flex space-x-4 ${isMenuOpen ? 'hidden' : 'block'} `}>
                                <li><a href="#home" className="hover:underline">Home</a></li>
                                <li><a href="#schools" className="hover:underline">Schools</a></li>
                                <li><a href="#services" className="hover:underline">Services</a></li>
                                <li><a href="#consultants" className="hover:underline">Consultants</a></li>
                                <li><a href="#contact" className="hover:underline">Contact</a></li>
                            </ul>
                        </nav> */}

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
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={ESUT} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">ESUT</h3>
                            <p>Enugu State University of Science and Technology</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={UNN} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">UNN</h3>
                            <p>University of Nigeria, Nsukka</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={IMT} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">IMT</h3>
                            <p>Institute of Management and Technology</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={AMADI} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">AMADI</h3>
                            <p>Chukwuemeka Odumegwu Ojukwu University</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={BORI} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">BORI</h3>
                            <p>Rivers State University</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={FUTO} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">FUTO</h3>
                            <p>Federal University of Technology, Owerri</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={IMOPOLY} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">IMOPOLY</h3>
                            <p>Imo State Polytechnic</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={IMSU} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">IMSU</h3>
                            <p>Imo State University</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={LASU} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">LASU</h3>
                            <p>Lagos State University</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={NEKEDE} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">NEKEDE</h3>
                            <p>Federal Polytechnic Nekede</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={UNIPORT} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">UNIPORT</h3>
                            <p>University of Port Harcourt</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={YABATECH} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">YABATECH</h3>
                            <p>Yaba College of Technology</p>
                        </div>



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
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={SCRATCH} alt="Scratch card" className='m-auto' />
                            <h3 className="text-xl font-bold mb-2">WAEC Scratch Cards</h3>
                            <p>Purchase your WAEC scratch cards here.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={UPLOAD} alt="Post-O-levels" className='m-auto' />
                            <h3 className="text-xl font-bold mb-2">O-Level Upload Service</h3>
                            <p>Upload your O-Level results securely.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={JAMB} alt="Upload" className='m-auto' />
                            <h3 className="text-xl font-bold mb-2">JAMB / O-Level results</h3>
                            <p>Check and print your JAMB and O-Level results here.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={ADMISSION} alt="Admission" className='m-auto' />
                            <h3 className="text-xl font-bold mb-2">Admission Assistance</h3>
                            <p>Get help with your school admission guidelines.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={PAST} alt="Past questions" className='m-auto' />
                            <h3 className="text-xl font-bold mb-2">Post-UTME Past Questions</h3>
                            <p>Get past questions for your school's post-UTME.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={FORM} alt='Form' className='m-auto' />
                            <h3 className="text-xl font-bold mb-2">Form Registeration</h3>
                            <p>Purchase and Register Forms for your school</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={CONSULT} alt="Consultation" className='m-auto' />
                            <h3 className="text-xl font-bold mb-2">School Consultation</h3>
                            <p>Get information on available Schools that aligns with your needs, with your pressing question answered.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={PAYMENT} alt="Payment" className='m-auto' />
                            <h3 className="text-xl font-bold mb-2">School Fees Payment</h3>
                            <p>Pay your school fees online.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                            <img src={CHAT} alt="Chat" className='m-auto' />
                            <h3 className="text-xl font-bold mb-2">Quick Chat</h3>
                            <p>Chat with our consultants for quick assistance.</p>
                        </div>
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
