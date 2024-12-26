import React from 'react'
import Marquee from 'react-fast-marquee'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from 'react-icons/fa'
import { SiBootstrap, SiGithub, SiJavascript, SiMongodb, SiNodedotjs } from 'react-icons/si'

function Skills() {
  const skills = [
    { icon: <FaHtml5 size={50} style={{ color: '#e34c26' }} />, name: 'HTML' },
    { icon: <FaCss3Alt size={50} style={{ color: '#1572B6' }} />, name: 'CSS' },
    { icon: <SiBootstrap size={50} style={{ color: '#563d7c' }} />, name: 'Bootstrap' },
    { icon: <SiJavascript size={50} style={{ color: '#f7df1e' }} />, name: 'JavaScript' },
    { icon: <FaReact size={50} style={{ color: '#61DBFB' }} />, name: 'ReactJS' },
    { icon: <SiNodedotjs size={50} style={{ color: '#68A063' }} />, name: 'Node.js' },
    { icon: <SiMongodb size={50} style={{ color: '#4DB33D' }} />, name: 'MongoDB' },
    { icon: <FaGitAlt size={40} style={{ color: '#F05032' }} />, name: 'Git' },
    { icon: <SiGithub size={40} style={{ color: '#181717' }} />, name: 'GitHub' }
  ];
  
  return (
    // <section id='skills' className='skills'>
    //   <div className='container my-5'>
    //     <h2>My Skills</h2>
    //     <div className='row'>
    //       <div className='col-md-4'>
    //         <h4>Frontend</h4>
    //         {/* <ul>
    //               <li>HTML, CSS, JavaScript</li>
    //               <li>ReactJs, Bootstrap</li>
    //             </ul> */}
    //         <p><FaHtml5 size={25} /> &nbsp;HTML</p>
    //         <p><FaCss3Alt size={25} /> &nbsp;CSS</p>
    //         <p><SiBootstrap size={25} /> &nbsp;Bootstrap</p>
    //         <p><SiJavascript size={20} /> &nbsp;JavaScript</p>
    //         <p><FaReact size={20} /> &nbsp;ReactJs</p>
    //       </div>
    //       <div className='col-md-4'>
    //         <h4>Backend</h4>
    //         <ul>
    //           <li>Node.js, Express.js</li>
    //           <li>REST APIs</li>
    //         </ul>
    //       </div>
    //       <div className='col-md-4'>
    //         <h4>Database & Tools</h4>
    //         <ul>
    //           <li>MongoDB</li>
    //           <li>Git, Vite</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h1>SKILLS</h1>
    //         <Marquee>
    //           <p><FaHtml5 size={25} style={{margin:"0px 30px"}}/><span className='w-75'>&nbsp;HTML</span></p>
    //           <p><FaCss3Alt size={25} /> &nbsp;CSS</p>
    //           <p><SiBootstrap size={25} /> &nbsp;Bootstrap</p>
    //           <p><SiJavascript size={20} /> &nbsp;JavaScript</p>
    //           <p><FaReact size={20} /> &nbsp;ReactJs</p>
    //         </Marquee>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // 1
    // <section id="skills" className="skills">
    //   <div className="container my-5">
    //     <h2 className="text-center mb-4">My Skills</h2>
    //     <div className="marquee-container">
    //       <Marquee pauseOnHover speed={100}>
    //         <div className="skill-item">
    //           <FaHtml5 size={50} className="skill-icon" />
    //           <span className="skill-name">HTML</span>
    //         </div>
    //         <div className="skill-item">
    //           <FaCss3Alt size={50} className="skill-icon" />
    //           <span className="skill-name">CSS</span>
    //         </div>
    //         <div className="skill-item">
    //           <SiBootstrap size={50} className="skill-icon" />
    //           <span className="skill-name">Bootstrap</span>
    //         </div>
    //         <div className="skill-item">
    //           <SiJavascript size={50} className="skill-icon" />
    //           <span className="skill-name">JavaScript</span>
    //         </div>
    //         <div className="skill-item">
    //           <FaReact size={50} className="skill-icon" />
    //           <span className="skill-name">ReactJS</span>
    //         </div>
    //       </Marquee>
    //     </div>
    //   </div>
    // </section>
    // 2
    <section id='skills' className='skills'>
      <div className='container my-5'>
        <h2 className='skills-heading text-center mb-5'>Skills</h2>
        <div className='skills-content'>
          <Marquee speed={50}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className='skill-item text-center mx-4'
                style={{ width: '120px' }}
              >
                {skill.icon}
                <p className='mt-2'>{skill.name}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default Skills