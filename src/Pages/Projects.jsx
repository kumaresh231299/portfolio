// import React from 'react'
// import just from '../assets/user3D_img.png'

// function Projects() {

//   let data =[
//     {
//       id:1,
//       projectImg:"",
//       projectName:"Music Streaming App",
//       desc:"A full-stack application for streaming music bulit using MERN."
//     }
//   ]

//   return (
//     <section id="projects" className="projects">
//       <div className='container my-5'>
//         <h2>My Projects</h2>
//         {/* <ul>
//         <li>Music Streamming App</li>
//       </ul> */}
//         {/* <p>Music Streamming App</p> */}
//         <div className='card col-lg-4 col-md-5 col-sm-6 mb-4'>
//           <img src={just} className='card-img-top' alt='Music Streamming App' height='250px' style={{width:"250px"}}/>
//           <div className='card-body'>
//             <h5 className='card-title'>Music Streaming App</h5>
//             <p className='card-text'>A full-stack application for streaming music bulit using MERN.</p>
//             <a href='https://github.com/kumaresh231299/music-streamming-sk-fe' className='btn btn-primary' target='_blank'>Github</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Projects

import React from 'react';
import just from '../assets/user3D_img.png';

function Projects() {
  const data = [
    {
      id: 1,
      projectImg: just,
      projectName: 'Music Streaming App',
      desc: 'A full-stack application for streaming music built using MERN.',
      githubLink: 'https://github.com/kumaresh231299/music-streamming-sk-fe',
      demoLink: 'https://music-streamming-sk-fe.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="projects py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Projects</h2>
        <div className="row g-4">
          {data.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 shadow-sm">
                <img
                  src={project.projectImg}
                  className="card-img-top"
                  alt={project.projectName}
                  style={{
                    height: '200px',
                    objectFit: 'contain',
                    borderRadius: '5px 5px 0 0',
                  }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{project.projectName}</h5>
                  <p className="card-text text-muted">{project.desc}</p>
                  <div className='d-flex justify-content-between mx-2'>
                    <a
                      href={project.githubLink}
                      className="btn btn-primary mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                    <a
                      href={project.demoLink}
                      className="btn btn-primary mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
