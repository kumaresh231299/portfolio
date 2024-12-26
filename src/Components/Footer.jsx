import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
import { LuDownload } from 'react-icons/lu'

function Footer() {
  return (
    <footer className='bg-dark text-white text-center py-3'>
      <p>&copy; 2024 MyPortfolio. All rights reserved.</p>
      <div className='social-icons' >
        <a href='https://github.com/kumaresh231299' target='_blank'>
          <AiOutlineGithub size={25} className="mx-2 text-white" />
        </a>
        {/* <CiLinkedin size={28} style={{color:"white"}}/> */}
        <a href='https://www.linkedin.com/in/kumaresan-subramani-0a09aa191?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bgn%2BLSUb8Syi1%2Fjk%2Fneyq9Q%3D%3D' target='_blank'>
          <CiLinkedin size={30} className="mx-2 text-gray" />
        </a>
        <LuDownload size={20} className="mx-2"/>
      </div>
    </footer>
  )
}

export default Footer