import React from 'react';
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

function Schools() {
    const schools = [
        {
            className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
            img: { src: ESUT, alt: "School Logo", className: "w-24 h-24 mx-auto mb-4" },
            h3: { className: "text-xl font-bold mb-2", text: "ESUT" },
            p: { text: "Enugu State University of Science and Technology" }
        },
        {
            className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
            img: { src: UNN, alt: "School Logo", className: "w-24 h-24 mx-auto mb-4" },
            h3: { className: "text-xl font-bold mb-2", text: "UNN" },
            p: { text: "University of Nigeria, Nsukka" }
        },
        {
            className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
            img: { src: IMT, alt: "School Logo", className: "w-24 h-24 mx-auto mb-4" },
            h3: { className: "text-xl font-bold mb-2", text: "IMT" },
            p: { text: "Institute of Management and Technology" }
        },
        {
            className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
            img: { src: AMADI, alt: "School Logo", className: "w-24 h-24 mx-auto mb-4" },
            h3: { className: "text-xl font-bold mb-2", text: "AMADI" },
            p: { text: "Chukwuemeka Odumegwu Ojukwu University" }
        },
        {
            className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
            img: { src: BORI, alt: "School Logo", className: "w-24 h-24 mx-auto mb-4" },
            h3: { className: "text-xl font-bold mb-2", text: "BORI" },
            p: { text: "Rivers State University" }
        },
        {
            className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
            img: { src: FUTO, alt: "School Logo", className: "w-24 h-24 mx-auto mb-4" },
            h3: { className: "text-xl font-bold mb-2", text: "FUTO" },
            p: { text: "Federal University of Technology, Owerri" }
        },
        {
            className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
            img: { src: IMOPOLY, alt: "School Logo", className: "w-24 h-24 mx-auto mb-4" },
            h3: { className: "text-xl font-bold mb-2", text: "IMOPOLY" },
            p: { text: "Imo State Polytechnic" }
        },
        {
            className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
            img: { src: IMSU, alt: "School Logo", className: "w-24 h-24 mx-auto mb-4" },
            h3: { className: "text-xl font-bold mb-2", text: "IMSU" },
            p: { text: "Imo State University" }
        },
        {
            className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
            img: { src: LASU, alt: "School Logo", className: "w-24 h-24 mx-auto mb-4" },
            h3: { className: "text-xl font-bold mb-2", text: "LASU" },
            p: { text: "Lagos State University" }
        },
        {
            className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
            img: { src: NEKEDE, alt: "School Logo", className: "w-24 h-24 mx-auto mb-4" },
            h3: { className: "text-xl font-bold mb-2", text: "NEKEDE" },
            p: { text: "Federal Polytechnic Nekede" }
        },
        {
            className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
            img: { src: UNIPORT, alt: "School Logo", className: "w-24 h-24 mx-auto mb-4" },
            h3: { className: "text-xl font-bold mb-2", text: "UNIPORT" },
            p: { text: "University of Port Harcourt" }
        },
        {
            className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
            img: { src: YABATECH, alt: "School Logo", className: "w-24 h-24 mx-auto mb-4" },
            h3: { className: "text-xl font-bold mb-2", text: "YABATECH" },
            p: { text: "Yaba College of Technology" }
        }
    ];

    return (
        <>
            {schools.map((school, index) => (
                <div key={index} className={school.className}>
                    <img src={school.img.src} alt={school.img.alt} className={school.img.className} />
                    <h3 className={school.h3.className}>{school.h3.text}</h3>
                    <p>{school.p.text}</p>
                </div>
            ))}</>
    )
}

export default Schools