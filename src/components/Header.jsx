import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };
    return (
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
                                <li><Link to="/" onClick={toggleMenu} className="block hover:underline p-2">Home</Link></li>
                                <li><a href="#schools" onClick={toggleMenu} className="block hover:underline p-2">Schools</a></li>
                                <li><a href="#services" onClick={toggleMenu} className="block hover:underline p-2">Services</a></li>
                                <li><a href="#consultants" onClick={toggleMenu} className="block hover:underline p-2">Consultants</a></li>
                                <li><Link to="/contact" onClick={toggleMenu} className="block hover:underline p-2">Contact</Link></li>
                            </ul>
                        </div>
                    </div>


                    <div className='hidden md:block lg:block'>
                        <ul className={`flex space-x-4 ${isMenuOpen ? 'hidden' : 'block'} `}>
                            <li><a href="#home" className="hover:underline">Home</a></li>
                            <li><a href="#schools" className="hover:underline">Schools</a></li>
                            <li><a href="#services" className="hover:underline">Services</a></li>
                            <li><a href="#consultants" className="hover:underline">Consultants</a></li>
                            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                        </ul>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Header