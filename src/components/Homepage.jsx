import React from 'react';
import UNN from '../assets/unn.jpeg';
import ESUT from '../assets/esut.jpeg';
import IMT from '../assets/imt.png';
import AMADI from '../assets/amadi.jpeg';
import BORI from '../assets/bori.jpeg';
import FUTO from '../assets/futo.jpeg';
import IMOPOLY from '../assets/imopoly.jpeg';
import IMSU from '../assets/imsu.jpeg';
import LASU from '../assets/lasu.jpeg';
import NEKEDE from '../assets/nekede.png';
import UNIPORT from '../assets/uniport.jpeg';
import YABATECH from '../assets/yabatech.jpeg';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">GS-Plug</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#schools" className="hover:underline">Schools</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#consultants" className="hover:underline">Consultants</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-blue-500 text-white text-center py-20">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Example of School Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md justify-center">
                <img src={ESUT} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ESUT</h3>
              <p>Enugu State University of Science and Technology</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md justify-center">
              <img src={UNN} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">UNN</h3>
              <p>University of Nigeria, Nsukka</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md justify-center">
              <img src={IMT} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">IMT</h3>
              <p>Institute of Management and Technology</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md justify-center">
                <img src={AMADI} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">AMADI</h3>
                <p>Chukwuemeka Odumegwu Ojukwu University</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md justify-center">
                <img src={BORI} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">BORI</h3>
                <p>Rivers State University</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md justify-center">
                <img src={FUTO} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">FUTO</h3>
                <p>Federal University of Technology, Owerri</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md justify-center">
                <img src={IMOPOLY} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">IMOPOLY</h3>
                <p>Imo State Polytechnic</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md justify-center">
                <img src={IMSU} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">IMSU</h3>
                <p>Imo State University</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md justify-center">
                <img src={LASU} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">LASU</h3>
                <p>Lagos State University</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md justify-center">
                <img src={NEKEDE} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">NEKEDE</h3>
                <p>Federal Polytechnic Nekede</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md justify-center">
                <img src={UNIPORT} alt="School Logo" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">UNIPORT</h3>
                <p>University of Port Harcourt</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md justify-center">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example of Service Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">WAEC Scratch Cards</h3>
              <p>Purchase your WAEC scratch cards here.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">O-Level Upload Service</h3>
              <p>Upload your O-Level results securely.</p>
            </div>
            {/* Add more service cards here */}
          </div>
        </div>
      </section>

      {/* Consultants Section */}
      <section id="consultants" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">School Consultants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example of Consultant Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p>Expert in admission processes and career guidance.</p>
            </div>
            {/* Add more consultant cards here */}
          </div>
        </div>
      </section>

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
