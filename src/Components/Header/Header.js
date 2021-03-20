import React from 'react';
import './Header.css'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home"><h2 className="text-danger">Bd UBER RIDERS </h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end ">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/destination" className="nav-link">Destination</Link>
                <Link to="#" className="nav-link">Blog</Link>
                <Link to="#" className="nav-link">Contact</Link>
                <Link to="/login" className="nav-link">Login</Link>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;