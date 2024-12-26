// import React from 'react'

// function About() {
//     return (
//         <section id="about" className="about">
//             <div className='container my-5'>
//                 <h2>About Me</h2>
//                 {/* <p>
//                 I am a passionate MERN stack developer with a strong foundation in web development.
//                 I specialize in building responsive and dynamic web applications using modern
//                 technologies.
//             </p> */}
//                 <p>I am a skilled MERN stack developer with expertise in building modern web applications.</p>
//             </div>
//         </section>
//     )
// }

// export default About

//1
import React from 'react';
import myImg from '../assets/IMG_1551 copy copy--.jpg'

import { AiOutlineGithub } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
import { LuDownload } from 'react-icons/lu'

function About() {
    return (
        <section id="about" className="about">
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="section-title">About Me</h2>
                        <p className="about-text">
                            I am a skilled MERN stack developer with expertise in building modern web applications.
                            My passion lies in creating responsive, dynamic, and user-centric web solutions.
                        </p>
                        <div className='social-icons' >
                            <a href='https://github.com/kumaresh231299' target='_blank'>
                                <AiOutlineGithub size={25} className="mx-2 text-black" />
                            </a>
                            {/* <CiLinkedin size={28} style={{color:"white"}}/> */}
                            <a href='https://www.linkedin.com/in/kumaresan-subramani-0a09aa191?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bgn%2BLSUb8Syi1%2Fjk%2Fneyq9Q%3D%3D' target='_blank'>
                                <CiLinkedin size={30} className="mx-2 text-blue" />
                            </a>
                            <a href='' download='resume'>
                            <LuDownload size={20} className="mx-2 text-black" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img
                            src={myImg}
                            alt="Profile"
                            className="about-img img-fluid rounded-circle"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;


//2
// import React from 'react';

// function About() {
//     return (
//         <section id="about" className="about">
//             <div className='container'>
//                 <div className="row align-items-center">
//                     <div className="col-md-6">
//                         <img
//                             src="https://png.pngtree.com/png-clipart/20231109/original/pngtree-programmer-it-developer-png-image_13520483.png" // Add your image URL here
//                             alt="Profile"
//                             className="about-image img-fluid rounded-circle"
//                         />
//                     </div>
//                     <div className="col-md-6">
//                         <h2 className="section-title">About Me</h2>
//                         <p className="about-text">
//                             I am a skilled MERN stack developer with expertise in building modern web applications.
//                             With experience in HTML, CSS, JavaScript, ReactJS, Node.js, MongoDB, and Express.js,
//                             I am passionate about creating responsive and dynamic web applications.
//                         </p>
//                         <p className="about-text">
//                             I believe in writing clean, maintainable code and delivering seamless user experiences.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default About;
