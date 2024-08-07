// src/pages/ContactUs.jsx

import React from 'react';
import Header from './Header';

const ContactUs = () => {
    return (
        <>
        <Header />
            <div className="container mx-auto p-8 pt-20 bg-white rounded-lg shadow-lg">
                <h2 className="text-4xl font-extrabold text-blue-600 mb-8 text-center">Contact Us</h2>
                <form className="max-w-2xl mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                            placeholder="Your Message"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </>
    );
};

export default ContactUs;
