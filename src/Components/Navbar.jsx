import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-sm">
                <div className='container'>
                    <a className='navbar-brand' href='#home'> MyPortfolio</a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#home'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#about'>About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#skills'>Skills</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#experience'>Experience</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#projects'>Projects</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#contact'>Contact</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar