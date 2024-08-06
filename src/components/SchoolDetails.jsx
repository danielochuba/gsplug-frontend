import React from 'react';
import { useParams } from 'react-router-dom';
import schoolsData from '../data/schoolsData'; // Adjust this import to match your data file


const SchoolDetails = () => {
  const { id } = useParams();
  const school = schoolsData.find((school) => school.id === id);

  if (!school) {
    return <div className="text-center mt-20 text-2xl">School not found</div>;
  }

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4">{school.name}</h2>
        <img src={school.logo} alt={`${school.name} logo`} className="w-32 h-32 mx-auto mb-4" />
        <p className="text-gray-600 text-lg">{school.description}</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
        <h3 className="text-3xl font-bold text-blue-500 mb-4">Details</h3>
        <p className="text-xl font-semibold text-gray-700 mb-2">Location: <span className="font-normal">{school.location}</span></p>
        <p className="text-xl font-semibold text-gray-700">Programs: <span className="font-normal">{school.programs.join(', ')}</span></p>
      </div>
    </div>
  );
};

export default SchoolDetails;

