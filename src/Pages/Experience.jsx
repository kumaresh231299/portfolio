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
