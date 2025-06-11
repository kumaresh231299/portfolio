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
                            <LuDownload size={20} className="mx-2 text-black
                            " />
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
