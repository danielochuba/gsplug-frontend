import React from 'react'
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
import PERSONA from '../assets/images/persona.png'


function Services() {
    const services = [
        {
          className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
          img: { src: SCRATCH, alt: "Scratch card", className: 'm-auto' },
          h3: { className: "text-xl font-bold mb-2", text: "Scratch Card Purchase" },
          p: { text: "Purchase Waec, NECO, nabteb scratch cards..." }
        },
        {
          className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
          img: { src: UPLOAD, alt: "Post-O-levels", className: 'm-auto' },
          h3: { className: "text-xl font-bold mb-2", text: "O-Level Upload Service" },
          p: { text: "Upload your O-Level results securely." }
        },
        {
          className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
          img: { src: JAMB, alt: "Upload", className: 'm-auto' },
          h3: { className: "text-xl font-bold mb-2", text: "JAMB / O-Level results" },
          p: { text: "Check and print your JAMB and O-Level results here." }
        },
        {
          className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
          img: { src: ADMISSION, alt: "Admission", className: 'm-auto' },
          h3: { className: "text-xl font-bold mb-2", text: "Admission Guidelines" },
          p: { text: "Get help with your school admission through well-curated guidelines." }
        },
        {
          className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
          img: { src: PAST, alt: "Past questions", className: 'm-auto' },
          h3: { className: "text-xl font-bold mb-2", text: "Post-UTME Past Questions" },
          p: { text: "Get past questions for your school's post-UTME." }
        },
        {
          className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
          img: { src: FORM, alt: 'Form', className: 'm-auto' },
          h3: { className: "text-xl font-bold mb-2", text: "Form Registration" },
          p: { text: "Purchase and Register Forms for your school" }
        },
        {
          className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
          img: { src: CONSULT, alt: "Consultation", className: 'm-auto' },
          h3: { className: "text-xl font-bold mb-2", text: "School Consultation" },
          p: { text: "Get information on available Schools that aligns with your needs, with your pressing questions answered." }
        },
        {
          className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
          img: { src: PAYMENT, alt: "Payment", className: 'm-auto' },
          h3: { className: "text-xl font-bold mb-2", text: "School Fees Payment" },
          p: { text: "Pay your school fees online." }
        },
        {
          className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
          img: { src: CHAT, alt: "Chat", className: 'm-auto' },
          h3: { className: "text-xl font-bold mb-2", text: "Quick Chat" },
          p: { text: "Chat with our consultants for quick assistance." }
        },
        {
          className: "bg-white p-6 rounded-lg shadow-md justify-center text-center",
          img: { src: PERSONA, alt: "Post-UTME", className: 'm-auto' },
          h3: { className: "text-xl font-bold mb-2", text: "Documents Processing" },
          p: { text: "Get your documents processed easily, quickly, and securely. Affidavit, LGA Testimonial, FSLC, Birth Certificate, Church Attestation Letter, Medical Reports" }
        }
      ];
      
  return (
    <>
      {services.map((service, index) => (
        <div key={index} className={service.className}>
          <img src={service.img.src} alt={service.img.alt} className={service.img.className} />
          <h3 className={service.h3.className}>{service.h3.text}</h3>
          <p>{service.p.text}</p>
        </div>
      ))}
    </>
  )
}

export default Services