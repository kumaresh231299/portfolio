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