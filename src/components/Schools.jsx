import React from 'react';
import { Link } from 'react-router-dom';
import schoolsData from '../data/schoolsData';

function Schools() {

    return (
        <>
            {schoolsData.map((school, index) => (
                <Link to={`/school/${school.id}`} key={index} className='bg-white p-6 rounded-lg shadow-md justify-center text-center'>
                    <img src={school.logo} alt={school.id} className='"w-24 h-24 mx-auto mb-4"' />
                    <h3 className="text-xl font-bold mb-2">{school.text}</h3>
                    <p>{school.name}</p>
                    <button className="bg-blue-600 mt-3 text-white px-4 py-2 rounded-lg hover:bg-blue-700">View Details</button>
                </Link>
            ))}</>
    )
}

export default Schools