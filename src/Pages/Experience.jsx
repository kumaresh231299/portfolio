// import React from 'react'

// function Experience() {
//   return (
//     <section id='experience' className='experience'>
//         <div className='container my-5'>
//             <h2>Experience</h2>
//             <ul>
//                 <li>
//                     <strong>Apprenticeship - Mindtree (April - Sept 2022)</strong>
//                     <p>Completed training in React development.</p>
//                 </li>
//                 <li>
//                     <strong>Certification - GUVI</strong>
//                     <p>Completed MERN stack development Certification.</p>
//                 </li>
//             </ul>
//         </div>
//     </section>
//   )
// }

// export default Experience


//1
// import React from 'react';

// function Experience() {
//   return (
//     <section id="experience" className="experience py-5 bg-light">
//       <div className="container">
//         <h2 className="text-center mb-4">Experience</h2>
//         <div className="row">
//           <div className="col-md-6 mb-4">
//             <div className="card shadow-sm border-0">
//               <div className="card-body">
//                 <h5 className="card-title">Apprenticeship - Mindtree</h5>
//                 <h6 className="text-muted">April - September 2022</h6>
//                 <p className="card-text mt-3">Completed training in React development.</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6 mb-4">
//             <div className="card shadow-sm border-0">
//               <div className="card-body">
//                 <h5 className="card-title">Certification - GUVI</h5>
//                 <h6 className="text-muted">MERN Stack Development</h6>
//                 <p className="card-text mt-3">Successfully completed MERN stack development certification.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Experience;


//2
// import React from 'react';

// function Experience() {
//   return (
//     <section id='experience' className='experience'>
//       <div className='container my-5'>
//         <h2 className='section-title'>Experience</h2>
//         <ul className='experience-list'>
//           <li className='experience-item'>
//             <strong className='position-title'>Apprenticeship - Mindtree (April - Sept 2022)</strong>
//             <p className='description'>Completed training in React development.</p>
//           </li>
//           <li className='experience-item'>
//             <strong className='position-title'>Certification - GUVI</strong>
//             <p className='description'>Completed MERN stack development Certification.</p>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default Experience;


//3
import React from 'react';
import { FaBriefcase, FaCertificate } from 'react-icons/fa';

function Experience() {
  return (
    <section id="experience" className="experience py-5">
      <div className="container">
        <h2 className="text-center mb-4">Experience</h2>
        <div className="row">
          {/* Apprenticeship */}
          <div className="col-lg-6 mb-4">
            <div className="experience-card p-4 shadow-sm">
              <div className="d-flex align-items-center mb-3">
                <FaBriefcase size={30} className="text-primary me-3" />
                <strong>Apprenticeship - Mindtree (April - Sept 2022)</strong>
              </div>
              <p>Completed training in React development, gaining hands-on experience with modern frontend technologies.</p>
            </div>
          </div>

          {/* Certification */}
          <div className="col-lg-6 mb-4">
            <div className="experience-card p-4 shadow-sm">
              <div className="d-flex align-items-center mb-3">
                <FaCertificate size={30} className="text-success me-3" />
                <strong>Certification - GUVI</strong>
              </div>
              <p>Completed MERN stack development Certification, mastering skills in ReactJS, Node.js, MongoDB, and Express.js.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

// import React from 'react';

// function Experience() {
//   return (
//     <section id="experience" className="experience">
//       <div className="container">
//         <h2 className="section-title">Experience</h2>
//         <ul className="experience-list">
//           <li className="experience-item">
//             <strong className="experience-role">Apprenticeship - Mindtree (April - Sept 2022)</strong>
//             <p className="experience-description">Completed training in React development.</p>
//           </li>
//           <li className="experience-item">
//             <strong className="experience-role">Certification - GUVI</strong>
//             <p className="experience-description">Completed MERN stack development Certification.</p>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default Experience;

