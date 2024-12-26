import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            {/* <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
            <Container>
                <Navbar.Brand href='#home'>Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='#about'>About</Nav.Link>
                        <Nav.Link href='#about'>Project</Nav.Link>
                        <Nav.Link href='#about'>Skills</Nav.Link>
                        <Nav.Link href='#about'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> */}
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"></nav> */}
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container">
                    <Link className="navbar-brand" to="#home"> MERN Portfolio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" href="#about">About </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#projects"> Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
             
        </div>
    );
}

export default Header;
